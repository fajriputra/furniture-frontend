import { useState, useRef, useEffect } from "react";

export default function useClicked() {
  const [click, setClick] = useState(false);
  const refClick = useRef(null);

  const handleClick = () => setClick(!click);
  const handleClickOutside = (e) => {
    if (refClick && !refClick.current.contains(e.target)) {
      setClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [click]);

  return { handleClick, click, refClick };
}
