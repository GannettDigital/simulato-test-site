import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import MainContentView from './main-content-view.js';
import CreateStoryFooter from './create-story-footer.js';

class App extends Component {

  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="App-header" id="siteHeader">
            <Col xs={12} md={12}>
              <header>
                <h1 className="App-title">Welcome to USA Tomorrow</h1>
              </header>
            </Col>
          </Row>
          <Row>
            <MainContentView />
          </Row>
          <Row>
            <Col sm={12}>
              <CreateStoryFooter /> 
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
