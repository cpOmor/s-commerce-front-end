"use client";

import Link from "next/link";
import Image from "next/image";
import cartIcon from "@/assets/icon/cart.png";
import { useState } from "react";
import Container from "@/components/shared/Container";

const CheckoutPage = () => {
  const [shippingCost, setShippingCost] = useState(110);
  const products = [
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
  ];

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
            <p className="font-semibold"> Checkout</p>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-8">
          <h1>Checkout</h1>
        </div>
        {products.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 mt-10 ">
              <div className=" col-span-2 pr-0 md:pr-8">
                <div>
                  <h2>BILLING DETAILS</h2>
                </div>

                <form action="" method="post">
                  <div className="md:flex gap-4">
                    <div className="mt-4 flex flex-col w-full">
                      <label htmlFor="f_name">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="border rounded-sm border-1 outline-none p-2 pl-6 mt-2 w-full"
                        type="text"
                        id="f_name"
                      />
                    </div>
                    <div className="mt-4 flex flex-col w-full">
                      <label htmlFor="l_name">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="border rounded-sm border-1 outline-none p-2 pl-6 mt-2"
                        type="text"
                        id="l_name"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <div className="mt-4 flex flex-col w-full">
                      <label htmlFor="c_name">Company name (optional)</label>
                      <input
                        className="border rounded-sm border-1 outline-none p-2 pl-6 mt-2"
                        type="text"
                        id="c_name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-8">
                    <label htmlFor="country">
                      Country / Region <span className="text-red-500">*</span>{" "}
                    </label>
                    <input
                      className="border rounded-sm border-1 outline-none p-2 pl-6 "
                      type="text"
                      id="country"
                    />
                  </div>
                  <div className="flex flex-col gap-4 mt-2">
                    <input
                      className="border rounded-sm border-1 outline-none p-2 pl-6 "
                      type="text"
                      id="country"
                    />
                  </div>

                  <div className="flex flex-col gap-4 mt-8">
                    <label htmlFor="district ">
                      District <span className="text-red-500">*</span>{" "}
                    </label>
                    <input
                      className="border rounded-sm border-1 outline-none p-2 pl-6 "
                      type="text"
                      id="district"
                    />
                  </div>
                  <div className="flex flex-col gap-4 mt-8">
                    <label htmlFor="ZIP ">Postcode / ZIP (optional)</label>
                    <input
                      className="border rounded-sm border-1 outline-none p-2 pl-6 "
                      type="text"
                      id="ZIP"
                    />
                  </div>

                  <div className="flex flex-col gap-4 mt-8">
                    
                    <label htmlFor="phone">
                    Phone <span className="text-red-500">*</span>{" "}
                    </label>
                    <input
                      className="border rounded-sm border-1 outline-none p-2 pl-6 "
                      type="text"
                      id="phone"
                    />
                  </div>
                  <div className="flex flex-col gap-4 mt-8 mb-6">
                    <label htmlFor="email">
                    Email address <span className="text-red-500">*</span>{" "}
                    </label>
                    <input
                      className="border rounded-sm border-1 outline-none p-2 pl-6 "
                      type="email"
                      id="email"
                    />
                  </div>
                </form>
              </div>
              <div className="border border-blue-500 rounded-md">
                <div className="lg:p-8 p-4 flex flex-col justify-between h-full w-full overflow-hidden">
                  <div>
                    <h2>YOUR ORDER</h2>
                    <div className="mt-4 flex justify-between font-semibold border-b pb-4">
                      <p className="">Product</p>
                      <p className="">Subtotal</p>
                    </div>

                    <div className="mt-4">
                      {products.map((product) => (
                        <div key={product.id} className=" flex justify-between">
                          <div className="flex">
                            <p className="pr-8 border w-44">
                              {product.name} x <span>{product.quantity}</span>
                            </p>
                          </div>

                          <p className="lg:w-[110px] font-semibold">
                            ${(product.price * product.quantity).toFixed(2)}
                            <span className="hidden">
                              {subTotal.push({
                                price: product.price,
                                quantity: product.quantity,
                              })}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-between font-semibold border-b pb-4">
                      <p className="">Subtotal</p>
                      <p className="">${calculateTotal().toFixed(2)}</p>
                    </div>
                    <div className="mt-4 flex justify-between font-semibold border-b pb-4">
                      <p className="">Shipping</p>
                      <p className="">$110.00</p>
                    </div>
                  </div>
                  <div>
                    <div className="mt-4 flex justify-between font-semibold border-b pb-4">
                      <p className="">Total</p>
                      <p className="">
                        ${(calculateTotal() + shippingCost).toFixed(2)}
                      </p>
                    </div>

                    <form className="text-gray-400 flex gap-3 flex-col font-semibold mt-6">
                      <div>
                        <input
                          type="radio"
                          id="check_payments"
                          name="payments"
                          value="check_payments"
                        />

                        <label
                          className="pl-2 inline text-[16px]"
                          htmlFor="check_payments"
                        >
                          Check payments
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="cash_on_delivery"
                          name="payments"
                          value="cash_on_delivery"
                          defaultChecked
                        />
                        <label
                          className="pl-2 inline text-[16px] font-sans"
                          htmlFor="cash_on_delivery"
                        >
                          Cash on delivery
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="flat_rate"
                          name="payments"
                          value="flat_rate"
                        />
                        <label
                          className="pl-2 inline text-[16px]  font-sans"
                          htmlFor="flat_rate"
                        >
                          PayPal
                        </label>
                      </div>
                    </form>

                    <div className="mt-6 ">
                      <label className="flex gap-2">
                        <input className="checkbox" name="terms" id="terms" />
                        <span className="woocommerce-terms-and-conditions-checkbox-text">
                          I agree with the{" "}
                          <a href="#" className="font-bold" target="_blank">
                            terms and conditions
                          </a>
                        </span>
                        <abbr className="text-red-500">*</abbr>
                      </label>
                    </div>

                    <button className="mt-6 bg-blue-500 text-white w-full py-2 font-bold rounded-sm hover:text-blue-500 outline outline-blue-500 hover:bg-white outline-1">
                      PLACE ORDER
                    </button>
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

export default CheckoutPage;
