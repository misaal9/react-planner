import React, { Component } from 'react';

const words = [
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

]

class App extends Component {

    constructor(props) {
        super(props);
    }
    
    addWord(e) {
        // pevent page reload on submit
        e.preventDefault();

        // fetch ui to append new word to
        const ul = document.getElementById('list');
        const li = document.createElement('li');
        const input = this.refs.newWord;
        const newSpan = document.createElement('span');
        newSpan.innerHTML = input.value;
        
        // append word
        li.appendChild(newSpan);
        ul.appendChild(li);

        // reset input field
        input.value = '';
    }

    render() {
        return (
            <div className="app">
                <h2>Sample header</h2>
                <form onSubmit={ this.addWord.bind(this) }>
                    <input type="text" ref="newWord" placeholder="Enter text" /> <button type="button" onClick={ this.addWord.bind(this) } >Click</button>
                </form>
                <div id="canvas" className="tag-cloud">
                    <ul id="list">
                        <li><span>sample text 1</span></li>
                        <li><span>sample text 2</span></li>
                        <li><span>sample text 3</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
