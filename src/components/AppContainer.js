import React, {Component} from 'react';
import Header from './Header';
import AddWord from './AddWord';
import TagCloud from './TagCloud';

class AppContainer extends Component {
    render() {
        return(
            <div className="app">
                <Header />
                <AddWord words={this.props.words} addWord={this.props.addWord.bind(this)} />
                <TagCloud onDeleteItem={this.props.onDeleteItem.bind(this)} words={this.props.words}/>
            </div>            
        );
    }
}
    
export default AppContainer;