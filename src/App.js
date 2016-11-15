import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppContainer from './components/AppContainer';
injectTapEventPlugin();

const words = [
    {
        text: 'Lorem123',
        weight: 50
    },
    {
        text: 'Ipsum',
        weight: 50
    },
    {
        text: 'Hodor',
        weight: 50
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words
        }
    }

    addWord(val) {
        this.state.words.push({
            text: val,
            weight: 50
        });
        this.setState({
            words: this.state.words
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppContainer words={words} addWord={this.addWord.bind(this)} />
            </MuiThemeProvider>
        );
    }
}

export default App;
