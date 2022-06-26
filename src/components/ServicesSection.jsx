/* eslint-disable react/prop-types */
import { Row, Col } from 'react-bootstrap'
import Text from './Text'
import CustomContainer from './CustomContainer'
import ServiceItem from './ServiceItem'

const ServicesSection = ({ data }) => {
  return (
    <CustomContainer as={'section'} id={'services'} className={'container'}>
      <Row className="mb-5">
        <Col md={8} className="text-center mx-auto">
          <Text as={'h3'}>{data.title}</Text>
          <Text as={'p'}>{data.paragraph}</Text>
        </Col>
      </Row>
      <Row className="mb-5">
        {data.items.map((item, i) => {
          return <ServiceItem item={item} key={i} />
        })}
      </Row>
    </CustomContainer>
  )
}

export default ServicesSection
