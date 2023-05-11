// export default function Card(props) {
//    return (
//       <div>
//          {/* <button onClick={}>X</button>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <img src={} alt='' /> */}
//       </div>
//    );
// }
import style from "./Card.module.css"
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={style.marco}>
      <div className={style.container}> 
         
         
            <div className={style.flipcard}>

                  <div className={style.imagecontainer}>
                     <img className={style.image} src={image} alt='' />
                  </div>

               <div className={style.textcontainer}>
                  <h2>{`Nombre: ${name}`}</h2>
                  <h2>{`Estado: ${status}`}</h2>
                  <h2>{`Especie: ${species}`}</h2>
                  <h2>{`Genero: ${gender}`}</h2> 
                  <h2>{`Origen: ${origin}`}</h2>
                  <div className={style.buttonContainer}>
                     <button className={style.button} onClick={()=>{onClose(id)}}>X</button>
                  </div>
               </div>

               

            </div>
         </div>
         

         
      </div>
   );
}