import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaMoneyBillWave } from "react-icons/fa";
import Card from "./Card";
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { Link } from "react-router";

const CheckOut = () => {
  const [selected, setSelected] = useState("cod");
  const [address, setAddress] = useState({});

  const options = [
    {
      id: "cod",
      label: "Cash on delivery",
      description: "Pay with cash upon delivery.",
      icon: <FaMoneyBillWave className="text-green-600 text-xl" />,
    },
    {
      id: "bkash",
      label: "bKash",
      img: "https://download.logo.wine/logo/BKash/BKash-Logo.wine.png",
    },
    {
      id: "nagad",
      label: "Nagad",
      img: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png",
    },
    {
      id: "rocket",
      label: "Rocket",
      img: "https://i.postimg.cc/NFZtSzJj/Rocket-Payment-Integration-removebg-preview.png",
    },
  ];

  // set Addres
  useEffect(() => {
    const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"));
    setAddress(deliveryAddress);
  }, []);

  return (
    <div className="">
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px]" />
          <h2 className="bg-white font-bold text-[20px]">আমার কার্ট</h2>
        </div>
      </Link>
      {/*  */}
      <div className="px-[15px]">
        <div className=" mt-[20px]">
          <Card />
        </div>

        {/* Address */}

        {address ? (
          <div className="flex items-center gap-[10px] mt-[20px]">
            <div
              className={`flex items-center justify-between bg-white p-[20px] rounded-[10px]  border border-[#ff6347] w-[80%]`}
            >
              <div className="flex items-center gap-[20px]">
                <FaLocationDot className="text-[#ff6347] text-[30px]" />
                <div>
                  <h2 className="font-bold text-[18px]">{address?.name}</h2>

                  <h2 className="font-semibold text-gray-500">
                    {address?.hous}, {address?.area}
                  </h2>
                </div>
              </div>
            </div>

            <Link
              to={"/address"}
              className=" bg-[#ff6347]  flex items-center flex-col h-full text-white py-[10px] rounded-[10px] w-[20%]"
            >
              <FaPlus />
              <p className="text-[10px] mt-[10px]">নতুন ঠিকানা</p>
            </Link>
          </div>
        ) : (
          <Link to={"/address"}>
            {" "}
            <div className="flex items-center gap-[10px] rounded-[15px] bg-[#ffffff80]  mt-[20px] p-[20px] border-[1px] border-dashed border-[#ff6347]">
              <FaLocationDot className="text-[20px] text-[#ff6347] bg-[#ffffff80]" />
              <p className="bg-[#ffffff80] text-gray-400">
                ডেলিভারি ঠিকানা যোগ করুন
              </p>
            </div>
          </Link>
        )}

        <div className="bg-[#ffffff80]  rounded-[15px] mt-[20px] p-[20px]">
          <h2 className="font-bold mb-[10px] bg-[#ffffff80]">বিল বিবরণী</h2>
          <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
            <p className="text-[14px]  bg-[#ffffff80]">সাব-টোটাল</p>
            <p className="bg-[#ffffff80]">
              <span className="font-extrabold bg-[#ffffff80]">৳</span> 200
            </p>
          </div>
          <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
            <p className="text-[14px] ">ডেলিভারি চার্জ</p>
            <p className="bg-[#ffffff80]">
              <span className="font-extrabold bg-[#ffffff80]">৳</span> 200
            </p>
          </div>
          <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
            <p className="bg-[#ffffff80] text-[14px] ">ডিসকাউন্ট</p>
            <p className="bg-[#ffffff80]">
              <span className="font-extrabold bg-[#ffffff80]">৳</span> 200
            </p>
          </div>

          <div className=" border-t-2 border-t-gray-200 bg-[#ffffff80] flex items-center justify-between">
            <p className="pt-[8px] bg-[#ffffff80] text-[14px] font-semibold">
              সর্বমোট
            </p>
            <p className="font-bold pt-[8px] bg-[#ffffff80]">
              <span className="font-extrabold bg-[#ffffff80]">৳</span> 200
            </p>
          </div>
        </div>

        {/*  */}
        <div className="w-full max-w-md bg-white rounded-lg shadow p-[20px] mt-[20px] ">
          {options.map((option) => (
            <div key={option.id} className="space-y-2 ">
              <label
                className={`flex items-center gap-3 py-[20px]  rounded-lg cursor-pointer transition ${
                  selected === option.id
                    ? "border-[#ff6347]"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={option.id}
                  checked={selected === option.id}
                  onChange={() => setSelected(option.id)}
                  className="w-4 h-4 accent-[#f9583b]"
                />

                {option.img ? (
                  <img
                    src={option.img}
                    alt={option.label}
                    className="w-[50px] h-8"
                  />
                ) : (
                  option.icon
                )}

                <span className="font-medium">{option.label}</span>
              </label>

              {/* Extra bubble for Cash on Delivery */}
              {option.id === "cod" && selected === "cod" ? (
                <div className=" relative bg-[#f3f3f3] border border-gray-200 rounded-md mx-[20px] p-[20px] text-gray-600 text-sm ">
                  <div className="absolute -top-2 left-[20px] w-[30px] h-[30px] bg-[#f3f3f3]  border-gray-200 rotate-45"></div>
                  <h2 className="relative z-[20]">
                    ডেলিভারির সময় নগদ অর্থ প্রদান করুন।
                  </h2>
                </div>
              ) : option.id === "bkash" && selected === "bkash" ? (
                <div className=" relative bg-[#f3f3f3] border border-gray-200 rounded-md mx-[20px] p-[20px] text-gray-600 text-sm ">
                  <div className="absolute -top-2 left-[20px] w-[30px] h-[30px] bg-[#f3f3f3]  border-gray-200 rotate-45"></div>
                  <h2 className="text-center font-bold mb-[15px] relative z-10">
                    আপনাকে 230 টাকা পাঠাতে হবে ।
                  </h2>
                  <h2 className="text-[12px] text-center mb-[10px]">
                    bKash দিয়ে পেমেন্ট করুন। টাকা পাঠানোর পর নিচে আপনার নাম্বার
                    আর ট্রানজেকশন আইডি লিখুন।
                  </h2>
                  <div className="my-[20px]">
                    <p className="font-semibold text-[14px] mb-[10px]">
                      অ্যাকাউন্ট ধরণ:{" "}
                      <span className="font-normal">পার্সোনাল</span>
                    </p>
                    <p className="font-semibold text-[14px]">
                      অ্যাকাউন্ট নম্বর:{" "}
                      <span className="font-normal">01996359111</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <div>
                      <p className="text-[14px] mb-[10px]">
                        আপনার bKash নাম্বার{" "}
                        <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        className="bg-white outline-none  p-[10px] w-full rounded-[8px] border shadow-sm"
                        placeholder="01XXXXXXXXX"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] mb-[10px]">
                        ট্রানজেকশন আইডি <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        className="bg-white outline-none  p-[10px] w-full rounded-[8px] border shadow-sm"
                        placeholder="ট্রানজেকশন আইডি"
                      />
                    </div>
                  </div>
                </div>
              ) : option.id === "nagad" && selected === "nagad" ? (
                <div className=" relative bg-[#f3f3f3] border border-gray-200 rounded-md mx-[20px] p-[20px] text-gray-600 text-sm ">
                  <div className="absolute -top-2 left-[20px] w-[30px] h-[30px] bg-[#f3f3f3]  border-gray-200 rotate-45"></div>
                  <h2 className="text-center font-bold mb-[15px] relative z-10">
                    আপনাকে 230 টাকা পাঠাতে হবে ।
                  </h2>
                  <h2 className="text-[12px] text-center mb-[10px]">
                    Nagad দিয়ে পেমেন্ট করুন। টাকা পাঠানোর পর নিচে আপনার নাম্বার
                    আর ট্রানজেকশন আইডি লিখুন।
                  </h2>
                  <div className="my-[20px]">
                    <p className="font-semibold text-[14px] mb-[10px]">
                      অ্যাকাউন্ট ধরণ:{" "}
                      <span className="font-normal">পার্সোনাল</span>
                    </p>
                    <p className="font-semibold text-[14px]">
                      অ্যাকাউন্ট নম্বর:{" "}
                      <span className="font-normal">01996359111</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <div>
                      <p className="text-[14px] mb-[10px]">
                        আপনার Nagad নাম্বার{" "}
                        <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        className="bg-white outline-none  p-[10px] w-full rounded-[8px] border shadow-sm"
                        placeholder="01XXXXXXXXX"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] mb-[10px]">
                        ট্রানজেকশন আইডি <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        className="bg-white outline-none  p-[10px] w-full rounded-[8px] border shadow-sm"
                        placeholder="ট্রানজেকশন আইডি"
                      />
                    </div>
                  </div>
                </div>
              ) : option.id === "rocket" && selected === "rocket" ? (
                <div className=" relative bg-[#f3f3f3] border border-gray-200 rounded-md mx-[20px] p-[20px] text-gray-600 text-sm ">
                  <div className="absolute -top-2 left-[20px] w-[30px] h-[30px] bg-[#f3f3f3]  border-gray-200 rotate-45"></div>
                  <h2 className="text-center font-bold mb-[15px] relative z-10">
                    আপনাকে 230 টাকা পাঠাতে হবে ।
                  </h2>
                  <h2 className="text-[12px] text-center mb-[10px]">
                    Rocket দিয়ে পেমেন্ট করুন। টাকা পাঠানোর পর নিচে আপনার নাম্বার
                    আর ট্রানজেকশন আইডি লিখুন।
                  </h2>
                  <div className="my-[20px]">
                    <p className="font-semibold text-[14px] mb-[10px]">
                      অ্যাকাউন্ট ধরণ:{" "}
                      <span className="font-normal">পার্সোনাল</span>
                    </p>
                    <p className="font-semibold text-[14px]">
                      অ্যাকাউন্ট নম্বর:{" "}
                      <span className="font-normal">01996359111</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <div>
                      <p className="text-[14px] mb-[10px]">
                        আপনার Rocket নাম্বার{" "}
                        <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        className="bg-white outline-none  p-[10px] w-full rounded-[8px] border shadow-sm"
                        placeholder="01XXXXXXXXX"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] mb-[10px]">
                        ট্রানজেকশন আইডি <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        className="bg-white outline-none  p-[10px] w-full rounded-[8px] border shadow-sm"
                        placeholder="ট্রানজেকশন আইডি"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        {/*  */}
        <Link to={"/success"}>
          <div className="mb-[30px]">
            <button className="main_bg_color text-white border-[1px] border-gray-300 py-[8px] px-[20px]  w-full rounded-[8px] shadow-sm  mt-[30px]">
              অর্ডার করুন
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
