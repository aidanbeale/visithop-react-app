import { useEffect } from "react";

export default function useOutsideAlerter(ref, classCheck) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.className = classCheck;
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, classCheck]);
}
