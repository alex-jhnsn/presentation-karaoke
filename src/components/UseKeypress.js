import { useEffect } from "react";

export default function useKeypress(keys, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (keys.includes(e.key)) action()
    }
    
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
};