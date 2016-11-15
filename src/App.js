import React, { Component } from 'react';
import Header from './components/Header';
import AddWord from './components/AddWord';
import TagCloud from './components/TagCloud';

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
            <div className="app">
                <Header />
                <AddWord words={words} addWord={this.addWord.bind(this)} />
                <TagCloud words={words}/>
            </div>
        );
    }
}

export default App;
