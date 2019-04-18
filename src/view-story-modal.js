import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ViewStoryModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} id={`${this.props.id}ViewModal`}>
                <Modal.Header closeButton>
                    <Modal.Title id={`${this.props.id}ModalTitle`}>{this.props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p id={`${this.props.id}ModalBodyText`}>{this.props.text}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button id={`${this.props.id}ModalCloseButton`} onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}