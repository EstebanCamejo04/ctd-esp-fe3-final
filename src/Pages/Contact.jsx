import React from 'react'
import Form from '../Components/Form'
import contactStyle from '../Styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={contactStyle.container}>
      <h1>Contact</h1>
      <h3>Want to know more? Send us your query and we will contact you</h3>
      <Form/>
    </div>
  )
}

export default Contact