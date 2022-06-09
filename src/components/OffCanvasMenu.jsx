import React from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from "react-redux";
import {selectMenuState, close} from './../features/ui/uiSlice'
import { selectUser } from "./../features/users/usersSlice";

const OCMenu = (props) => {
  console.log('c', close());
  const isOpen = useSelector(selectMenuState)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  return (
    <Drawer open={isOpen} onClose={() => dispatch(close())}>
      <Box role="presentation" onClick={() => dispatch(close())} onKeyDown={() => dispatch(close())}>
        <List>
          <ListItem key={1} disablePadding>
            <ListItemButton component={NavLink} to="/">
              Home
            </ListItemButton>
          </ListItem>
          <ListItem key={2} disablePadding>
            <ListItemButton component={NavLink} to="about">
              About
            </ListItemButton>
          </ListItem>
          <ListItem key={3} disablePadding>
            <ListItemButton component={NavLink} to="contact">
              Contact
            </ListItemButton>
          </ListItem>
          <Divider />
          {user?.isAdmin &&  (
            <>
            <ListItem key={4} disablePadding>
            <ListItemButton component={NavLink} to="people/add">
              Add Person
            </ListItemButton>
          </ListItem>
          <ListItem key={5} disablePadding>
            <ListItemButton component={NavLink} to="admin">
              Admin
            </ListItemButton>
          </ListItem>
          </>)}
        </List>
      </Box>
    </Drawer>
  );
};

export default OCMenu;
