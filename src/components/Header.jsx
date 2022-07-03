import { Container, Row, Col, Image } from 'react-bootstrap'
import Text from './Text'
import CustomContainer from './CustomContainer'

const Header = ({ data }) => {
  return (
    <CustomContainer as={'header'} id={'home'} className={'bg-light py-5'}>
      <Container>
        <Row>
          <Col lg={4} className={'mb-3 d-grid align-content-center'}>
            <Text as={'h1'}>{data.title}</Text>
            <Text as={'p'}>{data.paragraph}</Text>
          </Col>
          <Col lg={6} className={'offset-lg-2'}>
            <Image src={`img/${data.img}`} />
          </Col>
        </Row>
      </Container>
    </CustomContainer>
  )
}

export default Header
