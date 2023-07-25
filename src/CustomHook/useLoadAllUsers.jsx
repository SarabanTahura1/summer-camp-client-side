import { useEffect } from "react";
import { useState } from "react";

const useLoadAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("https://language-server.up.railway.app/allusers")
      .then((response) => response.json())
      .then((data) => setAllUsers(data));
  }, []);
  return [allUsers, setAllUsers];
};

export default useLoadAllUsers;
