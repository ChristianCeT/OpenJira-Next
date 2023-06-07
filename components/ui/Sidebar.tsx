import React, { useContext, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { UIContext } from "@/context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => {
            return (
              <ListItemButton key={text}>
                <ListItemIcon>
                  {index & 1 ? (
                    <AddOutlinedIcon />
                  ) : (
                    <AddPhotoAlternateOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            );
          })}
        </List>

        <Divider></Divider>

        <List>
          {menuItems.map((text, index) => {
            return (
              <ListItemButton key={text}>
                <ListItemIcon>
                  {index & 1 ? (
                    <AddOutlinedIcon />
                  ) : (
                    <AddPhotoAlternateOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
