import React, { useContext } from "react";
import NextLink from "next/link";

import { UIContext } from "@/context/ui";

import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Link
          component={NextLink}
          href="/"
          passHref
          underline="none"
          color="white"
        >
          <Typography variant="h6">OpenJira</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
