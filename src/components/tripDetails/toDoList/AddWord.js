import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const paperStyle = {
    height: 'auto',
    width: '95%',
    margin: 'auto',
    maxWidth: 768,
    padding: 10,
    textAlign: 'center',
    display: 'block',
};

class AddWord extends Component {
    addWord(e) {
        e.preventDefault();
        //const value = this.refs.newWord.value; //avoid this way if you're using refs with components.
        const value = this.refs.newWord.input.value;
        if (value.trim()) {
            this.props.addWord(value);
            this.postSaveHandler();
        }

        return;
    }
    
    postSaveHandler() {
        this.refs.newWord.input.value = '';
        this.setState({
            message: 'Added successfully',
            open: true
        });
    }

    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <form onSubmit={ this.addWord.bind(this) }>
                    <TextField
                        ref="newWord"
                        hintText="Add new word"
                        fullWidth={true}
                        floatingLabelText="Enter new word to add"
                        floatingLabelFixed={true}
                    />
                    <RaisedButton onClick={this.addWord.bind(this)} secondary={true} label="Add Word" fullWidth={true} />
                </form>
            </Paper>
        );
    }
}

export default AddWord;