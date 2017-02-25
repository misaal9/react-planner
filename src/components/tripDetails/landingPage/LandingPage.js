import React, {Component} from 'react';
import ToDoList from '../toDoList/ToDoList';
import ChatBox from '../chat/ChatBox';
import MapBox from '../map/MapBox';


import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconMaps from 'material-ui/svg-icons/communication/location-on';
import IconToDoList from 'material-ui/svg-icons/editor/format-list-numbered';
import IconChat from 'material-ui/svg-icons/communication/chat';

const toDoIcon = <IconToDoList />;
const mapsIcon = <IconMaps />;
const chatIcon = <IconChat />;

const sectionHolderStyles = {
    marginBottom: '80px'
}

const paperBottomNavStyles = {
    width: '100%',
    position: 'fixed',
    bottom: 0
};

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 0
        }
    }
    
    renderTodoList() {
        return (
            <ToDoList 
                isLogged={this.props.isLogged} 
                words={this.props.words} 
                addWord={this.props.addWord.bind(this)} 
                onStarClick={this.props.onStarClick.bind(this)} 
                onDeleteItem={this.props.onDeleteItem.bind(this)}
            />
        );
    };
    
    renderMaps() {
        return(
            <MapBox />
        );
    }
    
    renderChats() {
        return(
            <ChatBox />
        );
    }

    changeTo(index) {
        this.setState({
            currentSection: index
        });
    }

    renderBottomNavigation() {
        return (
            <Paper style={paperBottomNavStyles} zDepth={1}>
                <BottomNavigation selectedIndex={this.state.currentSection}>
                    <BottomNavigationItem
                        label='To Do Items'
                        icon={toDoIcon}
                        onClick={() => this.changeTo(0)}
                    />
                    <BottomNavigationItem
                        label='Map'
                        icon={mapsIcon}
                        onClick={() => this.changeTo(1)}
                    />
                    <BottomNavigationItem
                        label='Chats'
                        icon={chatIcon}
                        onClick={() => this.changeTo(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }

    renderLandingPage() {
        var self = this;
        switch (this.state.currentSection) {
            case 0:
                return self.renderTodoList();
                break;
            case 1:
                return self.renderMaps();
                break;
            case 2:
                return self.renderChats();
                break;
            default:
                self.renderTodoList();
        }
    }
    
    render() {
        return (
            <div>
                <div style={sectionHolderStyles}> {this.renderLandingPage()} </div>
                <div> {this.renderBottomNavigation()} </div>
            </div>
        );
    };
}

export default LandingPage;