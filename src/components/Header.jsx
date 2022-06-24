import { Row, Col } from 'react-bootstrap';
import Text from './Text';
import CustomContainer from './CustomContainer';

const Header = ({data}) => {

    return (
        <CustomContainer as={"header"} id={"home"} className={"container"}>
            <Row>
                <Col md={8} className="text-center mx-auto">
                    <Text as={"h1"}>{data.title}</Text>
                    <Text as={"p"}>{data.paragraph}</Text>
                </Col>
            </Row>
        </CustomContainer>
    );

}

export default Header