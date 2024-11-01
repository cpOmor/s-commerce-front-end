
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (

    <div className="bg-white py-7 mt-10 border border-t">
       
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="mt-10 md:mt-10 lg:mt-0">
            <h1 className="text-[24px] font-bold">logo</h1>
            <p className="text-[18px] font-normal mt-4">
              Find a location nearest you.{" "}
            </p>
            <p className="text-[18px] text-red-400 underline mt-1">
              see Our Stores
            </p>


            <p className="text-[18px] font-normal mt-2">
              Support1234@Ecomall.com
            </p>
            <h4 className="text-[18px] font-bold mt-2">+08 9229 8228</h4>

            <div className="flex gap-4 mt-5">
              <FaFacebookF className="size-5 cursor-pointer" />
              <FaTwitter className="size-5 cursor-pointer" />
              <FaInstagram className="size-5 cursor-pointer" />
              <FaHeadphonesAlt className="size-5 cursor-pointer" />
            </div>
          </div>

          <div className="mt-10 md:mt-10 lg:mt-0">
            <h1 className="text-[24px] font-bold">About Us</h1>
            <p className="text-[18px] font-normal mt-4 hover:text-[#0068C8] cursor-pointer duration-200">
              About Us{" "}
            </p>

            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              News & Blog{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Brands{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Press Center{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Advertising{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Investors{" "}
            </p>
          </div>

          <div className="mt-10 md:mt-10 lg:mt-0">
            <h1 className="text-[24px] font-bold">Support</h1>
            <p className="text-[18px] font-normal mt-4 hover:text-[#0068C8] cursor-pointer duration-200">
              Support Center{" "}
            </p>

            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Manage{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Service{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Haul Away{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Security Center{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Contact{" "}
            </p>
          </div>

          <div className="mt-10 md:mt-10 lg:mt-0">
            <h1 className="text-[24px] font-bold">Order</h1>
            <p className="text-[18px] font-normal mt-4 hover:text-[#0068C8] cursor-pointer duration-200">
              Check Order{" "}
            </p>

            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Delivery & Pickup{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Returns{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Exchanges{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Developers{" "}
            </p>
            <p className="text-[18px] font-normal mt-1 hover:text-[#0068C8] cursor-pointer duration-200">
              Gift Cards{" "}
            </p>
          </div>
        </div>

        <div className="border-b-[1px] mt-14 "></div>

        <div className="md:flex justify-between items-center mt-10">
          <div>
            <p className="md:text-[20px] text-[18px] font-semibold">
              © Ecomall. All Rights Reserved.
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <Image
              src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2024/01/payment.png"
              alt=""
              width={300}
              height={300}
              blurDataURL="blur"
            />
          </div>
        </div>
      </Container>
    
    </div>
  );
};

export default Footer;
