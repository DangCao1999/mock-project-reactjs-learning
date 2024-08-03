import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { fetchStudent, updateStudent, createStudent } from '../../services/studentService';

export class ModalCreateOrUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdate: this.props?.id !== undefined && this.props?.id !== null,
            id: "",
            name: "",
            phone: "",
        }
        if (this.state.isUpdate) {
            this.loadStudent(this.props.id);
        }
    }

    loadStudent = async (id) => {
        let student = await fetchStudent(id);
        this.setState({
            id: student.id,
            name: student.name,
            phone: student.phone,
        })
    }

    onIdChange = (event) => {
        this.setState({ id: event.target.value });
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onPhoneChange = (event) => {
        this.setState({ phone: event.target.value });
    }

    handleSubmit = async () => {
        if (this.state.isUpdate) {
            await await updateStudent(this.state.id, this.state.name, this.state.phone).then(() => {
                this.props.handleClose(true);
            });
        } else {
            await createStudent(this.state.id, this.state.name, this.state.phone).then(() => {
                this.props.handleClose(true);
            });
        }
    }

    render() {
        return (
            <Modal show={this.props.isShow} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.isUpdate ? "Update" : "Create"} Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="form.id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                data-testid="studendIdInput"
                                type="text"
                                placeholder="student ID"
                                disabled={this.state.isUpdate}
                                value={this.state.id}
                                onChange={this.onIdChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                data-testid="studendNameInput"
                                type="text"
                                placeholder="student name"
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                data-testid="studendPhoneInput"
                                type="text"
                                placeholder="student phone number"
                                value={this.state.phone}
                                onChange={this.onPhoneChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.handleClose(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        {this.state.isUpdate ? "Update" : "Create"}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}