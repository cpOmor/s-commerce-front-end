"use client";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Container from "./Container";
import { LuUsers } from "react-icons/lu";
import { FiChevronsDown } from "react-icons/fi";
import {
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import categoryData from "./NavbarBottom/categoryData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" bg-white border border-b ">
      <Container>
        <div className="lg:flex justify-between items-center h-[12vh] hidden ">
          <div className="text-[18px]  font-semibold">Anik mart</div>
          <div>
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-white h-12 px-5 pr-10 rounded-full border-[1.5px] text-[18px] w-[400px] focus:outline-none"
              />
              <button type="submit" className="absolute right-4 top-3">
                <CiSearch className="size-6" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <CiHeart className="size-10 hover:text-[#0169C8] duration-300" />
              <span className="absolute top-[-3px] left-6 size-5 bg-[#0169C8] rounded-full  flex justify-center items-center">
                <p className="text-[14px] font-semibold text-white">0</p>
              </span>
            </div>

            <Link href="/cart" className="relative cursor-pointer">
              <CiShoppingCart className="size-10 hover:text-[#0169C8] duration-300" />
              <span className="absolute top-[-3px] left-6 size-5 bg-[#0169C8] rounded-full  flex justify-center items-center">
                <p className="text-[14px] font-semibold text-white">0</p>
              </span>
            </Link>

            <Link href="/login">
              <LuUsers className="size-7 cursor-pointer hover:text-[#0169C8]" />
            </Link>
          </div>
        </div>

        {/* mobile  */}

        <div className="text-red-500 my-4 flex items-center lg:hidden">
          <button
            onClick={toggleDropdown}
            className="!z-[999] w-10 h-full flex justify-between items-center"
          >
            <div className=" space-x-3 items-center">
              <span>
                <FiChevronsDown />
              </span>
            </div>
          </button>

          <>
            <div
              className={`w-[270px] h-[93vh] !z-[999] shadow-sm absolute left-0 top-[53px] overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul
                className={`transition-transform duration-500 ease-in-out ${
                  isOpen
                    ? "transform translate-y-0"
                    : "transform -translate-y-full"
                }`}
              >
                {categoryData.map((category, index) => (
                  <li
                    key={category.name}
                    style={{
                      transitionDelay: `${
                        isOpen
                          ? index * 0.001
                          : (categoryData.length - index - 1) * 0.001
                      }s`,
                    }}
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={category.link}
                      className="flex justify-between items-center px-5 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:bg-orange-500"
                    >
                      <div className="flex items-center space-x-6">
                        <span>{category.icon}</span>
                        <span className="text-xs font-400">
                          {category.name}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>

          <div className="relative text-gray-600 w-full">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white h-12 px-5 block rounded-full border-[1.5px] text-[18px] w-full focus:outline-none"
            />
            <button type="submit" className="absolute right-4 top-3">
              <CiSearch className="size-6" />
            </button>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 !z-[999999]">
          <div className="flex justify-around items-center py-2">
            <Link
              href="./"
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive("home")}
            >
              <FaHome
                className={`h-6 w-6 ${
                  active === "home" ? "text-orange-500" : "text-brown-700"
                }`}
              />
              <span
                className={`text-xs ${
                  active === "home" ? "text-orange-500" : "text-brown-700"
                }`}
              >
                Shop
              </span>
            </Link>

            <Link
              href="./"
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive("explore")}
            >
              <FaSearch
                className={`h-6 w-6 ${
                  active === "explore" ? "text-orange-500" : "text-brown-700"
                }`}
              />
              <span
                className={`text-xs ${
                  active === "explore" ? "text-orange-500" : "text-brown-700"
                }`}
              >
                Explore
              </span>
            </Link>
            <Link
              href="./cart"
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive("cart")}
            >
              <FaShoppingCart
                className={`h-6 w-6 ${
                  active === "cart" ? "text-orange-500" : "text-brown-700"
                }`}
              />
              <span
                className={`text-xs ${
                  active === "cart" ? "text-orange-500" : "text-brown-700"
                }`}
              >
                Cart
              </span>
            </Link>
            <Link
              href="./cart"
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive("favorite")}
            >
              <FaHeart
                className={`h-6 w-6 ${
                  active === "favorite" ? "text-orange-500" : "text-brown-700"
                }`}
              />
              <span
                className={`text-xs ${
                  active === "favorite" ? "text-orange-500" : "text-brown-700"
                }`}
              >
                Favorite
              </span>
            </Link>
            <Link
              href="./cart"
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActive("account")}
            >
              <FaUser
                className={`h-6 w-6 ${
                  active === "account" ? "text-orange-500" : "text-brown-700"
                }`}
              />
              <span
                className={`text-xs ${
                  active === "account" ? "text-orange-500" : "text-brown-700"
                }`}
              >
                Account
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
