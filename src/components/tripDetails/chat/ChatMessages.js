import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RenderChatMessages from './RenderChatMessages';

const styles = {
    wrapper: {
        background: '#eee',
        padding: '10px',
        boxShadow: 'inset 2px 2px 2px #ddd',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column-reverse'
    }
};

class ChatMessages extends Component {
    render() {
        return(
            <div style={styles.wrapper}>
                <RenderChatMessages />
            </div>
        );
    }
}

export default ChatMessages;