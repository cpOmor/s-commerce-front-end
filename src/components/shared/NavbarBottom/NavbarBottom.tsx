"use client";
import { FaAlignLeft, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import { navigationData } from "./navigationData";
import categoryData from "./categoryData";


const NavbarBottom = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#ffbb38]  hidden lg:block">
      <Container>
        <div className={`flex justify-between gap-4 items-center relative`}>
          <div className="flex gap-4 items-center ">
            <div className="w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
              <button
                onClick={toggleDropdown}
                className="!z-[999] w-full h-full flex justify-between items-center"
              >
                <div className="flex space-x-3 items-center">
                  <span>
                    <FaAlignLeft />
                  </span>
                  <span className="text-sm font-semibold">All Categories</span>
                </div>
                <div>
                  <FaAngleDown />
                </div>
              </button>

              {/* <Categoric
                isOpen={isOpen}
                
                setIsOpen={false}
              /> */}

              <div
                className={`w-[270px] !z-[999] shadow-sm absolute left-0 top-[53px] overflow-hidden transition-all duration-500 ease-in-out ${
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
            </div>
            <div>
              <ul className=" flex xl:space-x-10 space-x-5 ">
                {navigationData.map((navItem, index: any) => (
                  <li
                    key={index}
                    className={`w-full ${navItem.subMenu && "relative"}`}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <div className=" flex h-[59px] items-center text-sm font-semibold cursor-pointer">
                      {(navItem.subMenu || navItem.megaMenu) && (
                        <>
                          {navItem.title}
                          <span className="hover:ml-1.5px ">
                            <FaAngleDown className="size-5 " />
                          </span>
                        </>
                      )}
                      {!(navItem.subMenu || navItem.megaMenu) && (
                        <Link href={navItem.link}>{navItem.title}</Link>
                      )}
                    </div>

                    {/* submenu */}
                    {navItem.subMenu && hoverIndex === index && (
                      <div className="w-[220px] absolute left-0 top-[60px] !z-[99999999]">
                        <div
                          className="w-full bg-white flex justify-between items-center "
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
                          }}
                        >
                          <div className="w-full h-full p-5">
                            <ul className="flex flex-col space-y-2">
                              {navItem.subMenu.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subItem.link}
                                    className=" text-sm font-normal border-b border-transparent"
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* mega menu  */}
                    {navItem.megaMenu && hoverIndex === index && (
                      <div className="absolute h-[300px] left-0 top-[60px] right-0 !z-[99999999]">
                        <div
                          className="w-full bg-white flex justify-between items-center "
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.14) 0px 15px 50px 0px",
                          }}
                        >
                          <div className="w-full h-full p-5">
                            <div className="flex ">
                              {navItem.megaMenu.map((item, i) => (
                                <>
                                  {item.title && (
                                    <div
                                      key={i}
                                      className=" flex-1 flex justify-around "
                                    >
                                      <div>
                                        <h1 className="text-[13px] font-bold uppercase mb-[13px]">
                                          {item.title}
                                        </h1>
                                        {item.title &&
                                          item.items.map((menu, ii) => (
                                            <ul
                                              key={ii}
                                              className="flex flex-col "
                                            >
                                              <li key={ii} className="">
                                                <Link
                                                  href={menu.link}
                                                  className="hover:underline hover:text-orange-500 text-sm font-medium"
                                                >
                                                  {menu.name}
                                                </Link>
                                              </li>
                                            </ul>
                                          ))}
                                      </div>
                                    </div>
                                  )}

                                  {item.image && (
                                    <>
                                      <div className="w-[348px] h-full">
                                        <div className="w-full h-[235px]">
                                          <Link href={item.link}>
                                            <Image
                                              src={item.image}
                                              alt="Thumbnail"
                                              className="w-full h-full object-contain"
                                              width={400}
                                              height={400}
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="text-white w-[161px] h-[40px] flex justify-center items-center cursor-pointer bg-black">
              <div className="flex space-x-2 items-center">
                <span className="text-sm font-semibold ">Become a Seller</span>
                <span>
                  <FaAngleRight className="size-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default NavbarBottom;
