import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";
import { Link } from "react-router-dom";
import GetFeedback from "../../Modal/GetFeedback";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AllClassTable = ({ clas }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {
    _id,
    class_name,
    name,
    courseImage,
    available_seats,
    courseFees,
    enrolled_student,
    status,
  } = clas;

  const getMessageData = (id) => {
    axios
      .get(`https://language-server.up.railway.app/message/${id}`)
      .then((response) => {
        if (response?.data?.error) {
          return Swal.fire({
            icon: "error",
            title: "Not Found",
            text: response.data.message,
            showConfirmButton: false,
            timer: 1200,
          });
        }
        if (response?.data) {
          handleOpen();
          return setMessage(response.data);
        }
      });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={courseImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className="min-w-max">
              <div className="font-bold">{class_name}</div>

              <div className="text-sm opacity-50"> - {name}</div>
            </div>
          </div>
        </td>
        <td className=" text-center">
          <span className=" inline-block py-4">{available_seats || 0}</span>
        </td>
        <td className=" text-center ">
          <span className=" inline-block py-4">{courseFees}</span>
        </td>
        <td className=" text-center ">
          <span className=" inline-block py-4">{enrolled_student || 0}</span>
        </td>
        <td className=" text-center">
          {status === "approved" ? (
            <span className="text-white badge badge-info badge-sm font-bold text-md p-4">
              Approved
            </span>
          ) : status === "denied" ? (
            <span className="text-white badge badge-error badge-sm  font-bold text-md p-4">
              Denied
            </span>
          ) : (
            <span className="text-white badge badge-warning badge-sm  font-bold text-md p-4">
              Pending
            </span>
          )}
        </td>
        <td className="text-center">
          <div className="btn-group btn-group-vertical">
            <button
              onClick={() => getMessageData(_id)}
              className="btn btn-xs btn-primary min-w-max"
            >
              <MdOutlineFeedback />
              Feedback
            </button>
            <Link
              to={`/dashboard/update-class/${_id}`}
              className="btn btn-xs  btn-warning min-w-max"
            >
              <AiOutlineEdit />
              Edit
            </Link>
          </div>
        </td>
        <GetFeedback
          open={open}
          message={message}
          handleClose={handleClose}
        ></GetFeedback>
      </tr>
    </>
  );
};

export default AllClassTable;
