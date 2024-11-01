"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Typography } from '@mui/material';
import Link from 'next/link';
import SidebarItem from './SidebarItem';
import { dashboardMenuItems } from '@/utils/dashboardMenuItems';
import { USER_ROLE } from '@/contants/role';








const SidebarItems = () => {
        

    
 

    return (
      <Box>
        <Box component={Link} href='/'>  
        
        <Typography my={2}>Dashboard</Typography>
        </Box>
     
     

        <List>
            {dashboardMenuItems(USER_ROLE.ADMIN ).map((item, index) => (
             <SidebarItem key={index} item={item}/>
            ))}
          </List>
        



      </Box>
    )
  }
  
  export default SidebarItems