import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';

class RenderWordItem extends Component {
    constructor(){
        super();
        this.state = {
            open: false,
            messageRemove: 'Task removed'
        };
    }
    onDeleteItem() {
        const itemToDelete = this.props.word.text;
        this.props.onDeleteItem(itemToDelete);
    }
    
    render() {
        return (
            <div>
                <ListItem primaryText={this.props.word.text} leftIcon={<ActionGrade />} rightIcon={<ActionDelete onClick={this.onDeleteItem.bind(this)} color={red500} />}/>
            </div>
        );
    }
}

export default RenderWordItem;