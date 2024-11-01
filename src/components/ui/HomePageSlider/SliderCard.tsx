"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import watchImage from "@/assets/slide1-watches.png";
import Ipad from "@/assets/slide1-ipad.png";
import IPhone from "@/assets/slide1-iphone.png";

import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "All New For a Better You",
    subtitle: "Amazing discount and deals",
    price: "$399.00",
    buttonText: "Shop Now",
    slug: "all-new-for-a-better-you",
    bgColor: "#2C2C46",
    image: watchImage,
    dealType: "weekend deal",
  },

  {
    title: "IPhone On Sale At Up To 25% Off",
    slug: "iphone-on-sale-at-up-to-25%-off",
    subtitle: "by top product on Ecomall",
    price: "$499.00",
    buttonText: "Shop Now",
    bgColor: "#202F22",
    image: IPhone,
    dealType: "big sale",
  },
];

const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:h-[80vh] h-[100vh] bg-red-500 overflow-hidden rounded-md">
      {slides.length <= 1 ? (
        // If only one slide, display it without slider functionality
        <div className="pb-5 h-full">
          <div
            className="borer-0 outline-0 "
            style={{ backgroundColor: slides[0].bgColor }}
          >
            <div className="lg:h-[450px] h-full rounded-lg lg:flex justify-between items-center lg:px-20 ">
              <div className="lg:w-[550px] w-full">
                <div className="pt-10 lg:pt-0">
                  <p className="w-[140px] mx-auto lg:mx-0 py-[6px] bg-red-600 text-white font-bold text-[10px] uppercase rounded-ee-lg rounded-ss-lg text-center mb-4">
                    {slides[0].dealType}
                  </p>
                </div>

                <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px] text-white text-center lg:text-left">
                  {slides[0].title}
                </h1>
                <h3 className="text-[18px] font-medium text-white uppercase leading-10 text-center lg:text-left">
                  {slides[0].subtitle}
                </h3>

                <div className="text-white text-[20px] mt-5 text-center lg:text-left">
                  Form{" "}
                  <span className="font-bold text-[24px] text-[#fcc904]">
                    {slides[0].price}
                  </span>
                </div>
                <div className="block w-full mx-auto lg:mx-0">
                  <Link href={`./products/${slides[0].slug}`}>
                    <button className="w-[170px] h-[48px] text-[16px] text-white mt-6 bg-[#0088FF] font-bold rounded-md uppercase">
                      {slides[0].buttonText}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-[640px] h-full w-full mt-10 lg:mt-0">
                <Image
                  className="lg:w-[640px] w-full h-full "
                  src={slides[0].image}
                  alt="slider image"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // If multiple slides, use the slider component
        <Slider className="pb-5" {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="borer-0 outline-0">
              <div
                className="lg:h-[450px] h-full rounded-lg lg:flex justify-between items-center lg:px-20"
                style={{ backgroundColor: slide.bgColor }}
              >
                <div className="lg:w-[550px] w-full">
                  <div className="pt-10 lg:pt-0">
                    <p className="w-[140px] mx-auto lg:mx-0 py-[6px] bg-red-600 text-white font-bold text-[10px] uppercase rounded-ee-lg rounded-ss-lg text-center mb-4">
                      {slide.dealType}
                    </p>
                  </div>

                  <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px] text-white text-center lg:text-left">
                    {slide.title}
                  </h1>
                  <h3 className="text-[18px] font-medium text-white uppercase leading-10 text-center lg:text-left">
                    {slide.subtitle}
                  </h3>

                  <div className="text-white text-[20px] mt-5 text-center lg:text-left">
                    Form{" "}
                    <span className="font-bold text-[24px] text-[#fcc904]">
                      {slide.price}
                    </span>
                  </div>

                  <div className="w-[170px] mx-auto lg:mx-0">
                    <Link href={`./products/${slides[0].slug}`} className="">
                      <button className="w-[170px] h-[48px] text-[16px] text-white mt-6 bg-[#0088FF] font-bold rounded-md uppercase">
                        {slide.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="lg:w-[640px] h-full w-full mt-10 lg:mt-0">
                  <Image
                    className="lg:w-[640px] w-full h-full "
                    src={slide.image}
                    alt="slider image"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderCard;
