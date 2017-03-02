import React, {Component} from 'react';
import Header from '../header/Header';
import Container from '../container/Container';

const style = {
    app: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh'
    }
};

class AppContainer extends Component {
    
    renderAppSection() {
        
    }
    
    render() {
        return(
            <div className="app">
                <Header logInUser={this.props.logInUser.bind(this)} logOutUser={this.props.logOutUser.bind(this)} isLogged={this.props.isLogged} />
                <Container 
                    isLogged={this.props.isLogged}
                    logInUser={this.props.logInUser.bind(this)} 
                    logOutUser={this.props.logOutUser.bind(this)} 
                    words={this.props.words} 
                    onStarClick={this.props.onStarClick.bind(this)} 
                    onDeleteItem={this.props.onDeleteItem.bind(this)} 
                    addWord={this.props.addWord.bind(this)}
                />
            </div>            
        );
    }
}
    
export default AppContainer;