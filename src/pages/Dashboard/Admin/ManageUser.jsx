import useLoadAllUsers from "../../../CustomHook/useLoadAllUsers";

import ManagerUserTable from "../../../components/Table/ManageUserTable/ManagerUserTable";

const ManageUser = () => {
  const [allUsers, setAllUsers] = useLoadAllUsers();

  const handleRole = (id, role) => {
    fetch(`https://language-server.up.railway.app/user-role/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role: role }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = allUsers.filter((cls) => cls._id !== id);
          const updated = allUsers.find((cls) => cls._id === id);
          updated.role = role;
          const allClass = [updated, ...remaining];
          setAllUsers(allClass);
        }
      });
  };

  return (
    <div className="w-full px-5 py-16  min-h-screen">
      <div className="flex items-center justify-around w-full border-b-4 py-4 border-gray-950">
        <span className="text-lg font-bold uppercase text-gray-800 inline-block">
          Manage Users
        </span>
        <span className="text-lg font-bold uppercase text-gray-800 inline-block">
          All Users : {allUsers.length}
        </span>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-300">
            <tr className="text-center">
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((user) => (
              <ManagerUserTable
                handleRole={handleRole}
                key={user._id}
                user={user}
              ></ManagerUserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
