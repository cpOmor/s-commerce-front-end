
//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import { TDashboardMenuItems, UserRole } from "@/types";
import { USER_ROLE } from "@/contants/role";

export const dashboardMenuItems = (role:UserRole):TDashboardMenuItems[]=>{
      const roleMenus:TDashboardMenuItems[] = []

      switch(role){
         case USER_ROLE.ADMIN:
            roleMenus.push({
                title:"Dashboard",
                path:`${role}`,
                icon:DashboardIcon
            },
        
            {
                title:"Manage Users",
                path:`${role}/manage-users`,
                icon:GroupRemoveIcon
            },

              {
                title:"Add Product",
                path:`${role}/add-product`,
                icon:ProductionQuantityLimitsIcon
            },

             {
                title:"Add Categories",
                path:`${role}/add-categories`,
                icon:CategoryIcon
            },

            
        )

            break

            case USER_ROLE.USER:
                roleMenus.push(
                  {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                  },
                //   {
                //     title: "Specialties",
                //     path: `${role}/specialties`,
                //     icon: TryIcon,
                //   },
                  
                );
               

                default:
                    break;



      }

    return [...roleMenus]
}