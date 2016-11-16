import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
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
    constructor(props) {
        super(props);
        this.state = {
            showAddMessage: false
        };
    }
    
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
            showAddMessage: true
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
                    <Snackbar
                      open={this.state.showAddMessage}
                      message="New word added successfully"
                      autoHideDuration={1000}
                      style={{
                          textAlign: 'center'
                      }}
                    />
                </form>
            </Paper>
        );
    }
}

export default AddWord;