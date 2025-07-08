import React from "react";
import {useEffect} from "react";


const useClickOutside = (butRef: React.RefObject<HTMLButtonElement | null>,
                            ref: React.RefObject<HTMLElement | null>,
                                callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    const target = e.target as Node;

    const menuEl = ref.current;
    const buttonEl = butRef.current;

    if (menuEl && !menuEl.contains(target) && buttonEl && !buttonEl.contains(target)) {
      callback();
    }
  };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () =>{
            document.removeEventListener('mousedown', handleClick)
        }
    })
}

export default useClickOutside