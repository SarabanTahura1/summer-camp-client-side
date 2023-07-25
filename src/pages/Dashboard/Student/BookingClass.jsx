import axios from "axios";
import useLoadBookedData from "../../../CustomHook/useLoadBookedData";
import BookedClass from "../../../components/Table/BookedClass/BookedClass";
import Swal from "sweetalert2";

const BookingClass = () => {
  const [booked, refetch] = useLoadBookedData();

  const handleDeleteCartItem = (id) => {
    axios
      .delete(`https://language-server.up.railway.app/booked/${id}`)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Class Removed Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
            {booked.map((cls, index) => (
              <BookedClass
                clas={cls}
                handleDeleteCartItem={handleDeleteCartItem}
                key={index}
              ></BookedClass>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingClass;
