import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    wrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'space-around'
    },
    text: {
        flex: 4,
        margin: '0 10px'
    },
    button: {
        flex: 1,
        margin: '0 10px'
    }
};

class Message extends Component {
    
    render() {
        return(
            <div style={style.wrapper}>
                <div style={style.text}>
                    <TextField 
                        hintText="Send message"
                        fullWidth={true}
                    />
                </div>
                <div style={style.button}>
                    <RaisedButton label="Send" primary={true} style={style} fullWidth={true}/>
                </div>
            </div>
        );
    }
}

export default Message;