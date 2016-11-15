import React, { Component } from 'react';
import Header from './components/Header';
import AddWord from './components/AddWord';
import TagCloud from './components/TagCloud';

/*const words = [
    {
        'text': 'sample text 1',
        'size': 10
    },
    {
        'text': 'sample text 2',
        'size': 10
    },
    {
        'text': 'sample text 3',
        'size': 10
    }

]*/

class App extends Component {

    addWord(val) {
        // fetch ui to append new word to
        const ul = document.getElementById('list');
        const li = document.createElement('li');
        const newSpan = document.createElement('span');
        
        // value that was passed will be the value to add to view
        newSpan.innerHTML = val;
        
        // append word
        li.appendChild(newSpan);
        ul.appendChild(li);
    }

    render() {
        return (
            <div className="app">
                <Header />
                <AddWord addWord={this.addWord.bind(this)} />
                <TagCloud />
            </div>
        );
    }
}

export default App;
