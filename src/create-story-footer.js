import React from 'react';
import {Button, Navbar, Nav } from 'react-bootstrap';
import CreateStoryModal from './create-story-modal.js';

export default class CreateStoryFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStoryModal: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleClose() {
    this.setState({ showStoryModal: false });
  }

  handleShow() {
    this.setState({ showStoryModal: true });
  }

  render() {
    return (
    <div>
      <footer>
        <Navbar fixedBottom={true}>
          <Navbar.Text>
            Total Articles: {this.props.articles.length}
          </Navbar.Text>
          <Nav pullRight>
            <Button bsStyle="primary" className="footer-button" id="createStoryButton" onClick={this.handleShow}>
              Create Story
            </Button>
            <Button bsStyle="primary" className="footer-button" id="refreshStoriesButton" onClick={this.props.refreshArticles}>
              Refresh
            </Button>
          </Nav>
        </Navbar>
      </footer>
      <CreateStoryModal
        handleClose={this.handleClose}
        show={this.state.showStoryModal}
        id="createStory"
        addArticle={this.props.addArticle}
      >
      </CreateStoryModal>
    </div>
    );
  }
}
