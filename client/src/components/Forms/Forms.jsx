import style from "./Forms.module.css";
import banner from "../img/banner.jpg"
import { useState } from "react";
import validation from "./validation";
const Forms = ({login}) => {
  //estado que almacena recibe la informacion de laspersonas esto es un objeto
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  //funcion seteadora de errores con el estado errors
  const [errors, setErrors] = useState({});

  //handle change es la funcion que recibe el evento y agrega los nuevos usuarios a user data
  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const habdleSubmit=(event)=>{
    event.preventDefault();
    login(userData);
  }

  return (

  <div className={style.bodi}>
    <div className={style.banner}>
      <img type="banner" src={banner} alt="banner Login" />
    </div>
      
    
    <div className={style.center}>
      <h1>Login</h1>
      <form>
        
        <div className={style.txt_field}>
        <label htmlFor="email"> Correo Electronico: </label>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        
        </div>
        


        <br />

        <div className={style.txt_field}>
        <label htmlFor="password"> Contraseña: </label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        
        
        </div>
        <br />
        <button onClick={habdleSubmit} type="submit">Submit</button>
        <div className={style.passwordErrors}> 
          {errors.p1 ? <p>   {errors.p1}</p> : <p>  {errors.p2}</p>}         
        </div>
        <div className={style.emailErrors}>
        {errors.e1 ? (<p>  {errors.e1}</p>) : errors.e2 ? (<p>   {errors.e2}</p>) : (<p>   {errors.e3}</p>)}
        </div>

      </form>
    </div>
  </div>
    
  );
};

export default Forms;
