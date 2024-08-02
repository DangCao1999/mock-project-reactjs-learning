import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid>
                <h1>Student Management</h1>
            </Container>
        </Navbar>
    );
}

export default Header;