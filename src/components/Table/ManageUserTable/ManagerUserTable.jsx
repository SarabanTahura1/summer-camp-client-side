import { MdOutlineFeedback } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

const ManagerUserTable = ({ user, handleRole }) => {
  return (
    <>
      <tr key={user._id} className="text-center dark:text-white">
        <th>
          <img src={user?.thumbnail} className="h-16 w-16 rounded" alt="" />
        </th>
        <th>{user?.fullname}</th>
        <th>{user?.email}</th>
        <th className="capitalize">{user?.role}</th>
        <td className="text-center">
          <div className="btn-group btn-group-vertical">
            <button
              onClick={() => handleRole(user?._id, "admin")}
              disabled={
                user?.role === "admin" || user?.role === "instructor"
                  ? true
                  : false
              }
              className="btn btn-xs btn-primary min-w-max dark:text-white"
            >
              <MdOutlineFeedback />
              Admin
            </button>
            <button
              onClick={() => handleRole(user?._id, "instructor")}
              disabled={
                user?.role === "instructor" || user?.role === "admin"
                  ? true
                  : false
              }
              className="btn btn-xs  btn-warning min-w-max dark:text-white"
            >
              <AiOutlineEdit />
              Instructor
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ManagerUserTable;
