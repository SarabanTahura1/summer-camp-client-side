import { Link } from "react-router-dom";
import useLoadAllInstructor from "../../../../CustomHook/useLoadAllInstructor";
import Instructor from "../../../../components/Card/Instructor";

const PopularInstructor = () => {
  const [allInstructor] = useLoadAllInstructor();


  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white px-5 flex justify-between items-center">
        <h4 className=" py-4  rounded ">Popular Instructors</h4>
        <Link to="/instructors" className="hover:underline">
          See More
        </Link>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-10  px-4 lg:px-0 py-10">
        {allInstructor?.slice(0, 5).map((Ins) => (
          <Instructor key={Ins._id} Ins={Ins}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
