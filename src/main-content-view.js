import React from 'react';
import {Nav, NavItem, Row, Col,
        Tab, MenuItem, NavDropdown} from 'react-bootstrap';
import CreateStoryFooter from './create-story-footer.js';
import NewsArticleRows from './news-article-rows.js';

export default class MainContentView extends React.Component {
  render() {
    return (
        <div>
        <Row className="App-header" id="siteHeader">
            <Col xs={12} md={12}>
            <header>
                <h1 className="App-title">Welcome to USA Tomorrow</h1>
            </header>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
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
        </Row> 
        <Row>
            <Col sm={12}>
                <CreateStoryFooter /> 
            </Col>
        </Row>
        </div>
    );
  }
}
