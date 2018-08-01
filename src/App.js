import React, { Component } from 'react';
import { Grid, Row, Col, Nav, 
  NavItem, NavDropdown, MenuItem, Tab } from 'react-bootstrap';
import './App.css';
import NewsArticleRows from './news-article-rows';
import SideBar from './side-bar';

class App extends Component {

  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="App-header" id="siteHeader">
            <Col xs={10} md={10}>
              <header>
                <h1 className="App-title">Welcome to USA Tomorrow</h1>
              </header>
            </Col>
          </Row>
          <Col xs={2} md={2}>
            <Row className="side-bar">
              <SideBar />
            </Row> 
          </Col>
          <Col xs={10} md={10}>
          <Tab.Container id="main-tab-content">
            <Row className="clearFix">
              <Col sm={12}>
                <Nav bsStyle="tabs">
                  <NavItem eventKey={1}>Home</NavItem>
                  <NavItem eventKey={2}>Top Stories</NavItem>
                  <NavItem eventKey={3}>Breaking Stories</NavItem>
                  <NavItem eventKey={4}>Simulato Stories</NavItem>
                  <NavDropdown eventKey={5} title="Other News" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Here</MenuItem>
                    <MenuItem eventKey="4.2">There</MenuItem>
                    <MenuItem eventKey="4.3">Anywhere</MenuItem>
                    <MenuItem eventKey="4.4">Green Eggs and Ham</MenuItem>
                  </NavDropdown>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content animation>
                  <Tab.Pane eventKey={1}><Row className="App-body"><NewsArticleRows /></Row></Tab.Pane>
                  <Tab.Pane eventKey={2}><Row className="App-body"><NewsArticleRows /></Row></Tab.Pane>
                  <Tab.Pane eventKey={3}><Row className="App-body"><NewsArticleRows /></Row></Tab.Pane>
                  <Tab.Pane eventKey={4}><Row className="App-body"><NewsArticleRows /></Row></Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
