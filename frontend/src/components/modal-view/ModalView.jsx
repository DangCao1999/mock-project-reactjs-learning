import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export class ModalView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.isShow} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>View Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="form.id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="student ID"
                                disabled={true}
                                value={this.props.student?.id}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="student name"
                                disabled={true}
                                value={this.props.student?.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="student phone number"
                                disabled={true}
                                value={this.props.student?.phone}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}