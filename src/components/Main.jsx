import ServicesSection from './ServicesSection'
import FeaturesSection from './FeaturesSection'

const Main = ({ data }) => {
  return (
    <>
      <ServicesSection data={data.Services} />
      <FeaturesSection data={data.Features} />
    </>
  )
}

export default Main
