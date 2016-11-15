import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const headerTitle = 'Word Cloud';

const appBarStyle = {
    marginBottom: 20,
    textAlign: 'center'
};

class Header extends Component {
    render() {
        return (
            <AppBar style={appBarStyle} title={headerTitle} />
        );
    }
}

export default Header;