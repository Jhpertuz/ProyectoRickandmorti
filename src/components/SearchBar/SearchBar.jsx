import style from "./SearchBar.module.css"
export default function SearchBar({onSearch}) {
   return (
      <div className={style.container}>
         <input type='search' />
         <button onClick={(id)=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
