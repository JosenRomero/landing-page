import { Row, Col } from 'react-bootstrap';
import Text from './Text';
import CustomContainer from './CustomContainer';

const Header = () => {

    return (
        <CustomContainer as={"header"} id={"home"}>
            <Row>
                <Col md={6} className="text-center mx-auto">
                    <Text as={"h1"}>Lorem Ipsum</Text>
                    <Text as={"p"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Col>
            </Row>
        </CustomContainer>
    );

}

export default Header