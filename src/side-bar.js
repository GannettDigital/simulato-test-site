import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import CreateStoryModal from './create-story-modal.js';

export default class SideBar extends React.Component {
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
      <Navbar>
        <Nav>
          <NavItem onClick={this.handleShow}>
                Create Story
          </NavItem>
        </Nav>
      </Navbar>
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
