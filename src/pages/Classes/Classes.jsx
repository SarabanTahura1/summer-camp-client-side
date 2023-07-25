import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Class from "../../components/Card/Class";

const Classes = () => {
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    axios
      .get("https://language-server.up.railway.app/class/approved")
      .then((response) => {
        setAllClass(response.data);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-20">
      <h4 className="text-black dark:text-white py-4 px-5 rounded bg-gray-200 dark:bg-gray-900">
        All Class : {allClass.length || 0}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 lg:grid-cols-3 px-4 lg:px-0 py-10">
        {allClass?.map((cls) => (
          <Class key={cls._id} cls={cls}></Class>
        ))}
      </div>
    </div>
  );
};

export default Classes;
