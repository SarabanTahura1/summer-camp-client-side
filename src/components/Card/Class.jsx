import { useContext } from "react";
import useLoadSpecificUser from "../../CustomHook/useLoadSpecificUser";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Class = ({ cls }) => {
  const { user } = useContext(AuthContext);
  const [userData] = useLoadSpecificUser();
  const role = userData?.role;

  const handleBookedClass = () => {
    axios
      .post("https://language-server.up.railway.app/booked", {
        class_name: cls.class_name,
        courseImage: cls.courseImage,
        name: cls.name,
        courseFees: cls.courseFees,
        available_seats: cls.available_seats,
        students: cls.students,
        email: user.email,
        status: "booked",
      })
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Class Booked Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div
      className={`card w-full  dark:bg-gray-900 ${
        cls.available_seats == 0
          ? "bg-red-600 dark:bg-red-600 text-white "
          : "bg-gray-100 dark:bg-gray-900"
      } shadow-xl dark:shadow-white dark:shadow-xl`}
    >
      <figure className="px-10 pt-10">
        <img
          src={
            cls?.courseImage ||
            "https://media.istockphoto.com/id/1051721290/photo/learn-english-concept-education-and-career-opportunities.jpg?s=612x612&w=0&k=20&c=krW8rTMOF9ROQ66ufHVkefuMJ29ol1G21pGbTml6z24="
          }
          alt="course images"
          className="rounded-xl h-40 w-full object-fill"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title dark:text-white">
          Course : {cls?.class_name}{" "}
        </h2>
        <h3 className="  dark:text-white">Instructor : {cls?.name} </h3>
        <h3 className="  dark:text-white">
          Seats Available : {cls?.available_seats || 0}{" "}
        </h3>
        <h3 className="  dark:text-white">Students : {cls?.students || 0} </h3>
        <h3 className="  dark:text-white">
          Course Fees : {cls?.courseFees || 0}
          {"$"}
        </h3>

        <div className="card-actions">
          <button
            onClick={handleBookedClass}
            disabled={
              role !== "student" || cls.available_seats == 0 ? true : false
            }
            className="btn btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class;
