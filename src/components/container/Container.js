import React, {Component} from 'react';
import BeforeLogIn from '../beforeLogin/BeforeLogIn';
import TripDetails from '../tripDetails/TripDetails';

class Container extends Component {
    renderContainer(){
        if (this.props.isLogged) {
            return (
                <div>
                    <TripDetails 
                        props={this.props} 
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
        } else {
            return (
                <BeforeLogIn />
            );
        }
    };
    
    render() {
        return (
            <div>
                {this.renderContainer()}
            </div>
        )
    };
}

export default Container;