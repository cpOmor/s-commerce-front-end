
import { USER_ROLE } from "@/contants/role";
import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"



export type UserRole = keyof typeof USER_ROLE;



export interface TDashboardMenuItems {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: TDashboardMenuItems[];
  }

  export const Gender = ["MALE", "FEMALE"];