import React, {Component} from 'react';

const style = {
    wrapper: {
        padding: '5px 10px',
        background: '#fff',
        marginBottom: '10px',
        width: '70%',
        display: 'inline-block',
        borderRadius: '2px'
    },
    meta: {
        fontSize: '0.8em',
        color: '#ccc',
        marginTop: '2px'
    }
};

class Message extends Component {
    
    render() {
        return(
            <div>
                <div style={style.wrapper}>
                    <div style={style.message}>Hey guys! Glad to be here. Is the plan still on for the trip?</div>
                    <div style={style.meta}>Thu 23 Feb, 5:15PM</div>
                </div>
            </div>
        );
    }
}

export default Message;