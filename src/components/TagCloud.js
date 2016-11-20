import React, { Component } from 'react';
import RenderWords from './RenderWords';

class TagCloud extends Component {
    render() {
        return (
            <div id="canvas" className="tag-cloud">
                <RenderWords onStarClick={this.props.onStarClick.bind(this)} onDeleteItem={this.props.onDeleteItem.bind(this)} words={this.props.words} />
            </div>
        );
    }
}

export default TagCloud;