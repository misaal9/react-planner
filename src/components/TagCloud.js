import React, { Component } from 'react';

class TagCloud extends Component {
    render() {
        return (
            <div id="canvas" className="tag-cloud">
                <ul id="list">
                    <li><span>sample text 1</span></li>
                    <li><span>sample text 2</span></li>
                    <li><span>sample text 3</span></li>
                </ul>
            </div>
        );
    }
}

export default TagCloud;