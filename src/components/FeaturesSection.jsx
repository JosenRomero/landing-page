import { Row } from 'react-bootstrap'
import Text from './Text'
import CustomContainer from './CustomContainer'
import FeaturesItem from './FeaturesItem'

const FeaturesSection = ({ data }) => {
  return (
    <CustomContainer as={'section'} id={'features'} className={'py-5 bg-light'}>
      <Row className={'mb-5 mx-0'}>
        <Text as={'h3'} className={'text-center'}>{data.title}</Text>
        <Text as={'p'} className={'text-center'}>{data.paragraph}</Text>
      </Row>
      <Row className={'mx-0'}>
        {data.items.map((item, i) => {
          return <FeaturesItem item={item} key={i} />
        })}
      </Row>
    </CustomContainer>
  )
}

export default FeaturesSection
