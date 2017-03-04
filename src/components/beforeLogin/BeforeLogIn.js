import React, {Component} from 'react';
import {Card, CardActions/*, CardHeader*/, CardMedia, CardTitle/*, CardText*/} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const card = {
    img: '../../img/card.svg',
    img2: 'https://www.walldevil.com/wallpapers/a76/night-lantern-power-pictures-wallpaper-minimalist-wallpapers.jpg',
    img3: 'http://www.magic4walls.com/wp-content/uploads/2014/05/minimalist-bus-vector-road-art-hd-wallpaper.jpg',
    img4: 'http://www.desktopimages.org/pictures/2015/0201/1/orig_67158.jpg',
    img5: 'https://s-media-cache-ak0.pinimg.com/736x/89/3a/b8/893ab8a0b5d78cd00e2f288ae7f7749d.jpg'
};

const style = {
    wrapper: {
        width: '90%',
        maxWidth: '768px',
        margin: '5% auto'
    },
    card: {
        marginBottom: '5%'
    }
};

class BeforeLogIn extends Component {
    
    render() {
        return (
            <div style={style.wrapper}>
                <Card style={style.card}>
                    <CardMedia>
                        <img role='presentation' src={card.img3} />
                    </CardMedia>
                    <CardTitle title='Collaborate trips with friends' subtitle='A simple trip organizer. Integrated with useful checklists, maps, and a chat platform.' />
                    <CardActions>
                        <RaisedButton label="Show Me More" primary={true} />
                    </CardActions>
                </Card>
            
                <Card style={style.card}>
                    <CardMedia>
                        <img role='presentation' src={card.img5} />
                    </CardMedia>
                    <CardTitle title='A common to-do list' subtitle='Create and collaborate on important checklists before you head out.' />
                    <CardActions>
                        <RaisedButton label="Show Me More" primary={true} />
                    </CardActions>
                </Card>
            
                <Card style={style.card}>
                    <CardMedia>
                        <img role='presentation' src={card.img2} />
                    </CardMedia>
                    <CardTitle title='Share map locations' subtitle='Mark places you and your friends are planning to visit.' />
                    <CardActions>
                        <RaisedButton label="Show Me More" primary={true} />
                    </CardActions>
                </Card>
            
                <Card style={style.card}>
                    <CardMedia>
                        <img role='presentation' src={card.img4} />
                    </CardMedia>
                    <CardTitle title='Stay in touch' subtitle='Chat client helps you coordinate. Or even share pictures after you are back.' />
                    <CardActions>
                        <RaisedButton label="Show Me More" primary={true} />
                    </CardActions>
                </Card>
            
            </div>
        );
    }
}

export default BeforeLogIn;