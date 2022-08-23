import React from "react";
import {
 
  Box,
 
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel

 
} from "@chakra-ui/react";
import ProjectDash from "../projectDash/ProjectDash";
function ProjectTab() {
  return (
    <Box bg="#f6f6f7" >
      <Tabs variant="enclosed" >
        <TabList color="black" >
          <Tab>Dashboard</Tab>
          <Tab _isDisabled="true">All Projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <ProjectDash/>
          </TabPanel>
          <TabPanel>
            <p>All Projects!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default ProjectTab;
