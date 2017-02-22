import React, {Component} from 'react';
import IconStar from 'material-ui/svg-icons/toggle/star';
import {red500} from 'material-ui/styles/colors';

const divStyle = {
    width: '60%',
    fontSize: '1.5em',
    margin: '12% auto 0',
    textAlign: 'center',
    fontWeight: '100'
};

const iconStarStyle = {
    width: '130px',
    height: '130px'
}

const smallerText = {
    fontSize: '1em',
    color: 'red',
    marginBottom: '20px'
}

class BeforeLogIn extends Component {
    
    render() {
        return (
            <div style={divStyle}>
                <IconStar style={iconStarStyle} color={red500}/>
                <div style={smallerText}>
                    You can use this app to plan get togethers by adding your friends and planning an itenerary together
                </div>
                <div>Loggin in makes it easier to save your data</div>
            </div>
        );
    }
}

export default BeforeLogIn;