import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import doctor from '../assets/doctor.jpg'
import { useContextGlobal } from '../Context/global.context'
import detailStyle from '../Styles/Detail.module.css'


const Detail = () => {

  const { list, dentistDetail, dispatch, currentDentistIndex } = useContextGlobal()

  const { name, email, phone, website, username } = dentistDetail

  const { id } = useParams()
  //console.log(id);

  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(url)
      .then(response => dispatch({ type: 'GET_CHARACTER', payload: response.data}))
  }, [id, dispatch])
  
  const navigate = useNavigate()

  const handleNext = () => {
    const nextIndex = (currentDentistIndex + 1) % list.length;
    navigate(`/detail/${list[nextIndex].id}`);
  };

  const handlePrev = () => {
    const prevIndex = (currentDentistIndex - 1) % list.length;
    navigate(`/detail/${list[prevIndex].id}`);
  };

  return (
    <>
      <div className={detailStyle.container}>
        <h1>Detail Dentist</h1>
        <div className={detailStyle.containerDetail}>
          <button onClick={handlePrev}>⇦</button>

          <img src={doctor} alt="" />

          <div className={detailStyle.containerText}>
            <h2>{name} {username}</h2>
            <h4>✉ {email}</h4>
            <h4>☎ {phone}</h4>
            <h4>🌐{website}</h4>
          </div>

          <button onClick={handleNext}>⇨</button>
        </div>
      </div>
    </>
  )
}

export default Detail