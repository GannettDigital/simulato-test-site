import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import NewsArticleRows from './news-article-rows.js';

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
          <Row className="App-body">
            <NewsArticleRows />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
