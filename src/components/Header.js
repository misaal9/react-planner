import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import UserDropDown from './UserDropDown';

const appBarStyle = {
    marginBottom: 20,
    textAlign: 'center'
};

class Header extends Component {
    renderIconMenu() {
        return (
            <IconMenu 
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', veritcal: 'top' }}
                targetOrigin={{ horizontal: 'left', veritcal: 'bottom' }} >
                <MenuItem primaryText='Settings'/>
                <MenuItem primaryText='Help'/>
                <MenuItem primaryText='Logout'/>
            </IconMenu>
        );
    }
    
    logInUser() {
        this.props.logInUser();
    }
    
    logOutUser() {
        this.props.logOutUser();
    }
    
    renderHeaderButtons() {
        const props = this.props;
        if (props.isLogged) {
            return <UserDropDown logOutUser={this.logOutUser.bind(this)}/>
        } else {
            return <FlatButton onClick={this.logInUser.bind(this)} label='Log In'/>
        }
    }
    
    render() {
        return (
            <AppBar style={appBarStyle} iconElementRight={this.renderHeaderButtons()} />
        );
    }
}

export default Header;