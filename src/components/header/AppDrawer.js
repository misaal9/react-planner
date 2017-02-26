import React, {Component} from 'react';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import UserInfo from '../../services/UserInfo';

const SETTINGS = {
    docked: false,
    width: 250
}

const paperStyle = {
    height: 150,
    width: 150,
    margin: '20px auto',
    textAlign: 'center',
    display: 'block',
};

class AppDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: true
        }
    }
    onDrawerStateChangeHandler(drawerState) {
        this.props.setDrawerState(drawerState);
    }
    onRequestChangeHandler(drawerState) {
        this.onRequestChangeHandler(drawerState);
    }
    render() {
        return(
            <Drawer 
                docked={SETTINGS.docked}
                width={SETTINGS.width}
                open={this.props.drawerState}>
                onRequestChange={this.onRequestChangeHandler(this.props.drawerState)}
                <Paper style={paperStyle} zDepth={1} circle={true}>
                    <Avatar src={UserInfo.getUserInfo().photoURL} size={150} />    
                </Paper>
                <MenuItem >Add Friends</MenuItem>
                <MenuItem >Start Trip</MenuItem>
                <MenuItem >My Dashboard</MenuItem>
                <Divider />
                <MenuItem >Settings</MenuItem>
                <MenuItem >Help</MenuItem>
            </Drawer>
        );
    } 
}

export default AppDrawer;