import Image from "next/image";

import medjoolKhejur from "@/assets/products/mango-1.jpg";
import medjoolKhejur2 from "@/assets/products/mango-1.jpg";
import medjoolKhejur3 from "@/assets/products/mango-3.jpg";
import medjoolKhejur4 from "@/assets/products/download (3).jpg";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Stars } from "@/utils/Stars";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { HiOutlineRefresh } from "react-icons/hi";
import Container from "@/components/shared/Container";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Medjool Khejur Dates Premium Size Price in Dhaka Uttara",
    price: 699.99,
    oldPrice: 949.99,
    availableProducts: 20,
    image: medjoolKhejur,
    rating: 3,
    slug: "medjool-khejur-dates-premium-size-price-in-dhaka-uttara",
    progress: 50,
  },
  {
    id: 2,
    name: "Sunt nulla est ex tempor",
    slug: "sunt nulla est ex tempor",
    price: 499.99,
    oldPrice: 799.99,
    availableProducts: 10,
    image: medjoolKhejur2,
    rating: 4,
    progress: 30,
  },
  {
    id: 3,
    name: "Labore dolore incididunt est nisi",
    slug: "labore-dolore-incididunt-est-nisi",
    price: 299.99,
    oldPrice: 499.99,
    availableProducts: 15,
    image: medjoolKhejur3,
    rating: 5,
    progress: 70,
  },
  {
    id: 4,
    name: "Dolore irure tempor incididunt",
    slug: "dolore-irure-tempor-incididunt",
    price: 399.99,
    oldPrice: 599.99,
    availableProducts: 25,
    image: medjoolKhejur4,
    rating: 2,
    progress: 90,
  },
];

const 
NewProducts = () => {
  return (
    <Container>
      <div className="mt-10 lg:mt-24">
        <div className="text-2xl font-bold">New products</div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className=" border rounded md:w-[300px] w-full lg:h-full h-[400px] bg-white relative group overflow-hidden"
            style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px" }}
          >
            <div className="px-[30px] mt-2 w-full">
              <div className="progress-title flex justify-between">
                <p className="text-xs text-black font-[500] leading-6">
                  Products Available
                </p>
                <span className="text-sm text-black font-[600] leading-6">
                  {product.availableProducts}
                </span>
              </div>
              <div className="progress w-full h-[5px] rounded-[22px] bg-gray-200 relative overflow-hidden">
                <div
                  className="h-full absolute left-0 top-0 bg-[#dd2831]"
                  style={{ width: `${product.progress}%` }}
                ></div>
              </div>
            </div>
            <Link
              href={`./products/${product.slug}`}
              className="w-full  relative cursor-pointer"
            >
              <Image
                src={product.image}
                className="h-[250px] w-full px-1"
                alt={product.name}
              />
            </Link>
            <div className="px-[15px] pb-[30px] relative">
              <div className="absolute w-full h-10 px-[15px] left-0 top-44 group-hover:top-[85px] transition-all duration-300 ease-in-out">
                <button className="bg-blue-500 text-white w-full py-2 font-semibold rounded-sm">
                  <div className="flex items-center justify-center space-x-3">
                    <CiShoppingCart className="size-6" />
                    <span>Add To Cart</span>
                  </div>
                </button>
              </div>
              <div className="mb-3">
                <Stars
                  count={5}
                  value={product.rating}
                  position="horizontal"
                  activeColor="text-orange-600 w-4"
                  color="text-gray-200 w-4"
                ></Stars>
              </div>

              <p className="font-medium mb-2 text-[16px] font-600 text-black leading-[24px] line-clamp-2 hover:text-blue-600">
                {product.name}
              </p>

              <p>
                <span className="text-[#dd2831] font-bold text-[18px]">
                  ${product.price.toFixed(2)}
                </span>
                <span className="main-price text-[#848484] line-through text-[18px] ml-2 font-semibold">
                  ${product.oldPrice.toFixed(2)}
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out">
              <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
                <HiOutlineViewfinderCircle className="size-6" />
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
                <CiHeart className="size-6" />
              </span>
              <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
                <HiOutlineRefresh className="size-6" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewProducts;
