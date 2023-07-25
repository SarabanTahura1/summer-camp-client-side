import { Button } from "@mui/material";
import ActiveRoute from "../ActiveRoute/ActiveRoute";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useLoadSpecificUser from "../../CustomHook/useLoadSpecificUser";

const ListItem = ({ handleCloseNavMenu, color }) => {
  const { user } = useContext(AuthContext);
  const [userData] = useLoadSpecificUser();
  const role = userData?.role;

  return (
    <>
      <ActiveRoute to="/">
        <Button
          sx={{ color: color, display: "block" }}
          onClick={handleCloseNavMenu}
        >
          Home
        </Button>
      </ActiveRoute>
      <ActiveRoute to="/classes">
        <Button
          sx={{ color: color, display: "block" }}
          onClick={handleCloseNavMenu}
        >
          Classes
        </Button>
      </ActiveRoute>
      <ActiveRoute to="/instructors">
        <Button
          sx={{ color: color, display: "block" }}
          onClick={handleCloseNavMenu}
        >
          Instructors
        </Button>
      </ActiveRoute>
      {user && role === "admin" && (
        <ActiveRoute to="/dashboard/manage-user">
          <Button
            sx={{ color: color, display: "block" }}
            onClick={handleCloseNavMenu}
          >
            Dashboard
          </Button>
        </ActiveRoute>
      )}
      {user && role === "instructor" && (
        <ActiveRoute to="/dashboard/all-class">
          <Button
            sx={{ color: color, display: "block" }}
            onClick={handleCloseNavMenu}
          >
            Dashboard
          </Button>
        </ActiveRoute>
      )}
      {user && role === "student" && (
        <ActiveRoute to="/dashboard/booking-class">
          <Button
            sx={{ color: color, display: "block" }}
            onClick={handleCloseNavMenu}
          >
            Dashboard
          </Button>
        </ActiveRoute>
      )}
    </>
  );
};

export default ListItem;
