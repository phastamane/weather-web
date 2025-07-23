import {useState, useRef, useEffect} from "react";
import getDate from "../utils/getDate";
import useClickOutside from "../../hooks/useClickOutside";



type HeaderProps = {

    request: string
    setRequest: (value: string) => void,
    setActiveButton: (index: number | undefined) => void;
    
}

function Header({request, setRequest, setActiveButton}: HeaderProps){
    
    const [inputValue, setInputValue] = useState(""); 
    const [switchTemp, setSwitchTemp] = useState<boolean>(false)
    const { dateLine, timeLine } = getDate();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef= useRef<HTMLElement>(null)
    const butRef = useRef<HTMLButtonElement>(null)
    const celiusStr: string = '°C'
    const fahrenheitStr: string = '°F'

    useClickOutside(butRef, menuRef, () => {if(isOpen) setTimeout(() => setIsOpen(false), 50)});

    useEffect(() => {
        setActiveButton(0);
    }, [request]);

    return(

        <>

            <div className="header">
            <div className="header__data">
                <span>{dateLine} {timeLine}</span>
            </div>

            <div className="nav-menu">
                <label className="nav-menu__input-field">
                    <svg
                        className="nav-menu__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        onClick={() => {setRequest(inputValue)}}>
                        
                    <path
                        d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    
                    <input
                        className="nav-menu__search-input"
                        type="text"
                        placeholder="Search your city"
                        value={inputValue}
                        onChange={(e) =>( setInputValue(e.target.value))}
                        onKeyDown={e => {
                            (e.key === 'Enter' && inputValue.trim() !== '')? setRequest(inputValue):false
                        }}
                    />
                    
                    {request && (
                        <button
                        type="button"
                        className="nav-menu__clear-button"
                        onClick={() => setInputValue("")}
                        >
                        ✕
                        </button>
                    )}
                </label>
 

                {/* <div className="nav-menu__slider">
                <button className="nav-menu__button" ref ={butRef} onClick={() => setIsOpen(!isOpen)}>ENG</button> */}

                {/* <nav className={`nav-menu__nav-list ${isOpen ? 'nav-menu__nav-list--active' : ''}`} ref={menuRef}>
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
                    <input type="checkbox" className="nav-menu__input"
                            value={request}
                            onChange={e => setRequest(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    }
                                }
                            } />
                    <span className="nav-menu__switch-slider" onClick={() => setSwitchTemp(!switchTemp)}>
                        <p className= {switchTemp ? 'celsius' : 'celsius-black'}>{celiusStr}</p>
                        <p className={switchTemp ? 'fahrenheit-black' : 'fahrenheit'}>{fahrenheitStr}</p>
                    </span>
                </label> */}

                <label className="nav-menu__switch-mobile">
                    <input type="checkbox" className="nav-menu__input"
                            value={request}
                            onChange={e => setRequest(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    }
                                }
                            } />
                    <span className="nav-menu__switch-slider" onClick={() => setSwitchTemp(!switchTemp)}>
                        <p className= {switchTemp ? 'celsius' : 'celsius-black'}>{celiusStr}</p>
                        <p className={switchTemp ? 'fahrenheit-black' : 'fahrenheit'}>{fahrenheitStr}</p>
                    </span>
                </label>
            </div>
            </div>

        </>

    )

}

export default Header