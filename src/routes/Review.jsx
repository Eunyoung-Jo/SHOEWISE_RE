import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import ListGroup from 'react-bootstrap/ListGroup';


import ListGroup from 'react-bootstrap/ListGroup';

function NumberedExample() {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        </ListGroup>
    );
}


function ActiveExample() {
    return (
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Cras justo odio
            </ListGroup.Item>
            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as="li" disabled>
                Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
    );
}

