import { Row } from 'react-bootstrap'
import Text from './Text'
import CustomContainer from './CustomContainer'

const Footer = () => {
  return (
    <CustomContainer as={'footer'} className={'pt-3 bg-light'}>
      <Row className={'mx-0'}>
        <Text as={'p'} className={'text-center'}>Landing Page. Design by José Romero</Text>
      </Row>
    </CustomContainer>
  )
}

export default Footer
