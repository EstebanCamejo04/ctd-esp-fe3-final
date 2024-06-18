import React from "react";
import Card from "../Components/Card";
import cardGridStyle from '../Styles/Card.module.css'
import { useContextGlobal } from "../Context/global.context";
import detailStyle from '../Styles/Detail.module.css'

const Favs = () => {

  const {favs, dispatch} = useContextGlobal()

  const deleteFavs = () => {
    const confirmation = confirm("Are you sure want to delete all favs?")
    if (confirmation){
      dispatch({ type: 'DELETE_ALL_FAVS'})
      console.log("All favs has been deleted");
    }
  }

  return (
    <div className={detailStyle.container}>
      <h1>Dentists Favs</h1>
      <div className={cardGridStyle.cardGrid}>
        {favs.map(fav => <Card dentist={fav} key={fav.id}/>)}
      </div>
      <button onClick={deleteFavs}>Delete favs</button>
    </div>
  );
};

export default Favs;
