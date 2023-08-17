import React, { FC } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { Navbar, Sidebar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = "OpenJira - App", children }) => {
export const revalidate = 0
  return (
    /* sx: style but it's acces to themeProvider */
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar></Navbar>
      <Sidebar></Sidebar>

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
