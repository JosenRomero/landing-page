import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Text from './Text'
import CustomContainer from './CustomContainer'

const About = ({ data }) => {
  return (
    <CustomContainer as={'section'} id={'about'} className={'container py-5'}>
      <Row>
        <Col lg={6} className={'mb-3'}>
          <Image className={'img-thumbnail'} src={`img/${data.img}`} />
        </Col>
        <Col lg={6}>
          <Text as={'h3'}>{data.title}</Text>
          <Text as={'p'}>{data.paragraph}</Text>
          <Text as={'h5'}>{data.heading2}</Text>
          <ListGroup as={'ol'} numbered>
            {data.list.map((item, i) => {
              return <ListGroup.Item as={'li'} className={'border-0'} key={i}>{item}</ListGroup.Item>
            })}
          </ListGroup>
        </Col>
      </Row>
    </CustomContainer>
  )
}

export default About
