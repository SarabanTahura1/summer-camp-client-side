import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";

import MessageModal from "../../Modal/MessageModal";
import React from "react";

const ManageClassTable = ({ cls, handleStatus }) => {
  const [open, setOpen] = React.useState(false);
  const {
    _id,
    class_name,
    name,
    courseImage,
    available_seats,
    courseFees,
    status,
  } = cls;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3 dark:text-white">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={courseImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div className="min-w-max dark:text-white">
            <div className="font-bold">{class_name}</div>
            <div className="text-sm opacity-50"> - {name}</div>
          </div>
        </div>
      </td>
      <td className=" text-center dark:text-white">
        <span className=" inline-block py-4">{available_seats || 0}</span>
      </td>
      <td className=" text-center dark:text-white">
        <span className=" inline-block py-4">{courseFees}</span>
      </td>

      <td className=" text-center dark:text-white">
        {status === "approved" ? (
          <span className="text-white dark:text-white badge badge-info badge-sm font-bold text-md p-4">
            Approved
          </span>
        ) : status === "denied" ? (
          <span className="text-white dark:text-white badge badge-error badge-sm  font-bold text-md p-4">
            Denied
          </span>
        ) : (
          <span className="text-white dark:text-white badge badge-warning badge-sm  font-bold text-md p-4">
            Pending
          </span>
        )}
      </td>
      <td className="text-center dark:text-white">
        <div className="btn-group btn-group-vertical">
          <button
            onClick={() => handleStatus(_id, "approved")}
            disabled={
              cls.status === "approved" || cls.status === "denied"
                ? true
                : false
            }
            className="btn btn-xs btn-primary min-w-max dark:text-white"
          >
            <MdOutlineFeedback />
            Approve
          </button>
          <button
            onClick={() => handleStatus(_id, "denied")}
            disabled={
              cls.status === "approved" || cls.status === "denied"
                ? true
                : false
            }
            className="btn btn-xs  btn-error min-w-max dark:text-white"
          >
            <AiOutlineEdit />
            Deny
          </button>
          <button
            onClick={handleOpen}
            disabled={cls.status === "denied" ? false : true}
            className="btn btn-xs  btn-neutral min-w-max dark:text-white"
          >
            <AiOutlineEdit />
            Send Message
          </button>
        </div>
      </td>
      <MessageModal
        open={open}
        handleClose={handleClose}
        id={_id}
        className={class_name}
      />
    </tr>
  );
};

export default ManageClassTable;
