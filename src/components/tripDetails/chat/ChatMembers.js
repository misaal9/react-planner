import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import UserInfo from '../../../services/UserInfo';

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'nowrap',
        margin: '0 0px 10px',
        overflowX: 'scroll',
        padding: '10px 0',
    }
};

const imgUrl = UserInfo.getUserInfo().photoURL;

class ChatMembers extends Component {  
    render() {
        return(
            <div style={styles.wrapper}>
                <Chip style={styles.chip}>
                  <Avatar src={imgUrl} />
                  Jack
                </Chip>
                <Chip style={styles.chip}>
                  <Avatar src={imgUrl} />
                  Helen
                </Chip>
                <Chip style={styles.chip}>
                  <Avatar src={imgUrl} />
                  Rose
                </Chip>
                <Chip style={styles.chip}>
                  <Avatar src={imgUrl} />
                  Adam
                </Chip>
                <Chip style={styles.chip}>
                  <Avatar src={imgUrl} />
                  Sid
                </Chip>
                <Chip style={styles.chip}>
                  <Avatar src={imgUrl} />
                  Ben
                </Chip>
            </div>
        );
    }
}

export default ChatMembers;