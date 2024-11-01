import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import NavbarBottom from "@/components/shared/NavbarBottom/NavbarBottom"




const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
         <Navbar/>
         <NavbarBottom />
         <div className=''>
         {children}
         </div>
        <Footer/>
        </div>
  )
}

export default CommonLayout