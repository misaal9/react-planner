import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import UserDropDown from './UserDropDown';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import UserInfo from './UserInfo';

const appBarStyle = {
    marginBottom: 20,
    textAlign: 'center'
};

const paperStyle = {
    height: 150,
    width: 150,
    margin: '20px auto',
    textAlign: 'center',
    display: 'block',
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }
    logInUser() {
        this.props.logInUser();
    }
    logOutUser() {
        this.props.logOutUser();
    }
    handleToggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }
    renderHeaderButtons() {
        const props = this.props;
        if (props.isLogged) {
            return <UserDropDown logOutUser={this.logOutUser.bind(this)}/>;
        } else {
            return <FlatButton onClick={this.logInUser.bind(this)} label='Log In'/>;
        }
    }
    renderIconLeft() {
        const props = this.props;
        if (props.isLogged){
            return <IconButton><MenuIcon onClick={this.handleToggleDrawer.bind(this)} /></IconButton>;
        } else {
            return <IconButton></IconButton>;
        }
    };
    
    handleClose() {
        this.setState({
            drawerOpen: false
        });
    }
    
    render() {
        return (
            <div>
                <AppBar 
                    style={appBarStyle} 
                    iconElementRight={this.renderHeaderButtons()} 
                    iconElementLeft={this.renderIconLeft()}
                />
                <Drawer 
                    docked={false}
                    width={250}
                    open={this.state.drawerOpen}
                    onRequestChange={(open) => this.setState({open})}>
                    <Paper style={paperStyle} zDepth={1} circle={true}>
                        <Avatar src={UserInfo.getUserInfo().photoURL} size={150} />    
                    </Paper>
                    <MenuItem onClick={this.handleToggleDrawer.bind(this)} >Add Friends</MenuItem>
                    <MenuItem onClick={this.handleToggleDrawer.bind(this)} >Start Trip</MenuItem>
                    <MenuItem onClick={this.handleToggleDrawer.bind(this)} >My Dashboard</MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleToggleDrawer.bind(this)} >Settings</MenuItem>
                    <MenuItem onClick={this.handleToggleDrawer.bind(this)} >Help</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;