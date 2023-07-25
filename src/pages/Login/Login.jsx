import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { handleSignIn, handlerGoogleSignIn } = useContext(AuthContext);
  const [isToggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
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
    const email = data.email;
    const password = data.password;
    handleSignIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Sign In Success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then(() => {
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      });
  };

  return (
    <div className="flex  justify-center items-center min-h-screen bg-[url('https://i.postimg.cc/2yGzpwWJ/abstract-classic-blue-wallpaper-23-2148430346.jpg')] bg-no-repeat bg-cover ">
      <Fade left>
        <div className="backdrop-blur-sm max-w-4xl mx-auto border-4 grid grid-cols-1 lg:grid-cols-3  border-white rounded-md w-full mx-10   h-full">
          <div className="lg:col-span-2 py-24 w-auto  px-2 flex flex-col gap-2 justify-center items-center  bg-no-repeat bg-cover bg-center ">
            <h4 className="text-white font-semibold text-3xl">Log-In</h4>
            <span
              onClick={GoogleHandler}
              className="inline-block px-6 py-1 rounded-full hover:bg-sky-600 text-white transition-colors duration-500 text-sm cursor-pointer border-2 border-white"
            >
              Continue With Google
            </span>
            <span className="text-xs text-gray-200">
              or use your email address for login
            </span>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  mt-2 justify-center gap-1  items-center "
            >
              {/* email field */}
              <div className="bg-gray-200 relative rounded-md">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="bg-transparent px-9 py-1 placeholder:text-xs placeholder:text-gray-500 focus:outline-0"
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

              {/* password  field */}
              <div className="bg-gray-200 relative  rounded-md">
                <input
                  type={isToggle ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  className="bg-transparent px-9 py-1  placeholder:text-xs placeholder:text-gray-500 focus:outline-0"
                  placeholder="Password"
                />

                <RiLockPasswordLine className="absolute left-3  z-30 top-0 bottom-0 my-auto" />

                {isToggle ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setToggle(false)}
                    className="absolute right-3  z-50 top-0 bottom-0 my-auto cursor-pointer"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setToggle(true)}
                    className="absolute right-3  z-50 top-0 bottom-0 my-auto cursor-pointer"
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

              {/* submit button */}
              <input
                type="submit"
                value="Login"
                className="text-white bg-sky-500 px-10 py-1 mt-2 rounded-full border-2 border-white cursor-pointer hover:bg-sky-600 transition-colors duration-500"
              />
            </form>
            <div className="flex flex-col  items-start">
              <Link
                to="/signup"
                className="text-white text-sm block  hover:underline lg:hidden"
              >
                Already haven`t account ? click here
              </Link>

              <Link to="/" className="text-white text-sm hover:underline">
                Go to Home
              </Link>
            </div>
          </div>
          <div className="h-full w-[296px] relative hidden lg:block">
            <img
              src="https://i.postimg.cc/VLJ4QVPP/premium-photo-1666998556443-d339285f7fcc-ixlib-rb-4-0.jpg"
              className=" object-cover h-full  w-full"
            />
            <div className="absolute top-0 left-0  right-0 bottom-0 w-full h-full bg-sky-400 opacity-95"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-2xl font-bold min-w-max">Hello, Friend!</h1>
              <p className="text-center text-xs">
                Fill up personal information and start journey with us
              </p>
              <Link to="/signup">
                <button className="mt-4 px-6 py-1 border-2 border-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </Fade>
    </div>
  );
};

export default Login;
