import Image from "next/image";
import careve from "@/assets/products/careve.jpg";
import Container from "@/components/shared/Container";
import Link from "next/link";

const BeautyDiscount = () => {
  return (
    <Container>
      <div className="lg:h-[350px] bg-[#E6EBEF] rounded-lg lg:flex justify-between items-center px-12 py-10 md:py-10 lg:py-0 lg:mt-24 mt-10">
        <div>
          <p className=" font-medium lg:text-[18px] md:text-[24px] text-[15px] mb-1 text-red-500">
            EXCLUSIVE HEADPHONE
          </p>

          <h1 className=" font-bold lg:text-[45px] md:text-[55px] text-[20px] lg:leading-[50px] md:leading-[90px] leading-9">
            Beauty & <br /> Personal Care
          </h1>

          <Link href="./products/1" className="w-[170px] mt-8">
            <button className="w-[170px] h-[48px] text-[16px] text-white bg-[#0088FF] font-bold rounded-md uppercase">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="mt-5 md:mt-16 lg:mt-5 ">
          <Image
            className="w-full lg:h-[300px] h-full object-contain "
            src={careve}
            alt="watch image"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};

export default BeautyDiscount;
