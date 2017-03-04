import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import Divider from 'material-ui/Divider';
import {white} from 'material-ui/styles/colors';
import UserInfo from '../../services/UserInfo';

class UserDropDown extends Component {
    onLogOutHandler() {
        this.props.logOutUser();
    }
    
    onViewProfileHandler() {
        console.info(UserInfo.getUserInfo());
    };
    
    getUserDisplayName() {
        return UserInfo.getUserInfo().displayName;
    }

    renderUserDropDown() {
        return (
            <IconMenu iconButtonElement={<IconButton><SettingsIcon color={white}/></IconButton>}>
                <MenuItem value={1} primaryText={this.getUserDisplayName()}/>
                <Divider />
                <MenuItem value={2} primaryText='View Profile' onClick={this.onViewProfileHandler.bind(this)}/>
                <MenuItem value={3} primaryText='Log Out' onClick={this.onLogOutHandler.bind(this)}/>
            </IconMenu>
        );
    }
    
    render() {
        return (
            <div>
                { this.renderUserDropDown() }
            </div>
        );
    }
}

export default UserDropDown;