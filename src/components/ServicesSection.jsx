import { Row } from 'react-bootstrap'
import Text from './Text'
import CustomContainer from './CustomContainer'
import ServiceItem from './ServiceItem'

const ServicesSection = ({ data }) => {
  return (
    <CustomContainer as={'section'} id={'services'} className={'container py-5'}>
      <Row className={'mb-5'}>
        <Text as={'h3'} className={'text-center'}>{data.title}</Text>
        <Text as={'p'} className={'text-center'}>{data.paragraph}</Text>
      </Row>
      <Row>
        {data.items.map((item, i) => {
          return <ServiceItem item={item} key={i} />
        })}
      </Row>
    </CustomContainer>
  )
}

export default ServicesSection
