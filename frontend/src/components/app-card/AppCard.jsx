import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteStudent } from '../../services/studentService';

class AppCard extends React.Component {

    async onDelete(id){
        await deleteStudent(id);
        await this.props.loadUser();
    }
    render() {
        const { id, name, phone, student} = this.props;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                    <Card.Text>{phone}</Card.Text>
                    <Button
                        className='ml-3'
                        variant="info"
                        onClick={()=>this.props.handleShow(student)}
                    >
                        Edit
                    </Button>
                    <Button
                        className='mx-3'
                        variant="danger"
                        onClick={()=>this.onDelete(id)}
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        );
    }

}

export default AppCard;