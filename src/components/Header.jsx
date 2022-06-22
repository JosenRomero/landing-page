import { Container, Row, Col } from 'react-bootstrap';
import Text from './Text';

const Header = () => {

    return (
        <Container id={"home"}>
            <Row>
                <Col md={6} className="text-center mx-auto">
                    <Text as={"h1"}>Lorem Ipsum</Text>
                    <Text as={"p"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Col>
            </Row>
        </Container>
    );

}

export default Header