import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';

class RenderWordItem extends Component {
    render() {
        return (
            <ListItem primaryText={this.props.word.text} leftIcon={<ActionGrade />} />
        );
    }
}

export default RenderWordItem;