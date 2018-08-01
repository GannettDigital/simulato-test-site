import React from 'react';
import {Button } from 'react-bootstrap';
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
      <footer className="pull-right">
        <Button bsStyle="primary" id= "createStoryButton" onClick={this.handleShow}>
          Create Story
        </Button>
      </footer>
      <CreateStoryModal
        handleClose={this.handleClose}
        show={this.state.showStoryModal}
        id="createStory"
      >
      </CreateStoryModal>
    </div>
    );
  }
}
