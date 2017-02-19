import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppContainer from './components/AppContainer';
import Snackbar from 'material-ui/Snackbar';
import Firebase from 'firebase';
import UserInfo from './components/UserInfo';
import _ from 'lodash';
injectTapEventPlugin();

var config = {
    apiKey: "AIzaSyATcfGAQ72P5bnZmUI1eZgTHx5XKP9xLps",
    authDomain: "react-planner.firebaseapp.com",
    databaseURL: "https://react-planner.firebaseio.com",
    storageBucket: "react-planner.appspot.com",
    messagingSenderId: "367274963448"
};

Firebase.initializeApp(config);

const dbRef = Firebase.database().ref().child('words');
let userId = null;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: null,
            openSnackbar: false,
            messageSnackbar: '',
            isLogged: false
        }
    }
    
    logInUser() {
        var self = this;
        const provider = new Firebase.auth.GoogleAuthProvider();
        Firebase.auth().signInWithPopup(provider).then(function(result){
            console.info('result222', result.user);
            UserInfo.setUserInfo(result.user);
            self.setState({
                isLogged: true
            });
        }).catch(function(err){
            console.error(err);
        });
    }
    
    logOutUser() {
        var self = this;
        Firebase.auth().signOut().then(function(result){
            self.setState({
                isLogged: false
            });
        }).catch(function(err){
            console.error(err);
        });
    }

    componentWillMount() {
        var self = this;
        // check if currentUser already exists or not
        Firebase.auth().onAuthStateChanged(function(user){
            if (user) {
                console.info('User is logged in');
                console.info('logged in user is: ', Firebase.auth().currentUser);
                UserInfo.setUserInfo(user);
                self.setState({
                    isLogged: true
                });
            } else {
                console.info('User is NOT logged in');
                self.setState({
                    isLogged: false
                });
            }
        });
        
        dbRef.on('value', snap => {
            this.setState({
                words: snap.val()
            });
        });
    }
    
    addWord(val) {
        //check if word already exists
        var isAddedAlready = _.find(this.state.words, function(word){
            return word.text.toLowerCase() === val.toLowerCase().trim();
        });
        if (!isAddedAlready) {
            this.state.words.push({
                text: val,
                isStarred: false
            });
            dbRef.set(this.state.words);
            this.setState({
                openSnackbar: true,
                messageSnackbar: 'Added successfully'
            });
        } else {
            this.setState({
                openSnackbar: true,
                messageSnackbar: 'Task already added'
            });
        }
    }
    
    onDeleteItem(itemToDelete) {
        if (this.state.words.length > 1) {
            _.remove(this.state.words, function(obj){
                return obj.text === itemToDelete;
            })
            dbRef.set(this.state.words);
            this.setState({
                openSnackbar: true,
                messageSnackbar: 'Removed successfully'
            });
        } else {
            this.setState({
                openSnackbar: true,
                messageSnackbar: 'Atleast 1 task needs to be added'
            });
            return;            
        }
        
    }
    
    onStarClick(val) {
        var item = _.find(this.state.words, function(word){
            return word.text === val;
        });
        item.isStarred = !item.isStarred;
        dbRef.set(this.state.words);
        this.setState({
                openSnackbar: true,
                messageSnackbar: 'Updated successfully'
            });
    }

    render() {
        return (
            <div>
                <AppContainer logInUser={this.logInUser.bind(this)} logOutUser={this.logOutUser.bind(this)} isLogged={this.state.isLogged} words={this.state.words} onStarClick={this.onStarClick.bind(this)} onDeleteItem={this.onDeleteItem.bind(this)} addWord={this.addWord.bind(this)} />
                <Snackbar
                  open={this.state.openSnackbar}
                  message={this.state.messageSnackbar}
                  autoHideDuration={1000}
                  style={{
                      textAlign: 'center'
                  }}
                />
            </div>
        );
    }
}

export default App;