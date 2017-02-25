import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchInput extends Component {
    state = {
        dataSource: [],
    };

    handleUpdateInput = (value) => {
        this.setState({
          dataSource: [
            value,
            value + value,
            value + value + value,
          ],
        });
    };

    render() {
        return(
            <AutoComplete
                hintText="Start typing to search for a place"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                floatingLabelText="Find a place"
                fullWidth={true}
            />
        );
    }   
}

export default SearchInput;