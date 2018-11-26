import React from 'react';
import {Nav, NavItem, Row, Col,
        Tab, MenuItem, NavDropdown} from 'react-bootstrap';
import NewsArticleRows from './news-article-rows.js';
import BreakingNewsHeader from './breaking-news-header.js';

export default class MainContentView extends React.Component {
    constructor(props) {
        super(props);

        var setActive = 1;
        if(props.setActive) {
            setActive = props.setActive;
        };
        this.state = {
            activeTab: setActive
        };

        this.updateTab = this.updateTab.bind(this);
    }

    updateTab(key) {
        this.setState({
            activeTab: key
        });
    }


  render() {
    return (
        <div style={{flex: 3}}>
                <BreakingNewsHeader />
                <Col xs={12} md={12}>
                <Tab.Container activeKey={this.state.activeTab} onSelect={this.updateTab} id="mainTabContent">
                    <Row className="clearFix">
                    <Col xs={12} md={12}>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey={1}>Home</NavItem>
                            <NavItem eventKey={2}>Top Stories</NavItem>
                            <NavItem eventKey={3}>Breaking Stories</NavItem>
                            <NavItem eventKey={4}>Simulato Stories</NavItem>
                            <NavDropdown eventKey={5} title="Other News" id="navDropdown">
                                <MenuItem eventKey="4.1">Here</MenuItem>
                                <MenuItem eventKey="4.2">There</MenuItem>
                                <MenuItem eventKey="4.3">Anywhere</MenuItem>
                                <MenuItem eventKey="4.4">Green Eggs and Ham</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Tab.Content animation>
                            <Tab.Pane eventKey={1}>
                                <Row className="App-body" id="home">
                                    <Col xs={12} md={12}>
                                        <NewsArticleRows key="home" tab="home" articles={this.props.articles} />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <Row className="App-body" id="topStories">
                                    <Col xs={12} md={12}>
                                        <NewsArticleRows key="topStories" tab="topStories" articles={this.props.articles} />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={3}>
                                <Row className="App-body" id="breakingStories">
                                    <Col xs={12} md={12}>
                                        <NewsArticleRows key="breakingStories" tab="breakingStories" articles={this.props.articles} />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={4}>
                                <Row className="App-body" id="simulatoStories">
                                    <Col xs={12} md={12}>
                                        <NewsArticleRows key="simulatoStories" tab="simulatoStories" articles={this.props.articles} />
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
