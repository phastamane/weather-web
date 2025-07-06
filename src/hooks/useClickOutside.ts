
import {useEffect} from "react";


const useClickOutside = (ref: any, callback: Function) => {

    const handleClick: any = (e: any) =>{
    
        if (ref.current && !ref.current.contains(e.target)){
            callback();
    }
}

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () =>{
            document.removeEventListener('mousedown', handleClick)
        }
    })
}

export default useClickOutside