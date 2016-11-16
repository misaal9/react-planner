import React, { Component } from 'react';
import RenderWordItem from './RenderWordItem';
import {List} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

const paperStyle = {
    height: 'auto',
    width: '95%',
    margin: 'auto',
    maxWidth: 768,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    textAlign: 'left',
    display: 'block',
};

class RenderWords extends Component {    
    renderWords() {
        const props = this.props;
        return _.map(props.words, (word, index) => <RenderWordItem onDeleteItem={this.props.onDeleteItem.bind(this)} word={word} key={index} /> );
    }
    
    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <List>
                    { this.renderWords() }
                </List>
            </Paper>
        );
    }
}

export default RenderWords;