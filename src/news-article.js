import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import NewsIcon from './news-icon.png';
import ViewStoryModal from './view-story-modal.js';

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
          <Col xs={2} md={2}>
            <Image id={`${this.props.id}Image`} responsive src={NewsIcon} alt="thumbnail" />
          </Col>
          <Col xs={10} md={10}>
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
