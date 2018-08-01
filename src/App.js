import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import MainContentView from './main-content-view.js';

class App extends Component {

  render() {
    return (
      <div>
        <Grid fluid>
          <MainContentView />
        </Grid>
      </div>
    );
  }
}

export default App;
