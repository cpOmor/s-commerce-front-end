import Container from '@/components/shared/Container'
import Link from 'next/link'
import successIcon from '@/assets/success.png'
import Image from 'next/image'

const SuccessPage = () => {
  return (
    <Container>
       <div className="bg-white rounded-[12px] flex justify-center items-center h-[100vh]">
         
            <div className="lg:w-[610px] w-full rounded-[10px] border-[1px] border-[#E5E5E5] lg:p-[50px] md:p-[50px] p-4">
             
              <div className="flex flex-col justify-center items-center">
              <Image className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full " src={successIcon} alt="succes icon"/>
               
              <h1 className="md:mt-[30px] mt-6 text-[#0169C8] md:text-[24px] text-[18px]  font-semibold md:leading-[31.2px] leading-[18px]">
                 Success
              </h1>

              <p className="text-[#888] md:text-[18px] text-[14px] text-center md:mt-[10px] mt-2  font-normal md:leading-[23.4px] leading-[18px] w-[222px] md:w-full">
              Congratulations! Your password has been changed. <br /> Click here to sign in
              </p>

                <Link href="/login"
                  className={`bg-[#0169C8] rounded-[6px] lg:mt-[30px] mt-[24px] w-full h-[51px] text-white lg:text-[18px] md:text-[18px] text-[14px] font-medium leading-[18px] flex justify-center items-center 
                   `}
                  
                >
                sign In
                </Link>

              </div>
              
                  
       
          </div>
        </div>
    </Container>
  )
}

export default SuccessPage