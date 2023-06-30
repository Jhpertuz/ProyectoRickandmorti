import style from "./Card.module.css";
import { Link } from "react-router-dom";
import imagen from ".././img/detail.png";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState,useEffect } from "react";


function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorite
})

{
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFavorite,
        removeFavorite,
      });
    }
  };

  useEffect(() => {
   myFavorite.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorite]);

  return (
    <div className={style.marco}>
      <div className={style.container}>
        <div className={style.flipcard}>
          <div className={style.imagecontainer}>
            <img className={style.image} src={image} alt="" />
          </div>

          <div className={style.textcontainer}>
            <h2>{`Nombre: ${name}`}</h2>
            <h2>{`Estado: ${status}`}</h2>
            <h2>{`Especie: ${species}`}</h2>
            <h2>{`Genero: ${gender}`}</h2>
            <h2>{`Origen: ${origin}`}</h2>

            <div className={style.buttonContainer}>
              <button
                className={style.button}
                onClick={() => {
                  onClose(id);
                }}
              >
                X
              </button>
              <Link to={`/detail/${id}`}>
                <img src={imagen} alt="Detail" />
              </Link>
              {isFav ? (
                <button className={style.fav} onClick={handleFavorite}>❤️</button>
              ) : (
                <button className={style.fav} onClick={handleFavorite}>🤍</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state)=>{
   return{
      myFavorite: state.myFavorite,

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
