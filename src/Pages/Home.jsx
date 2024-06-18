import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Context/global.context'
import cardGridStyle from '../Styles/Card.module.css'
import detailStyle from '../Styles/Detail.module.css'

const Home = () => {

  const { list } = useContextGlobal()

  return (
    <div className={detailStyle.container}>
      <h1>Home</h1>
      <div className={cardGridStyle.cardGrid}>
        {list.map(dentist => <Card dentist={dentist} key={dentist.id} />)}
      </div>
    </div>
  )
}

export default Home