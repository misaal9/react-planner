import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import UserDropDown from './UserDropDown';
//import AppDrawer from './AppDrawer';

const style = {
    buttons: {
        color: '#fff',
        margin: '5px 0'
    },
    appBarStyle: {
        textAlign: 'center',
        position: 'fixed',
        top: 0,
        maxHeight: '8vh'
    }
}

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
    aboutSection(){
        console.info('about section');
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
    renderRightSetion() {
        const props = this.props;
        if (props.isLogged) {
            return <UserDropDown logOutUser={this.logOutUser.bind(this)}/>;
        } else {
            return (
                <div>
                    <FlatButton style={style.buttons} onClick={this.aboutSection.bind(this)} label='What is this?'/>
                    <FlatButton style={style.buttons} onClick={this.logInUser.bind(this)} label='Log In'/>
                </div>
            );
        };
    }
    renderLeftSection() {
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
                    style={style.appBarStyle} 
                    iconElementRight={this.renderRightSetion()} 
                    iconElementLeft={this.renderLeftSection()}
                />
                
            </div>
        );
    }
}

export default Header;