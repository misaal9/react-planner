import React, {Component} from 'react';
import ChatMembers from './ChatMembers';
import ChatMessages from './ChatMessages';

class ChatWindow extends Component {
    
    render() {
        return(
            <div>
                <ChatMembers />
                <ChatMessages />
            </div>
        );
    }
}

export default ChatWindow;