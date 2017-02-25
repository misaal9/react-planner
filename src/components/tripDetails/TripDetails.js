import React, { Component } from 'react';
import LandingPage from './landingPage/LandingPage';

class TripDetails extends Component {
    
    render() {
        return (
            <div>
                <LandingPage 
                    isLogged={this.props.isLogged} 
                    words={this.props.words} 
                    addWord={this.props.addWord.bind(this)} 
                    onStarClick={this.props.onStarClick.bind(this)} 
                    onDeleteItem={this.props.onDeleteItem.bind(this)}
                />
            </div>
        )
    }
}

export default TripDetails;