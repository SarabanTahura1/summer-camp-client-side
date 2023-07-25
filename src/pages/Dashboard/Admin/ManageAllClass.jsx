import useLoadAllClass from "../../../CustomHook/useLoadAllClass";
import ManageClassTable from "../../../components/Table/ManageClassTable/ManageClassTable";

const ManageAllClass = () => {
  const [AllClass, setAllClass] = useLoadAllClass([]);

  const handleStatus = (id, status) => {
    fetch(`https://language-server.up.railway.app/class/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: status }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = AllClass.filter((cls) => cls._id !== id);
          const updated = AllClass.find((cls) => cls._id === id);
          updated.status = status;
          const allClass = [updated, ...remaining];
          setAllClass(allClass);
        }
      });
  };

  return (
    <div className="w-full px-5 py-16 min-h-screen">
      <div className="flex items-center justify-around w-full border-b-4 py-4 border-gray-950">
        <span className="text-lg font-bold uppercase text-gray-800 inline-block">
          Manage Class{" "}
        </span>
        <span className="text-lg font-bold uppercase text-gray-800 inline-block">
          All Class : {AllClass.length}
        </span>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-900 text-white">
            <tr className="text-center">
              <th>Image & Title</th>
              <th>Available Seats</th>
              <th>Price-($)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-amber-400">
            {AllClass.map((cls, index) => (
              <ManageClassTable
                handleStatus={handleStatus}
                key={index}
                cls={cls}
              ></ManageClassTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllClass;
