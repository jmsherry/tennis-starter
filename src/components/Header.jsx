import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "./../features/users/usersSlice";
import { toggle } from "./../features/ui/uiSlice";

function Header() {
  const user = useSelector(selectUser);
  console.log("🚀 ~ file: Header.jsx ~ line 17 ~ Header ~ user", user);

  const dispatch = useDispatch();
  const toggleMenu = () => dispatch(toggle());
  const doLogout = () => dispatch(logout());
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {user ? `Hello ${user?.firstName}` : "Not Logged In"}
        </Typography>
        {user ? (
          <Button color="inherit" onClick={() => doLogout()}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" component={NavLink} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

/*
<header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
*/
