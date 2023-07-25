import { useState } from "react";
import { useEffect } from "react";

const useLoadAllClass = () => {
  const [allClass, setAllClass] = useState([]);
  useEffect(() => {
    fetch("https://language-server.up.railway.app/allClass")
      .then((response) => response.json())
      .then((data) => setAllClass(data));
  }, []);
  return [allClass, setAllClass];
};

export default useLoadAllClass;
