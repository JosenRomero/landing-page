import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Menu from '../components/Menu'
import JsonData from '../data/data.json'

const HomePage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(JsonData)
  }, [])

  if (!data) return <></>

  return (
    <>
      <Menu />
      <Header data={data.Header} />
      <Main data={data.Main} />
    </>
  )
}

export default HomePage
