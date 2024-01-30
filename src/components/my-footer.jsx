import { Container, Row, Col } from "react-bootstrap";

function MyFooter(){

    return (
        
        <Container fluid className="bg-black text-white ">
            <Row className="justify-content-center text-center ">
                <Col>
                <h1>by Valerio Galetti</h1>
                </Col>
            </Row>
        </Container>
    )


}

export default MyFooter