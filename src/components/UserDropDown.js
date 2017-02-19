import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import Divider from 'material-ui/Divider';

const appBarStyle = {
    marginBottom: 20,
    textAlign: 'center'
};

const dropDownMenuStyle = {
    color: 'red'
}

class UserDropDown extends Component {
    onLogOutHandler() {
        this.props.logOutUser();
    }

    renderUserDropDown() {
        const props = this.props;
        
        /*return <AppBar style={appBarStyle} iconElementRight={<FlatButton onClick={this.logOutUser.bind(this)} label='Log Out'/>} />*/
        
        return (
            <IconMenu iconButtonElement={<IconButton><SettingsIcon/></IconButton>}>
                <MenuItem value={1} primaryText='Joe Black'/>
                <Divider />
                <MenuItem value={2} primaryText='View Profile'/>
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