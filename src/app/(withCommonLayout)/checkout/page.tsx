"use client";

import Link from "next/link";
import Image from "next/image";
import cartIcon from "@/assets/icon/cart.png";
import { useState } from "react";
import Container from "@/components/shared/Container";
import { FieldValues, useForm } from "react-hook-form";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { regionsData } from "../../../../regionsData";

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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const subTotal: { price: number; quantity: number }[] = [];
  const calculateTotal = () => {
    const sum = subTotal.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return sum;
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  const countryOptions = [
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "India", label: "India" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
  ];

  const phoneCodeOptions = [
    { value1: "+880", label1: "+880 (Bangladesh)" },
    { value1: "+91", label1: "+91 (India)" },
    { value1: "+92", label1: "+92 (Pakistan)" },
    { value1: "+1", label1: "+1 (United States)" },
    { value1: "+44", label1: "+44 (United Kingdom)" },
    { value1: "+61", label1: "+61 (Australia)" },
  ];

  interface Period {
    multiplier: any;
    // other properties...
  }

  const [phoneNumber, setPhoneNumber] = useState(phoneCodeOptions[0]);
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  const [subscriptionId, setSubscriptionId] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState<Period | null>(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedCity("");
    setSelectedArea("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedArea("");
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  const availableCities =
    regionsData[0]?.cities.find((city) => city.name === selectedRegion)
      ?.districts || [];
  const availableAreas =
    availableCities.find((district) => district.name === selectedCity)
      ?.subAreas || [];

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
            <div className="grid md:grid-cols-2 mt-10 gap-10">
              {/* <div className=" col-span-2 pr-0 md:pr-8">
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
              </div> */}

              <div className="bg-[#f4f4f4] shadow rounded-md md:p-6 p-4 w-full border">
                <form className="space-y-4">
                  <div>
                    <label>Region</label>
                    <select
                      value={selectedRegion}
                      onChange={handleRegionChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select Region</option>
                      {regionsData[0].cities.map((region) => (
                        <option key={region.name} value={region.name}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>City</label>
                    <select
                      value={selectedCity}
                      onChange={handleCityChange}
                      disabled={!selectedRegion}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select City</option>
                      {availableCities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>Area</label>
                    <select
                      value={selectedArea}
                      onChange={handleAreaChange}
                      disabled={!selectedCity}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select Area</option>
                      {availableAreas.map((area) => (
                        <option key={area.name} value={area.name}>
                          {area.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
                {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <h2 className="text-[24px] font-Poppins font-semibold">
                    Billing address
                  </h2>

                  <div className="md:flex md:space-x-4">
                    <div className="md:w-1/2 w-full">
                      <label className="block md:md:text-[16px] text-[14px] font-normal font-Poppins">
                        Name (optional)
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        className="w-full p-2 border border-secondaryColor rounded outline-0 md:text-[16px] text-[14px] font-normal font-Poppins"
                      />
                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                      <label className="block md:text-[16px] text-[14px] font-normal font-Poppins">
                        Region
                      </label>
                      <input
                        type="text"
                        {...register("companyName")}
                        className="w-full p-2 border border-secondaryColor rounded outline-0 md:text-[16px] text-[14px] font-normal font-Poppins"
                      />
                    </div>
                  </div>

                  <div className="md:flex md:space-x-4">
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                      <label className="block md:text-[16px] text-[14px] font-normal font-Poppins">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        {...register("phoneNumber")}
                        className="w-full p-2 border border-secondaryColor rounded outline-0 md:text-[16px] text-[14px] font-normal font-Poppins"
                      />
                       {errors.phoneNumber && (
                        <p className="text-primaryColor md:text-[18px] text-[14px] font-Noto-Sans-Bengali font-normal">
                          {errors.phoneNumber.message}
                        </p>
                      )} 
                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                      <label className="block md:text-[16px] text-[14px] font-normal font-Poppins">
                        City
                      </label>
                      <input
                        type="text"
                        {...register("phoneNumber")}
                        className="w-full p-2 border border-secondaryColor rounded outline-0 md:text-[16px] text-[14px] font-normal font-Poppins"
                      />
                      {errors.phoneNumber && (
                        <p className="text-primaryColor md:text-[18px] text-[14px] font-Noto-Sans-Bengali font-normal">
                          {errors.phoneNumber.message}
                        </p>
                      )} 
                    </div>
                  </div>
                  <div className="md:flex md:space-x-4">
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                      <label className="block md:text-[16px] text-[14px] font-normal font-Poppins">
                        Building / House No / Floor / Street
                      </label>
                      <input
                        type="text"
                        {...register("phoneNumber")}
                        className="w-full p-2 border border-secondaryColor rounded outline-0 md:text-[16px] text-[14px] font-normal font-Poppins"
                      />
                       {errors.phoneNumber && (
                        <p className="text-primaryColor md:text-[18px] text-[14px] font-Noto-Sans-Bengali font-normal">
                          {errors.phoneNumber.message}
                        </p>
                      )} 
                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                      <label className="block md:text-[16px] text-[14px] font-normal font-Poppins">
                        Area
                      </label>
                      <input
                        type="text"
                        {...register("phoneNumber")}
                        className="w-full p-2 border border-secondaryColor rounded outline-0 md:text-[16px] text-[14px] font-normal font-Poppins"
                      />
                      {errors.phoneNumber && (
                        <p className="text-primaryColor md:text-[18px] text-[14px] font-Noto-Sans-Bengali font-normal">
                          {errors.phoneNumber.message}
                        </p>
                      )} 
                    </div>
                  </div>

                 
                  <div className="md:flex md:space-x-4">
                    <div className="md:w-1/2 w-full">
                      <label className="block md:text-[16px] text-[14px] font-normal font-Poppins">
                        Locality / Landmark
                      </label>
                      <input
                        type="text"
                        // {...register("region")}
                        className="w-full p-2 border border-secondaryColor rounded outline-0 md:text-[16px] text-[14px] font-normal font-Poppins"
                      />
                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                      <label className="block md:text-[16px] text-[14px] font-normal font-Poppins">
                        Address
                      </label>
                      <input
                        type="text"
                        // {...register("city")}
                        className="w-full p-2 border border-secondaryColor rounded outline-0 md:text-[16px] text-[14px] font-normal font-Poppins"
                      />
                    </div>
                  </div>
                  <p className="block md:text-[16px] text-[14px] font-normal font-Poppins">
                    Select a label for effective delivery:
                  </p>

                 
                  <div>
                    <div className="flex items-center w-full justify-between gap-4">
                      <div className="w-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 hover:m-0 m-[1px] hover:p-[1px] rounded-sm">
                        <button className="bg-gradient-to-br from-purple-100 via-white to-blue-100 text-gray-800 w-full py-2 font-bold rounded-sm hover:text-blue-500 hover:bg-white shadow-md">
                          <span
                            className={`bg-gradient-to-bl from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent cursor-pointer transition-transform duration-300`}
                          >
                            HOME
                          </span>
                        </button>
                      </div>
                      <div className="w-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 hover:m-0 m-[1px] hover:p-[1px] rounded-sm">
                        <button className="bg-gradient-to-br from-purple-100 via-white to-blue-100 text-gray-800 w-full py-2 font-bold rounded-sm hover:text-blue-500 hover:bg-white shadow-md">
                          <span className="bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Office
                          </span>
                        </button>
                      </div>
                      <div className="w-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 hover:m-0 m-[1px] hover:p-[1px] rounded-sm">
                        <button className="bg-gradient-to-br from-purple-100 via-white to-blue-100 text-gray-800 w-full py-2 font-bold rounded-sm hover:text-blue-500 hover:bg-white shadow-md">
                          <span className="bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Guest
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form> */}

                <div className="mt-10">
                  {products.map((product) => (
                    <div key={product.id} className=" flex justify-between">
                      <div className="flex">
                        <p className="pr-8 border w-20">
                          <Image
                            src={product?.image}
                            alt="image"
                            width="300"
                            height="300"
                          ></Image>
                        </p>
                      </div>
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
              </div>
              <div className="border border-blue-500 rounded-md">
                <div className="lg:p-8 p-4 flex flex-col justify-between h-full w-full overflow-hidden">
                  <div>
                    <h2>YOUR ORDER</h2>
                    <div className="mt-4 flex justify-between font-semibold border-b pb-4">
                      <p className="">Product</p>
                      <p className="">Subtotal</p>
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
