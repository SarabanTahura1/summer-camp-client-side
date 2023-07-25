import { useState } from "react";
import { useEffect } from "react";
import Class from "../../../../components/Card/Class";
import { Link } from "react-router-dom";

const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    const loadPopularClassdata = async () => {
      const res = await fetch(
        "https://language-server.up.railway.app/filterByPopularClass"
      );
      const data = await res.json();
      setPopularClass(data);
    };
    loadPopularClassdata();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white px-5 flex justify-between items-center">
        <h4 className=" py-4  rounded ">Popular Class</h4>
        <Link to="/classes" className="hover:underline">
          See More
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 lg:grid-cols-3 px-4 lg:px-0 py-10">
        {popularClass?.map((cls) => (
          <Class key={cls._id} cls={cls}></Class>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
