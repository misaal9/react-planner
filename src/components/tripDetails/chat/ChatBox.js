import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import ChatWindow from './ChatWindow';
import ChatSendMessage from './ChatSendMessage';

const chatPaperStyles = {
    margin: '20px auto',
    width: '95%',
    maxWidth: 768,
    padding: '20px'
};

class ChatBox extends Component {
    
    render() {
        return(
            <div>
                <Paper style={chatPaperStyles}>
                    <ChatWindow />
                </Paper>

                <Paper style={chatPaperStyles}>
                    <ChatSendMessage />
                </Paper>
            </div>
        );
    }
}

export default ChatBox;