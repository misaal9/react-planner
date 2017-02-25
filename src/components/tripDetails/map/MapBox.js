import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import SearchInput from './SearchInput';
import MapArea from './MapArea';

const mapPaperStyles = {
    margin: '20px auto',
    width: '95%',
    maxWidth: 768,
    padding: '20px'        
};

class MapBox extends Component {    
    render() {
        return(
            <div>
                <Paper style={mapPaperStyles}>
                    <SearchInput />
                </Paper>
                <Paper style={mapPaperStyles}>
                    <MapArea />
                </Paper>
            </div>
        );
    }
}

export default MapBox;