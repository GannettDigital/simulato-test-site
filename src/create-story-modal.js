import React from 'react';
import { Modal, Button, form, FormGroup, 
        FormControl, ControlLabel,  } from 'react-bootstrap';

export default class CreateStoryModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.createStory = this.createStory.bind(this);
    
        this.state = {
          titleValue: '',
          bodyValue: '',
          categoryValue: '',
        };
    }

    handleTitleChange(e) {
        this.setState({ titleValue: e.target.value });
    }

    handleBodyChange(e) {
        this.setState({ bodyValue: e.target.value });
    }

    handleCategoryChange(e) {
        this.setState({ categoryValue: e.target.value });
    }

    createStory(event) {
        event.preventDefault();
        this.props.addArticle(this.state.titleValue, this.state.bodyValue, this.state.categoryValue);
        this.setState({titleValue: ''});
        this.setState({bodyValue: ''});
        this.setState({categoryValue: ''});
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
                <FormGroup controlId={`${this.props.id}ModalTitleText`}>
                    <ControlLabel>Enter Story Title</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.titleValue}
                        placeholder="Enter text"
                        onChange={this.handleTitleChange}
                    />
                </FormGroup>
                <FormGroup controlId={`${this.props.id}ModalStoryBodyText`}>
                    <ControlLabel>Enter story text</ControlLabel>
                    <FormControl
                        value={this.state.bodyValue}
                        componentClass="textarea"
                        placeholder="Story Body"
                        onChange={this.handleBodyChange}
                    />
                </FormGroup>
                <FormGroup controlId={`${this.props.id}ModalSelectClassification`}>
                <ControlLabel id={`${this.props.id}ModalSelectClassification`}>Select A Classification</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.categoryValue}
                    onChange={this.handleCategoryChange}
                >
                    <option value="topStories">Top Stories</option>
                    <option value="breakingStories">Breaking Stories</option>
                    <option value="simulatoStories">Simulato Stories</option>
                </FormControl>
                </FormGroup>
                <Button type="submit" onClick={this.createStory} id={`${this.props.id}ModalSubmitButton`}>Submit</Button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button id={`${this.props.id}ModalCloseButton`} onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
