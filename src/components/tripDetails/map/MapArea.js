import React, {Component} from 'react';

const mapAreaStyles = {
    width: '100%',
    minHeight: '200px',
    height: '100%',
    //border: '1px solid #ccc',
    borderRadius: '2px',
    background: '#eee',
    boxShadow: 'inset 2px 2px 2px #ddd'
};

class MapArea extends Component {
    render() {
        return(
            <div style={mapAreaStyles} />
        );
    }   
}

export default MapArea;