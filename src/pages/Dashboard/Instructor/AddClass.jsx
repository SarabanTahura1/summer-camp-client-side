import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://language-server.up.railway.app/allclass", {
        ...data,
        status: "pending",
      })
      .then((response) => {
        if (response.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Class Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full my-20 max-w-4xl mx-auto  min-h-screen">
      <h3 className="text-3xl border-b-4 inline-block pr-7 border-gray-950  font-semibold">
        Add Class
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full my-16 px-5 lg:px-0 space-y-4"
      >
        {/* =================================== */}
        <div className="space-y-4 w-full">
          <div>
            <input
              type="email"
              readOnly
              defaultValue={user?.email}
              className="bg-gray-100 p-4 border-0  text-gray-500 focus:border-0 focus:outline-0 rounded w-full placeholder:text-gray-400"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <input
              type="text"
              readOnly
              defaultValue={user?.displayName}
              className="bg-gray-100 p-4 border-0 capitalize  text-gray-500 focus:border-0 focus:outline-0 rounded w-full placeholder:text-gray-400"
              {...register("name", { required: "name Address is required" })}
              aria-invalid={errors.name ? "true" : "false"}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter class name"
              className="bg-gray-100 p-4 border-0 text-gray-500 focus:border-0 focus:outline-0 rounded w-full placeholder:text-gray-400"
              {...register("class_name", { required: true })}
              aria-invalid={errors.class_name ? "true" : "false"}
            />
            {errors.class_name?.type === "required" && (
              <p role="alert">Class name is required</p>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Available seats"
              className="bg-gray-100 p-4 border-0  text-gray-500 focus:border-0 focus:outline-0 rounded w-full placeholder:text-gray-400"
              {...register("available_seats", {
                required: "Available seats  is required",
              })}
              aria-invalid={errors.available_seats ? "true" : "false"}
            />
            {errors.available_seats && (
              <p role="alert">{errors.available_seats?.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <input
              type="number"
              placeholder="$ in price"
              className="bg-gray-100 p-4 border-0 text-gray-500 focus:border-0 focus:outline-0 rounded w-full placeholder:text-gray-400"
              {...register("courseFees", { required: true })}
              aria-invalid={errors.courseFees ? "true" : "false"}
            />
            {errors.courseFees?.type === "required" && (
              <p role="alert">courseFees Field is required</p>
            )}
          </div>
          <div>
            <input
              type="url"
              placeholder="Course Image  URL"
              className="bg-gray-100 p-4 border-0  text-gray-500 focus:border-0 focus:outline-0 rounded w-full placeholder:text-gray-400"
              {...register("courseImage", {
                required: "Course Image  is required",
              })}
              aria-invalid={errors.courseImage ? "true" : "false"}
            />
            {errors.courseImage && (
              <p role="alert">{errors.courseImage?.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="uppercase flex self-center min-w-max px-6 mx-auto py-1 bg-sky-700  text-white rounded"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
