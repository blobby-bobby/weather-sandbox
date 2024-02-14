import { FunctionComponent, useState } from "react"
import styles from "./searchinput.module.scss"
import { LuSearch } from "react-icons/lu";

export const SearchInput: FunctionComponent = () => {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div className={styles["search-container"]}>
            <label htmlFor="city-search">Search for your city's weather:</label>
            <form action="" className={styles["search-container__input"]}>
                <input
                name='city-search'
                type="text"
                placeholder="Search here"
                onChange={(e) => {setSearchInput(e.target.value)}}
                value={searchInput} />
                <button><LuSearch size={20} /></button>
            </form>
        </div>
    )
}