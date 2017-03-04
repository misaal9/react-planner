import React, { Component } from 'react';
import AddWord from './AddWord';
import TaskList from './TaskList';

class ToDoList extends Component {
    renderWorkspace() {
        return (
            <div>
                <AddWord words={this.props.words} addWord={this.props.addWord.bind(this)} />
                <TaskList onStarClick={this.props.onStarClick.bind(this)} onDeleteItem={this.props.onDeleteItem.bind(this)} words={this.props.words}/>
            </div>
        )
    }
    render() {
        return (
            <div>
                { this.renderWorkspace() }
            </div>
        );
    }
}

export default ToDoList;