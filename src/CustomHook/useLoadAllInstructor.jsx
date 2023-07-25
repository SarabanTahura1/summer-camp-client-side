import { useEffect } from "react";
import { useState } from "react";

const useLoadAllInstructor = () => {
  const [allInstructor, setAllInstructor] = useState([]);
  useEffect(() => {
    fetch("https://language-server.up.railway.app/instructor")
      .then((response) => response.json())
      .then((data) => setAllInstructor(data));
  }, []);
  return [allInstructor];
};

export default useLoadAllInstructor;
