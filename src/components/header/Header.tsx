import {useState, useRef} from "react";
import useClickOutside from "../../hooks/useClickOutside";


const Header = () =>{
    
    const date: Date = new Date()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef= useRef<HTMLBodyElement>(null)
    useClickOutside(menuRef, () => {if(isOpen) setTimeout(() => setIsOpen(false), 50)})

    return(

        <>

            <div className="header">
            <div className="header__data">
                <h1 className="h1">{date.toDateString()}</h1>
            </div>

            <div className="nav-menu">
                <input className="nav-menu__search-input" type="text" />

                <div className="nav-menu__slider">
                <button className="nav-menu__button" onClick={() => setIsOpen(!isOpen)}>ENG</button>

                <nav className={`nav-menu__nav-list ${isOpen ? 'nav-menu__nav-list--active' : ''}`} ref={menuRef}>
                    <ul className="nav-menu__list">
                    <li className="nav-menu__item"><a href="" className="nav-menu__link">ENG</a></li>
                    <li className="nav-menu__item"><a href="" className="nav-menu__link">RUS</a></li>
                    <li className="nav-menu__item"><a href="" className="nav-menu__link">DE</a></li>
                    <li className="nav-menu__item"><a href="" className="nav-menu__link">FR</a></li>
                    <li className="nav-menu__item"><a href="" className="nav-menu__link">IT</a></li>
                    </ul>
                </nav>
                </div>

                <label className="nav-menu__switch">
                <input type="checkbox" className="nav-menu__input" />
                <span className="nav-menu__switch-slider">
                    <p className="celsius">C</p>
                    <p className="fahrenheit">F</p>
                </span>
                </label>
            </div>
            </div>

        </>

    )

}

export default Header