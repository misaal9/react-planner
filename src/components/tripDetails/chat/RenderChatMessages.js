import React, {Component} from 'react';
import Message from './Message';

class RenderChatMessages extends Component {
    
    render() {
        return(
            <div>
                <Message />
                <Message />
                <Message />
                <Message ownMsg={true} />
            </div>
        );
    }
}

export default RenderChatMessages;