import React from 'react';
import { Modal, Button, form, FormGroup, 
        FormControl, ControlLabel,  } from 'react-bootstrap';

export default class CreateStoryModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.createStory = this.createStory.bind(this);
    
        this.state = {
          titleValue: '',
          bodyValue: '',
        };
    }

    handleTitleChange(e) {
        this.setState({ value: e.target.titleValue });
    }

    handleBodyChange(e) {
        this.setState({ value: e.target.bodyValue });
    }

    createStory(event) {
        event.preventDefault();
        alert(this.state.titleValue);
        alert(this.state.bodyValue);
        this.props.handleClose();
    }


  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose} id={this.props.id}>
        <Modal.Header closeButton>
            <Modal.Title id={`${this.props.id}ModalTitle`}>Create Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id={`${this.props.id}ModalForm`}>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Enter Story Title</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="formControlsTextArea">
                    <ControlLabel>Enter story text</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        placeholder="Story Body"
                        onChange={this.handleBodyChange}
                    />
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select A Classification</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">Top Stories</option>
                    <option value="option1">Breaking Stories</option>
                    <option value="option1">Simulato Stories</option>
                </FormControl>
                </FormGroup>
                <Button type="submit" onClick={this.createStory}>Submit</Button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button id={`${this.props.id}ModalCloseButton`} onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
