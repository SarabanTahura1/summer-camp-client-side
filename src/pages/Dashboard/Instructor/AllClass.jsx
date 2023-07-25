import useAddedClass from "../../../CustomHook/useAddedClass";
import AllClassTable from "../../../components/Table/AllClassTable/AllClassTable";

const AllClass = () => {
  const [classes] = useAddedClass();

  return (
    <div className="w-full my-20  min-h-screen">
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-900 text-white">
            <tr className="text-center">
              <th>Image & Title</th>
              <th>Available Seats</th>
              <th>Price-($)</th>
              <th>Total Enrolled</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-sky-400">
            {classes.map((cls, index) => (
              <AllClassTable clas={cls} key={index}></AllClassTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClass;
