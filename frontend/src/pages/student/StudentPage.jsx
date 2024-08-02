import React from 'react';
import Button from 'react-bootstrap/Button';
import { fetchStudents } from '../../services/studentService';
import AppCard from '../../components/app-card/AppCard';
import { ModalCreateOrUpdate } from '../../components/modal-create-or-update/ModalCreateOrUpdate';
import './StudentPage.css';

export default class StudentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false,
            studentIdEditing: undefined,
            students: new Array(0)
        }

        this.handleClose = this.handleClose.bind(this);
    }

    loadUser = async () => {
        await fetchStudents().then(value => {
            this.setState({
                students: value
            })
        });
    }

    componentDidMount() {
        this.loadUser();
    }

    handleClose(isSuccess = false) {
        this.setState({
            isShowModal: false,
            studentIdEditing: undefined,
        });
        if (isSuccess) {
            this.loadUser();
        }
    }

    showModalCreateOrUpdateStudent = (student) => {
        this.setState({
            isShowModal: true,
            studentIdEditing: student.id
        });
    }

    render() {
        let buttonCreate = <Button
            className='my-3'
            variant="primary"
            onClick={() => this.showModalCreateOrUpdateStudent()}
        >
            Create Student
        </Button>
        if (!this.state.students || this.state.students.length <= 0) {
            return <div className='px-3'>{buttonCreate}</div>;
        }
        let modalCreateOrUpdate;
        if (this.state.isShowModal) {
            modalCreateOrUpdate = <ModalCreateOrUpdate
                handleClose={this.handleClose}
                handleShow={this.showModalCreateOrUpdateStudent}
                isShow={this.state.isShowModal}
                id={this.state.studentIdEditing}
            >
            </ModalCreateOrUpdate>
        }

        return (
            <div className='px-3'>
                {buttonCreate}
                {modalCreateOrUpdate}
                <div className='list-card-layout'>
                    {this.state.students.map((student) => {
                        return <AppCard
                            key={student.id + student.name + student.phone}
                            id={student.id}
                            name={student.name}
                            phone={student.phone}
                            student={student}
                            handleShow={this.showModalCreateOrUpdateStudent}
                            loadUser={this.loadUser}
                        >
                        </AppCard>
                    })}
                </div>

            </div >

        );
    }

}