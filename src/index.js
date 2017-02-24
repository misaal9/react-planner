import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);
