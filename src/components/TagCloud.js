import React, { Component } from 'react';
import RenderWords from './RenderWords';

class TagCloud extends Component {
    render() {
        return (
            <div id="canvas" className="tag-cloud">
                <RenderWords words={this.props.words} />
            </div>
        );
    }
}

export default TagCloud;