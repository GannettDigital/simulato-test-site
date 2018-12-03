import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ViewStoryModal from './view-story-modal.js';

// Below svg has the following license: https://fontawesome.com/license

// Properties:
// heading
// text
// id
export default class NewsArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Row id={this.props.id} onClick={this.handleShow}>
          <Col md={2}>
            <svg id={`${this.props.id}Image`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"/></svg>
          </Col>
          <Col md={10}>
            <Row>
              <h3 id={`${this.props.id}Heading`} className="News-article-text">{this.props.heading}</h3>
            </Row>
            <Row>
              <p id={`${this.props.id}Text`} className="News-article-text">{this.props.text}</p>
            </Row>
          </Col>
        </Row>
        <ViewStoryModal 
          text={this.props.text}
          heading={this.props.heading}
          handleClose={this.handleClose}
          show={this.state.show}
          id={this.props.id}
        />
      </div>
    );
  }
}
