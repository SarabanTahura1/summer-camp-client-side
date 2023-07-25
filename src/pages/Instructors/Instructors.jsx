import useLoadAllInstructor from "../../CustomHook/useLoadAllInstructor";
import Instructor from "../../components/Card/Instructor";

const Instructors = () => {
  const [allInstructor] = useLoadAllInstructor();

  return (
    <div className="max-w-6xl mx-auto py-20">
      <h4 className="text-black dark:text-white py-4 px-5 rounded bg-gray-200 dark:bg-gray-900">
        All Instructors : {allInstructor.length || 0}
      </h4>
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-10  px-4 lg:px-0 py-10">
        {allInstructor?.map((Ins) => (
          <Instructor key={Ins._id} Ins={Ins}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
