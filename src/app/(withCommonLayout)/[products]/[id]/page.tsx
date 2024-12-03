"use client";

import Container from "@/components/shared/Container";
import { Stars } from "@/utils/Stars";
import Image from "next/image";
import { useState } from "react";import { FaSistrix, FaStar } from "react-icons/fa";


const product = {
  name: "Unlocked Apple iPhone11 Pro, 64GB/256GB, 12MP Camera ",
  slug: "sample-product",
  description: "This is a sample product description.",
  price: 480.99,
  regularPrice: 599.23,
  quantity: 100,
  shipping: true,
  sold: 0,
  image:
    "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/112.jpg",
  category: "iPhone",
};

const discount = (
  ((product.regularPrice - product.price) / product.regularPrice) *
  100
).toFixed(0);

const specification = ["-" + discount + "%", "new"];

const rating = [1];

const reviews = [
  {
    user: {
      profile: "",
      name: "Omar Faruk",
    },
    productRating: 5,
    description:
      "onek valo maner porda gula colour o onek joss tai abar 4 pis order korlam quality onek valo thanks Daraz thanks seller vai ❤️!",
    image: [
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/112.jpg",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/112.jpg",
    ],
    response: "Thank you!",
    date: "2024-01-26 16:39",
  },
  {
    productRating: 4,
    description: "Good value for money.",
    image: [],
    response: null,
    date: "2024-01-25 15:30",
  },
];

const totalRating = reviews.reduce(
  (acc, review) => acc + review.productRating,
  0
);
const ratingArray = reviews.map((review) => review.productRating);

const ProductsDetails = () => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <section className="mx-auto p-4">
        <span>adsf</span>
        <div className="md:flex gap-6">
          <div className="md:w-1/2 w-full">
            <div>
              <div className="relative">
                <div className="absolute left-4 top-4 z-50 flex flex-col gap-1 ">
                  {specification.map((item, i) => (
                    <p
                      key={i}
                      className={`
          ${item === "hot" && "bg-[#DD2831]"}
          ${item === "new" && "bg-[#19cc40]"}
           ${
             item === "sold out" && "bg-gray-400"
           } bg-[#0068c8] text-[14px]  font-700 leading-none py-[6px] text-center px-3 uppercase text-[#ffffff] rounded-e-md rounded-b-md tracking-wider `}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute right-4 top-4 z-50 flex flex-col gap-1 ">
                  <p
                    className={` hover:bg-blue-100 text-gray-800  rounded-full `}
                  >
                    <FaSistrix className="size-10 cursor-pointer p-2" />
                  </p>
                </div>
              </div>
              <div className="border px-2 rounded-sm border-gray-200">
                <Image
                  src={product.image}
                  width={1000}
                  height={1000}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* product content  */}
          <div className="md:w-1/2 w-full">
            <div>
              <p className="text-[#aaaaaa]">{product.category}</p>
              <div className="border-bottom">
                <h3
                  className="md:text-3xl text-2xl  text-[#000000c9] font-[500]"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
                >
                  {" "}
                  {product.name}
                </h3>
              </div>
              <div className="border-bottom py-3">
                <div className="flex gap-2 justify-start">
                  {rating.length > 0 ? (
                    <div className="flex md:text-[16px] text-[13px] gap-4 text-[#fdc904] items-center">
                      <div className=" text-[15px] items-center gap-2">
                        <div className="block">
                          <Stars
                            count={5}
                            value={4}
                            position="horizontal"
                            activeColor="text-orange-600"
                            color="text-gray-200"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-2 text-[#000000c9] font-[600]">
                        <p className="">
                          ({rating.length.toFixed(2)}) {rating.length} Review{" "}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-red-500">No Ratings</p>
                  )}

                  <div className="text-[#0fb232] text-[13px] font-semibold border md:px-2 px-1 rounded-sm border-[#0fb232]">
                    <span className="">{product.quantity} in stock</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <div className="flex flex-col bg-gradient-to-br from-blue-300 via-blue-500 to-blue-900 text-white rounded-md justify-center size-20 items-center shadow-lg">
                    <span className="flex justify-center items-center  rounded-full text-2xl font-bold " style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}>
                      {/* {timeLeft.days} */}
                      01
                    </span>
                    <span className="text-[16px] font-[400] -mt-2">Days</span>
                  </div>
                  <div className="flex flex-col bg-gradient-to-br from-blue-300 via-blue-500 to-blue-900 text-white rounded-md justify-center size-20 items-center shadow-lg">
                    <span className="flex justify-center items-center  rounded-full text-2xl font-bold " style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}>
                      {/* {timeLeft.hours} */}
                      23
                    </span>
                    <span className="text-[16px] font-[400] -mt-2">Hours</span>
                  </div>
                  <div className="flex flex-col bg-gradient-to-br from-blue-300 via-blue-500 to-blue-900 text-white rounded-md justify-center size-20 items-center shadow-lg ">
                    <span className="flex justify-center items-center  rounded-full text-2xl font-bold " style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}>
                      {/* {timeLeft.minutes} */}
                      59
                    </span>
                    <span className="text-[16px] font-[400] -mt-2">
                      Minutes
                    </span>
                  </div>
                  <div className="flex flex-col bg-gradient-to-br from-blue-300 via-blue-500 to-blue-900 text-white rounded-md justify-center size-20 items-center shadow-lg">
                    <span className="flex justify-center items-center  rounded-full text-2xl font-bold " style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}>
                      59
                      {/* {timeLeft.seconds} */}
                    </span>
                    <span className="text-[16px] font-[400] -mt-2">
                      Seconds
                    </span>
                  </div>
                </div>

                <div className="py-4 mt-2">
                  <p className="text-red-500 text-3xl font-bold">
                    <del className="text-xl  font-semibold text-gray-400">
                      {" "}
                      <span>${product.regularPrice}</span>
                    </del>
                    ${product.price}{" "}
                    <span className="text-[16px] text-gray-700">
                      {"(-" + discount + "%)"}
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <ul className="px-[16px] text-[#a6a6a6] font-[500] list-disc flex gap-2 flex-col mt-6">
                  <li>RAM: 16GB</li>
                  <li>Hard Drive: 256GB SSD</li>
                  <li>Screen Size: 13.3 inches</li>
                </ul>

                <ul className="list-disc flex bg-[#e8f3fe] text-[#1273cc] font-[500] gap-2 flex-col mt-6 px-8 py-4 rounded-md bg-gradient-to-br from-purple-100 via-white to-blue-100  w-full  hover:bg-white shadow-md">
                  <li>Estimated delivery time 14-30 days</li>
                  <li>18 months warranty at Genuine Warranty Center.</li>
                  <li>Whats in the box: charging cable and block</li>
                </ul>
              </div>

              <div className="flex gap-4 mt-10">
                <div className="bg-gradient-to-br flex w-[200px] items-center justify-around from-purple-100 via-white to-blue-100 text-gray-800 py-2 font-bold rounded-sm shadow-md">
                  <button
                    className={`bg-gradient-to-b from-gray-200 to-gray-100 border border-gray-300 text-black font-bold rounded-sm shadow-lg transform active:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300 w-6 h-6 `}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>

                  <span className="bg-gradient-to-r from-black to-black via-gray-600 bg-clip-text text-transparent">
                    {product.quantity}
                  </span>
                  <button
                    className={`bg-gradient-to-b from-gray-200 to-gray-100 border border-gray-300 text-black font-bold rounded-sm shadow-lg transform active:translate-y-[2px]  hover:shadow-xl transition-all duration-300 w-6 h-6 `}
                  >
                    +
                  </button>
                </div>
                <div className="bg-gray-100  "></div>

                <div className="flex items-center w-full justify-between gap-4">
                  <div className="w-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 hover:m-0 m-[1px] hover:p-[1px] rounded-sm">
                    <button className="bg-gradient-to-br from-purple-100 via-white to-blue-100 text-gray-800 w-full py-2 font-bold rounded-sm hover:text-blue-500 hover:bg-white shadow-md">
                      <span
                        className={`bg-gradient-to-bl from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent cursor-pointer transition-transform duration-300`}
                      >
                        Buy Now
                      </span>
                    </button>
                  </div>
                  <div className="w-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 hover:m-0 m-[1px] hover:p-[1px] rounded-sm">
                    <button className="bg-gradient-to-br from-purple-100 via-white to-blue-100 text-gray-800 w-full py-2 font-bold rounded-sm hover:text-blue-500 hover:bg-white shadow-md">
                      <span className="bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                        Add Card
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t mt-8"></div>
              <div>
                <ul className="px-[16px] text-[#a6a6a6] font-[500] flex gap-2 flex-col mt-6">
                  <li className="flex">
                    <p className="w-20 text-black">SKU :</p> {product.slug}
                  </li>
                  <li className="flex">
                    <p className="w-20 text-black">Tags :</p> 256GB SSD
                  </li>
                  <li className="flex">
                    <p className="w-20 text-black">Share :</p> 13.3 inches
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t mt-8"></div>
      <section id="ratings" className="mx-auto mt-6 bg-white py-6">
        <h3 className="bg-gray-100 p-2 text-[20px] font-semibold">
          Product Ratings
        </h3>

        <div>
          <div className="md:flex items-center gap-6 bg-[#fffbf8] p-6 mt-4 border border-orange-200">
            <div className="md:block flex items-end">
              <div className="w-full font-semibold text-orange-500 -mb-1">
                <span className="text-3xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                  {(totalRating / ratingArray.length).toFixed(1)}
                </span>
                <span className=""> out of 5</span>
              </div>
              <div className="w-[100%]">
                <Stars
                  activeColor="text-orange-600"
                  color="text-gray-200"
                  count={5}
                  value={totalRating / ratingArray.length}
                  position="horizontal"
                ></Stars>
              </div>
            </div>
            <div className="mt-4">
              <div className="grid  md:grid-cols-6  grid-cols-3 justify-between gap-4">
                <button
                  onClick={() => setActive(0)}
                  className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                >
                  All
                </button>
                <button
                  onClick={() => setActive(5)}
                  className="flex gap-1 items-center justify-center px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                >
                  <FaStar className="text-[#ea580c]" />
                  <p>5</p>
                  <span>
                    {`(${ratingArray.filter((value) => value === 5).length})`}
                  </span>
                </button>

                <button
                  onClick={() => setActive(4)}
                  className="flex gap-1 items-center justify-center px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                >
                  <FaStar className="text-[#ea580c]" />
                  <p>4</p>
                  <span>
                    {`(${ratingArray.filter((value) => value === 4).length})`}
                  </span>
                </button>

                <button
                  onClick={() => setActive(3)}
                  className="flex gap-1 items-center justify-center px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                >
                  <FaStar className="text-[#ea580c]" />
                  <p>3</p>
                  <span>
                    {`(${ratingArray.filter((value) => value === 3).length})`}
                  </span>
                </button>

                <button
                  onClick={() => setActive(2)}
                  className="flex gap-1 items-center justify-center px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                >
                  <FaStar className="text-[#ea580c]" />
                  <p>2</p>
                  <span>
                    {`(${ratingArray.filter((value) => value === 2).length})`}
                  </span>
                </button>

                <button
                  onClick={() => setActive(1)}
                  className="flex gap-1 items-center justify-center px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                >
                  <FaStar className="text-[#ea580c]" />
                  <p>1</p>
                  <span>
                    {`(${ratingArray.filter((value) => value === 1).length})`}
                  </span>
                </button>
              </div>
              {/* <div className="flex mt-2 gap-4">
              <button className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[200px] text-sm">
                with comments (144)
              </button>
              <button className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[200px] text-sm">
                With Media (56)
              </button>
            </div> */}
            </div>
          </div>
        </div>

        <div className="mt-4">
          {reviews
            .filter((item) => item.productRating === active || active === 0)
            .map((item, i) => (
              <div className="flex gap-2 mt-4 w-full" key={i}>
                {/* Main content */}
                <div className="w-full">
                  <div className="flex gap-2 items-center">
                    <div className="p-0">
                      {/* Rating stars */}
                      <Stars
                        activeColor="text-orange-600"
                        color="text-gray-200"
                        count={5}
                        value={item.productRating}
                        position="horizontal"
                      ></Stars>
                    </div>
                    <div className="">
                      {item?.user?.name ? item?.user?.name : "User"}{" "}
                    </div>
                  </div>
                  {/* <p className="">{item.date}</p> */}
                  <p className="mt-1">{item.description}</p>
                  <div className="mt-2">
                    <div className="flex flex-row items-center gap-2">
                      {item.image.map((img, ii) => (
                        <div className="w-32 h-32" key={ii}>
                          <Image
                            src={img}
                            className="w-full h-full p-0"
                            alt={`Review image ${ii}`}
                            width={400}
                            height={400}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {item.response && (
                    <div className="ml-4 p-2 bg-gray-100 mt-4 border">
                      <div>{`Seller's response:`}</div>
                      <p>{item.response}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
    </Container>
  );
};

export default ProductsDetails;
