import { useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLink,
  AiOutlineMail,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-reveal";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Signup = () => {
  const { handleRegister, handleProfileUpdate, handlerGoogleSignIn } =
    useContext(AuthContext);
  const [isToggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const GoogleHandler = () => {
    handlerGoogleSignIn()
      .then((result) => {
        const user = result.user;
        axios.post("https://language-server.up.railway.app/userinfo", {
          fullname: user.displayName,
          email: user.email,
          thumbnail: user.photoURL,
          role: "student",
        });
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "You have successfully Login!",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Authentication Failed",
          text: error.code,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const onSubmit = (data) => {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/.test(
        data.password
      )
    ) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (data.password !== data.confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password did not matched!",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (parseInt(data.password.length) < 6) {
      return Swal.fire({
        icon: "warning",
        title: "Invalid Password",
        text: "Password must be 6 digits longer",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      const fullname = data.fullName;
      const email = data.email;
      const thumbnail = data.thumbnail;
      const role = data.role.value;
      const password = data.password;
      handleRegister(email, password)
        .then((result) => {
          const user = result.user;
          handleProfileUpdate(user, fullname, thumbnail);
          axios.post("https://language-server.up.railway.app/userinfo", {
            fullname,
            email,
            thumbnail,
            role,
          });
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You have successfully registered!",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            navigate("/");
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Authentication Failed",
            text: error.code,
            showConfirmButton: false,
            timer: 2000,
          });
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('https://i.postimg.cc/NMmgft3W/abstract-classic-blue-theme-background-23-2148413643.jpg')] bg-no-repeat bg-cover ">
      <Fade right>
        <div className="bg-transparent backdrop-blur-sm my-10 lg:my-0	 max-w-4xl mx-auto border-4 grid grid-cols-1 lg:grid-cols-3  border-white rounded-md w-full mx-10   h-full">
          <div className="h-full w-[296px] relative hidden lg:block">
            <img
              src="https://i.postimg.cc/VLJ4QVPP/premium-photo-1666998556443-d339285f7fcc-ixlib-rb-4-0.jpg"
              className=" object-cover h-full  w-full"
            />
            <div className="absolute top-0 left-0  right-0 bottom-0 w-full h-full bg-sky-400 opacity-95"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-2xl font-bold min-w-max">Welcome Back</h1>
              <p className="text-center text-xs">
                To keep connected with us, please login with your personal info
              </p>

              <Link to="/login">
                <button className="mt-4 px-6 py-1 border-2 border-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 py-10  px-2 flex flex-col gap-2 justify-center items-center  bg-no-repeat bg-cover bg-center ">
            <h4 className="text-sky-200 font-semibold text-3xl">
              Create Account
            </h4>
            <span
              onClick={GoogleHandler}
              className="inline-block px-6 py-1 rounded-full hover:bg-sky-600 text-white transition-colors duration-500 text-sm cursor-pointer border-2 border-white"
            >
              Continue With Google
            </span>
            <span className="text-xs text-gray-200">
              or use your email address for registration
            </span>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  mt-2 justify-center gap-1  items-center "
            >
              {/* fullname field */}
              <div className="bg-gray-200 relative rounded-md">
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  aria-invalid={errors.fullName ? "true" : "false"}
                  className="bg-transparent px-9 py-1 placeholder:text-xs focus:outline-0 placeholder:text-gray-500"
                  placeholder=" Name"
                />
                <CgProfile className="absolute left-3  z-50 top-0 bottom-0 my-auto" />
              </div>
              <div className="text-left w-full">
                {errors.fullName?.type === "required" && (
                  <p role="alert " className="text-error text-left text-xs">
                    Name is required
                  </p>
                )}
              </div>

              {/* email field */}
              <div className="bg-gray-200 relative rounded-md">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="bg-transparent px-9 py-1 placeholder:text-xs focus:outline-0 placeholder:text-gray-500"
                  placeholder=" Email"
                />
                <AiOutlineMail className="absolute left-3  z-50 top-0 bottom-0 my-auto" />
              </div>
              <div className="text-left w-full">
                {errors.email?.type === "required" && (
                  <p role="alert " className="text-error text-left text-xs">
                    Email is required
                  </p>
                )}
              </div>

              {/* Profile url field */}
              <div className="bg-gray-200 relative rounded-md">
                <input
                  type="url"
                  {...register("thumbnail", { required: true })}
                  aria-invalid={errors.thumbnail ? "true" : "false"}
                  className="bg-transparent px-9 py-1 placeholder:text-xs focus:outline-0 placeholder:text-gray-500"
                  placeholder=" Profile url"
                />
                <AiOutlineLink className="absolute left-3  z-50 top-0 bottom-0 my-auto" />
              </div>
              <div className="text-left w-full">
                {errors.thumbnail?.type === "required" && (
                  <p role="alert " className="text-error text-left text-xs">
                    thumbnail is required
                  </p>
                )}
              </div>

              {/* role */}
              <Controller
                name="role"
                rules={{ required: true }}
                control={control}
                className="w-full  px-10"
                render={({ field }) => (
                  <Select
                    className="w-full z-50"
                    {...field}
                    options={[
                      { value: "student", label: "Student" },
                      { value: "instructor", label: "Instructor" },
                    ]}
                  />
                )}
              />
              <div className="text-left w-full">
                {errors.role?.type === "required" && (
                  <p role="alert " className="text-error text-left text-xs">
                    Role is required
                  </p>
                )}
              </div>
              {/* password  field */}
              <div className="bg-gray-200 relative rounded-md">
                <input
                  type={isToggle ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  className="bg-transparent px-9 py-1 placeholder:text-xs focus:outline-0 placeholder:text-gray-500"
                  placeholder="Confirm password"
                />
                <RiLockPasswordLine className="absolute left-3  z-10 top-0 bottom-0 my-auto" />
                {isToggle ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setToggle(false)}
                    className="absolute right-3  z-10 top-0 bottom-0 my-auto cursor-pointer"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setToggle(true)}
                    className="absolute right-3  z-10 top-0 bottom-0 my-auto cursor-pointer"
                  />
                )}
              </div>
              <div className="text-left w-full">
                {errors.password && (
                  <p role="alert" className="text-error text-left text-xs">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              {/* confirm password */}
              <div className="bg-gray-200 relative rounded-md">
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  className="bg-transparent px-9 py-1 placeholder:text-xs focus:outline-0 placeholder:text-gray-500"
                  placeholder="Confirm password"
                />
                <RiLockPasswordLine className="absolute left-3  z-10 top-0 bottom-0 my-auto" />
              </div>
              <div className="text-left w-full">
                {errors.confirmPassword && (
                  <p role="alert" className="text-error text-left text-xs">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>

              {/* submit button */}
              <input
                type="submit"
                value="Sign Up"
                className="text-white bg-sky-500 px-10 py-1 mt-2 rounded-full border-2 border-white cursor-pointer hover:bg-sky-600 transition-colors duration-500"
              />
            </form>
            <div className="flex flex-col  items-start">
              <Link
                to="/login"
                className="text-white text-sm block  hover:underline lg:hidden"
              >
                Already haven`t account ? click here
              </Link>

              <Link to="/" className="text-white text-sm hover:underline">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Signup;
