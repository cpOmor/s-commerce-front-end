"use client";

import Link from "next/link";
import Image from "next/image";
import cartIcon from "@/assets/icon/cart.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Container from "@/components/shared/Container";

const CartPage = () => {
  const [shippingCost, setShippingCost] = useState(70);
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/21-400x400.jpg",
      name: "Apple iPhone 14 Pro Max (256 GB) - White Titanium",
      price: 530,
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/17-400x400.jpg",
      name: "Apple iPhone 14 Pro Max (256 GB) - White Titanium",
      price: 110,
      quantity: 4,
    },
    {
      id: 3,
      image:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/114-400x400.jpg",
      name: "Apple iPhone 14 Pro Max (256 GB) - White Titanium",
      price: 990,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (productId: number, change: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: Math.max(1, product.quantity + change),
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleDelete = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const subTotal: { price: number; quantity: number; }[] = [];
  const calculateTotal = () => {
    const sum = subTotal.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return sum;
  };

  return (
    <>
      <div className="bg-[#f4f4f4] p-4">
        <Container>
          <div className="flex gap-2">
            <Link className="hover:underline" href="./">
              Home
            </Link>
            <div>/</div>
            <p className="font-semibold">Shopping Cart</p>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-8">
          <h1>Shopping Cart</h1>
        </div>
        {products.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className=" col-span-2 md:block hidden">
                <div>
                  <table className="snap-mandatory snap-x ">
                    <thead className="snap-center">
                      <tr>
                        <th>Product</th>
                        <th></th>
                        <th className="w-[110px] text-start py-4">Price</th>
                        <th className="w-[110px] text-start">Quantity</th>
                        <th className="w-[110px] text-start">Subtotal</th>
                        <th className="w-[110px] text-start">Action</th>
                      </tr>
                    </thead>
                    <tbody className="snap-center">
                      {products.map((product) => (
                        <tr key={product.id} className="border-t">
                          <td className="py-8 pr-8">
                            <Image
                              src={product.image}
                              width={100}
                              height={10}
                              alt="Picture of the author"
                            ></Image>
                          </td>
                          <td className="pr-8 min-w-[200px]">{product.name}</td>
                          <td className="w-[110px]">
                            ${product.price.toFixed(2)}
                          </td>
                          <td className="w-[110px] ">
                            <div className="bg-gray-100 inline-block">
                              <button
                                className="hover:bg-gray-300 font-bold px-2 mr-1"
                                onClick={() =>
                                  handleQuantityChange(product.id, -1)
                                }
                                disabled={product.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="">{product.quantity}</span>
                              <button
                                className="hover:bg-gray-300  px-2 ml-1"
                                onClick={() =>
                                  handleQuantityChange(product.id, 1)
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="w-[110px]">
                            ${(product.price * product.quantity).toFixed(2)}
                            <span className="hidden">
                              {subTotal.push({
                                price: product.price,
                                quantity: product.quantity,
                              })}
                            </span>
                          </td>
                          <td className="w-[110px]">
                            <button onClick={() => handleDelete(product.id)}>
                              <p
                                className={` hover:bg-red-100 hover:text-red-500 text-gray-800  rounded-full `}
                              >
                                <FaTimes className="size-10 cursor-pointer p-2" />
                              </p>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="block md:hidden">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-md py-4 px-4 relative "
                  >
                    <div className="flex items-center ">
                      <div>
                        <Image
                          className="w-32"
                          src={product.image}
                          width={100}
                          height={100}
                          alt="Picture of the author"
                        ></Image>
                      </div>
                      <p className="pr-8 min-w-[200px]">{product.name}</p>
                    </div>

                    <div className="flex justify-between items-center mt-6 font-bold">
                      <p>Price</p>
                      <p className="">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6 font-bold">
                      <p>Quantity</p>
                      <div className="">
                        <div className="bg-gray-100 inline-block">
                          <button
                            className="hover:bg-gray-300 font-bold px-4 mr-1"
                            onClick={() => handleQuantityChange(product.id, -1)}
                            disabled={product.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-2">{product.quantity}</span>
                          <button
                            className="hover:bg-gray-300  px-4 ml-1"
                            onClick={() => handleQuantityChange(product.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6 font-bold">
                      <p>Price</p>
                      <div className="">
                        ${(product.price * product.quantity).toFixed(2)}
                        <span className="hidden">
                          {subTotal.push({
                            price: product.price,
                            quantity: product.quantity,
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <button onClick={() => handleDelete(product.id)}>
                        <p
                          className={` hover:bg-red-100 hover:text-red-500 text-gray-800  rounded-full `}
                        >
                          <FaTimes className="size-10 cursor-pointer p-2" />
                        </p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-blue-500 rounded-md w-[100%]">
                <div className="p-8 flex flex-col w-full justify-between h-full ">
                  <div>
                    <h2>CART TOTALS</h2>
                    <div className="mt-4 flex justify-between font-semibold border-b pb-4">
                      <p className="">Subtotal</p>
                      <p className="">${calculateTotal().toFixed(2)}</p>
                    </div>
                    <div className="mt-4 flex justify-between font-semibold border-b pb-4">
                      <p className="">Shipping</p>
                      <form className="text-gray-400 font-semibold w-full">
                        <div className="flex justify-between items-center">
                          <div>
                            <input
                              type="radio"
                              id="free_shipping"
                              name="shipping"
                              value="free_shipping"
                              onClick={() => setShippingCost(0)}
                            />

                            <label
                              className="pl-2 inline text-[16px]"
                              htmlFor="free_shipping"
                            >
                              Free Shipping
                            </label>
                          </div>
                          <p>0.00</p>
                        </div>

                        <div className="flex gap-6 justify-between items-center">
                          <div>
                            <input
                              type="radio"
                              id="local_pickup"
                              name="shipping"
                              value="local_pickup"
                              defaultChecked
                              onClick={() => setShippingCost(70)}
                            />
                            <label
                              className="pl-2 inline text-[16px] font-sans"
                              htmlFor="local_pickup"
                            >
                              Local Pickup
                            </label>
                          </div>
                          <span>$70.00</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <input
                              type="radio"
                              id="flat_rate"
                              name="shipping"
                              value="flat_rate"
                              onClick={() => setShippingCost(110)}
                            />
                            <label
                              className="pl-2 inline text-[16px]  font-sans"
                              htmlFor="flat_rate"
                            >
                              Flat Rate
                            </label>
                          </div>
                          <span>$110.00</span>
                        </div>

                        <button
                          className="pl-2 inline text-[16px] font-sans text-end"
                          type="button"
                        >
                          Change address
                        </button>
                      </form>
                    </div>
                  </div>
                  <div>
                    <div className="mt-4 flex justify-between font-semibold border-b pb-4">
                      <p className="">Total</p>
                      <p className="">
                        ${(calculateTotal() + shippingCost).toFixed(2)}
                      </p>
                    </div>

                    <Link href="/checkout">
                      <button className="bg-blue-500 text-white w-full py-2 font-bold rounded-sm hover:text-blue-500 outline outline-blue-500 hover:bg-white outline-1">
                        Proceed to checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="h-[60vh] flex flex-col justify-center items-center">
            <Image src={cartIcon} width={100} height={100} alt=""></Image>
            <p className="mt-8">Your cart is currently empty.</p>

            <Link
              href="./"
              className="w-[200px] cursor-pointer bg-blue-500 text-white mt-4 flex justify-center py-2 font-bold rounded-sm hover:text-blue-500 outline outline-blue-500 hover:bg-white outline-1"
            >
              RETURN TO SHOP
            </Link>
          </div>
        )}
      </Container>
    </>
  );
};

export default CartPage;
