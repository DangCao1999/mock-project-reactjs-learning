import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid>
                <h1>{props.title}</h1>
            </Container>
        </Navbar>
    );
}

export default Header;