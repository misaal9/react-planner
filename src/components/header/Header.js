import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import UserDropDown from './UserDropDown';
//import AppDrawer from './AppDrawer';

const appBarStyle = {
    marginBottom: 20,
    textAlign: 'center'
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
    handleClose() {
        this.setState({
            drawerOpen: false
        });
    }
    onDrawerStatehandler(newState) {
        this.setState({
            drawerOpen: newState
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
    
    render() {
        return (
            <div>
                <AppBar 
                    style={appBarStyle} 
                    iconElementRight={this.renderHeaderButtons()} 
                    iconElementLeft={this.renderIconLeft()}
                />
                
            </div>
        );
    }
}

export default Header;