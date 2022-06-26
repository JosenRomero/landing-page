/* eslint-disable react/prop-types */
import { Col, Card } from 'react-bootstrap'
import Text from './Text'
import Icon from '@mdi/react'
import { icons } from '../data/all_icons'

const ServiceItem = ({ item }) => {
  return (
    <Col sm={6} xl={4}>
      <Card className="border-0 text-center mb-3">
        <Card.Body>
          <Text as={'span'} className={'serviceIcon'}>
            <Icon path={icons[item.icon][0]} color={icons[item.icon][1]} size={1} key={item.name} />
          </Text>
          <Card.Title className={'mt-4'}>{item.name}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ServiceItem
