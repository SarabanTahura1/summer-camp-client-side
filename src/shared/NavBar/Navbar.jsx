import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "../../components/ListItem/ListItem";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { DarkModeOutlined, WbSunnyOutlined } from "@mui/icons-material";
import { AuthContext } from "../../provider/AuthProvider";
import useLoadSpecificUser from "../../CustomHook/useLoadSpecificUser";

function Navbar() {
  const [userData] = useLoadSpecificUser();
  const role = userData?.role;

  const { user, handleLogOut } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const signoutHandler = () => {
    handleCloseUserMenu();
    handleLogOut();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="dark:bg-gray-950">
      <Container>
        <Toolbar disableGutters>
          <Link to="/" className="flex items-center">
            {" "}
            <img
              src="https://i.postimg.cc/76BqpZY3/logo.png"
              className="h-12 hidden lg:inline-block"
              alt=""
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              className="hidden lg:inline-block"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LinguaLearnHub
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "black" },
              }}
            >
              <ListItem
                handleCloseNavMenu={handleCloseNavMenu}
                color="blueBlue"
              ></ListItem>
            </Menu>
          </Box>
          <img
            src="https://i.postimg.cc/76BqpZY3/logo.png"
            className="h-8 inline-block lg:hidden"
            alt=""
          />
          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LinguaLearnHub
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <ListItem
              handleCloseNavMenu={handleCloseNavMenu}
              color="white"
            ></ListItem>
          </Box>
          <div className="flex items-center gap-5">
            {/* Dark Mode Switch */}
            {!isDark ? (
              <WbSunnyOutlined
                onClick={() => setDark(true)}
                className="cursor-pointer"
              />
            ) : (
              <DarkModeOutlined
                onClick={() => setDark(false)}
                className="cursor-pointer"
              />
            )}

            {/* Profile icon + login Button */}
            {!user ? (
              <Link to="/login">
                <button className="  px-3 py-2 rounded-full">
                  <AiOutlineLogin className="text-2xl" />
                </button>
              </Link>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Click">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
   

                  <MenuItem onClick={handleCloseUserMenu}>
                    {role === "student" && (
                      <Link to="/dashboard/booking-class">
                        <Typography textAlign="center">Dashboard</Typography>
                      </Link>
                    )}
                    {role === "admin" && (
                      <Link to="/dashboard/manage-user">
                        <Typography textAlign="center">Dashboard</Typography>
                      </Link>
                    )}
                    {role === "instructor" && (
                      <Link to="/dashboard/all-class">
                        <Typography textAlign="center">Dashboard</Typography>
                      </Link>
                    )}
                  </MenuItem>

                  <MenuItem onClick={signoutHandler}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
