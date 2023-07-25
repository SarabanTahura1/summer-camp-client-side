import { AiOutlineDelete } from "react-icons/ai";

const BookedClass = ({ clas, handleDeleteCartItem }) => {
  const {
    _id,
    class_name,
    name,
    courseImage,
    available_seats,
    courseFees,
    students,
    status,
  } = clas;

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
          <span className=" inline-block py-4">{students || 0}</span>
        </td>
        <td className=" text-center">
          {status === "booked" ? (
            <span className="text-white badge badge-info badge-sm font-bold text-md p-4">
              Booked
            </span>
          ) : (
            <span className="text-white badge badge-warning badge-sm  font-bold text-md p-4">
              Pending
            </span>
          )}
        </td>
        <td className="text-center">
          <button
            onClick={() => handleDeleteCartItem(_id)}
            className="btn btn-xs btn-error min-w-max"
          >
            <AiOutlineDelete />
          </button>
        </td>
      </tr>
    </>
  );
};

export default BookedClass;
