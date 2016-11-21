import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';
import {amber500} from 'material-ui/styles/colors';
import {grey500} from 'material-ui/styles/colors';

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
    onStarClick() {
        const itemToDelete = this.props.word.text;
        this.props.onStarClick(itemToDelete);
    }
    renderStarColor() {
        return {amber500};
    }
    render() {
        return (
            <div>
                <ListItem primaryText={this.props.word.text} leftIcon={<ActionGrade color={this.props.word.isStarred ? amber500 : grey500 } onClick={this.onStarClick.bind(this)} />} rightIcon={<ActionDelete onClick={this.onDeleteItem.bind(this)} color={red500} />}/>
            </div>
        );
    }
}

export default RenderWordItem;