import React, { Component } from 'react';

class RenderWordItem extends Component {
    render() {
        return (
            <li> { this.props.word.text } </li>
        );
    }
}

export default RenderWordItem;