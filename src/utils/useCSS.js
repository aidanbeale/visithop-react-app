// https://stackoverflow.com/questions/60963786/how-to-add-external-javascript-files-in-react-js

import { useEffect } from "react";

const useCSS = (url) => {
  useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = url;
    document.body.appendChild(css);
    return () => {
      document.body.removeChild(css);
    };
  }, [url]);
};

export default useCSS;
