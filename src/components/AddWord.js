import React, { Component } from 'react';

class AddWord extends Component {
    addWord(e) {
        e.preventDefault();
        const value = this.refs.newWord.value;

        if (value.trim()) {
            this.props.addWord(value);
            this.refs.newWord.value = '';
        }

        return;
    }

    render() {
        return (
            <form onSubmit={ this.addWord.bind(this) }>
                <input type="text" ref="newWord" placeholder="Enter text" /> <button type="button" onClick={this.addWord.bind(this)} >Click</button>
            </form>
        );
    }
}

export default AddWord;