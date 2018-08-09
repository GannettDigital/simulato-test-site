import React from 'react';
import {Nav, NavItem, Row, Col,
        Tab, MenuItem, NavDropdown} from 'react-bootstrap';
import NewsArticleRows from './news-article-rows.js';

export default class MainContentView extends React.Component {
  render() {
    return (
        <div style={{flex: 3}}>
                <Col xs={12} md={12}>
                <Tab.Container id="main-tab-content">
                    <Row className="clearFix">
                    <Col xs={12} md={12}>
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
                        <Tab.Content animation>
                            <Tab.Pane eventKey={1}>
                                <Row className="App-body" id="tab-section-1">
                                    <Col xs={12} md={12}>
                                        <NewsArticleRows id="tab-section-1"/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <Row className="App-body" id="tab-section-2">
                                    <Col xs={12} md={12}>
                                        <NewsArticleRows id="tab-section-2"/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={3}>
                                <Row className="App-body" id="tab-section-3">
                                    <Col xs={12} md={12}>
                                        <NewsArticleRows id="tab-section-3"/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={4}>
                                <Row className="App-body" id="tab-section-4">
                                    <Col xs={12} md={12}>
                                        <NewsArticleRows id="tab-section-4"/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
                </Col>
        </div>
    );
  }
}
