import DashboardDrawer from "@/components/Dashboard/DashboardSidebar/DashboardSidebar"

const DasboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <DashboardDrawer>
    {children}
  </DashboardDrawer>
  )
}

export default DasboardLayout