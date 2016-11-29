import React, {Component} from 'react';
import Header from './Header';
import Workspace from './Workspace';

class AppContainer extends Component {
    render() {
        return(
            <div className="app">
                <Header logInUser={this.props.logInUser.bind(this)} logOutUser={this.props.logOutUser.bind(this)} isLogged={this.props.isLogged} />
                <Workspace isLogged={this.props.isLogged} words={this.props.words} addWord={this.props.addWord.bind(this)} onStarClick={this.props.onStarClick.bind(this)} onDeleteItem={this.props.onDeleteItem.bind(this)}/>
            </div>            
        );
    }
}
    
export default AppContainer;