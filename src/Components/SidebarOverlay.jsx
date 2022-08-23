import React from 'react'
import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

import { Flex } from '@chakra-ui/react';

export const SidebarOverlay = () => {
  return (
    <Flex>
    <Sidebar/>
    <Outlet/>
    </Flex>
  )
}
