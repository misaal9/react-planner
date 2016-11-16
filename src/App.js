import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppContainer from './components/AppContainer';
import Firebase from 'firebase';
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: null
        }
    }

    componentWillMount() {
        dbRef.on('value', snap => {
            this.setState({
                words: snap.val()
            });
        });
    }
    
    addWord(val) {
        this.state.words.push({
            text: val
        });
        dbRef.set(this.state.words);
    }
    
    onDeleteItem(itemToDelete) {
        _.remove(this.state.words, function(obj){
            return obj.text === itemToDelete;
        })
        dbRef.set(this.state.words);
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppContainer words={this.state.words} onDeleteItem={this.onDeleteItem.bind(this)} addWord={this.addWord.bind(this)} />
            </MuiThemeProvider>
        );
    }
}

export default App;