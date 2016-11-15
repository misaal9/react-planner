import React, { Component } from 'react';
import RenderWordItem from './RenderWordItem';
import _ from 'lodash';


class RenderWords extends Component {    
    renderWords() {
        const props = this.props;
        return _.map(props.words, (word, index) => <RenderWordItem word={word} key={index} /> );
    }
    
    render() {
        return (
            <ul id="list">  
                { this.renderWords() }
            </ul>
        );
    }
}

export default RenderWords;