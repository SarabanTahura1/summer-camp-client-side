import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import AllClass from "../pages/Dashboard/Instructor/AllClass";
import ManageAllClass from "../pages/Dashboard/Admin/ManageAllClass";
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookingClass from "../pages/Dashboard/Student/BookingClass";
import Instructors from "../pages/Instructors/Instructors";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass";
import FeedbackMessage from "../pages/Dashboard/Admin/FeedbackMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "add-class",
            element: <AddClass></AddClass>,
          },
          {
            path: "all-class",
            element: <AllClass></AllClass>,
          },
          {
            path: "manage-class",
            element: <ManageAllClass></ManageAllClass>,
          },
          {
            path: "manage-user",
            element: <ManageUser></ManageUser>,
          },
          {
            path: "booking-class",
            element: <BookingClass></BookingClass>,
          },
          {
            path: "feedback-messsage",
            element: <FeedbackMessage></FeedbackMessage>,
          },
          {
            path: "update-class/:id",
            element: <UpdateClass></UpdateClass>,
            loader: ({ params }) =>
              fetch(
                `https://language-server.up.railway.app/class/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);

export default router;
