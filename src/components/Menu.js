import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";
import Logo from "../Assets/Logo.jpg";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="fixed" style={{ background: "#f2cc25", color: "#000" }}>
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={() => setOpen(true)} />
          </IconButton> */}
          <img src={Logo} alt="logo" style={{ height: "50px" }} />
          <Typography
            variant="h6"
            style={{ fontWeight: 700 }}
            color="inherit"
            component="div"
          >
            Namaste JavaScript
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} />
    </div>
  );
}

export default Menu;
