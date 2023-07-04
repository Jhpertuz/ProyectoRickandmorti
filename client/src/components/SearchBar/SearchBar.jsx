import style from "./SearchBar.module.css";
import { useState } from "react";


const SearchBar=({ onSearch })=> {

  const [id, setid] = useState("");

  const handleChange = (event) => {
   setid(event.target.value);

  };


  return (
    <div className={style.container}>
      <input type="search" onChange={handleChange}  value={id}/>
      <button onClick={() => { onSearch(id); }}>   Agregar  </button>
    </div>
  );
}

export default SearchBar;
