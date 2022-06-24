import { Row, Col, Card } from 'react-bootstrap';
import Text from './Text';
import CustomContainer from './CustomContainer';

const ServicesSection = ({data}) => {

    return (
        <CustomContainer as={"section"} id={"services"} className={"container"}>
            {console.log(data)}
            <Row className="mb-5">
                <Col md={8} className="text-center mx-auto">
                    <Text as={"h3"}>Lorem Ipsum</Text>
                    <Text as={"p"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col sm={6} xl={4}>
                    <Card className="border-0 text-center">
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>Lorem Ipsum is simply dummy text</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </CustomContainer>
    );

}

export default ServicesSection