import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, Outlet } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import useLoadSpecificUser from "../../CustomHook/useLoadSpecificUser";

const drawerWidth = 280;

function Dashboard(props) {
  const { user, handleLogOut } = useContext(AuthContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [userData] = useLoadSpecificUser();
  const role = userData?.role;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <h4 className="px-4 py-5 capitalize">{role} Dashboard :</h4>
      <Divider />
      <div className="py-5 px-2">
        <ul className="space-y-2">
          {/* for admin */}
          {role === "admin" && (
            <>
              <li className="flex items-center gap-2">
                <BiBookAdd />
                <Link to="/dashboard/manage-class">Manage Class</Link>
              </li>
              <li className="flex items-center gap-2">
                <BiBookAdd />
                <Link to="/dashboard/manage-user">Manage User</Link>
              </li>
            </>
          )}

          {/* for instructor */}
          {role === "instructor" && (
            <>
              <li className="flex items-center gap-2">
                <BiBookAdd />
                <Link to="/dashboard/add-class">Add Class</Link>
              </li>
              <li className="flex items-center gap-2">
                <SiGoogleclassroom />
                <Link to="/dashboard/all-class">All Class</Link>
              </li>
            </>
          )}

          {role === "student" && (
            <>
              <li className="flex items-center gap-2">
                <SiGoogleclassroom />
                <Link to="/dashboard/booking-class">Booking Class</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <Divider />

      <div className="py-5 px-2">
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <MdAlternateEmail />
            <li className="text-md" to="/dashboard/dfg">
              {user?.email}
            </li>
          </li>

          <li className="flex items-center gap-2">
            <AiOutlineHome />
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={handleLogOut}
            className="flex items-center gap-2 cursor-pointer"
          >
            <RiLogoutCircleLine />
            <h5>Logout</h5>
          </li>
        </ul>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            LinguaLearnHub
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
