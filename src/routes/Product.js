import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

function ImageAndTextExample() {
    return (
        <>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    );

}
