import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css"

const Nav =(props)=>{
    return(
        <div className={style.Nav}>
            <SearchBar onSearch={props.onSearch}/>

        </div>
    )
}

export default Nav;