import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import JsonData from '../data/data.json'

const HomePage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(JsonData)
  }, [])

  if (!data) return <></>

  return (
    <>
      <Header data={data.Header} />
      <Main data={data.Main} />
    </>
  )
}

export default HomePage
