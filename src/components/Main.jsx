import About from './About'
import ServicesSection from './ServicesSection'
import FeaturesSection from './FeaturesSection'

const Main = ({ data }) => {
  return (
    <>
      <About data={data.About} />
      <FeaturesSection data={data.Features} />
      <ServicesSection data={data.Services} />
    </>
  )
}

export default Main
