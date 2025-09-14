import React, { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { TbMapPinSearch, TbMapSearch } from "react-icons/tb";
import { Link } from "react-router";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";

const Address = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div>
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px]" />
          <h2 className="bg-white font-bold text-[20px]">আমার ঠিকানা</h2>
        </div>
      </Link>
      <div className="px-[15px]">
        <div className="text-center my-[30px] ">
          <TbMapPinSearch className="text-[120px]  text-[#a7a6a6] inline-block" />

          <h2 className="mt-[20px]">কোনো ঠিকানা এখনো যোগ করা হয়নি।</h2>
        </div>

        <button
          onClick={() => setIsFormOpen(true)}
          className=" rounded-[10px] bg-white  p-[15px] w-full flex items-center justify-center gap-[10px] border-[2px] border-[#ff6347] border-dashed text-[#ff6347]  "
        >
          <FaPlus />
          নতুন ঠিকানা যোগ করুন
        </button>
      </div>

      {/* New address Form modal  */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-start justify-center overflow-y-scroll h-screen w-full">
          <div className="mt-[40px] mx-[15px] p-[20px] rounded-[10px] bg-white w-full">
            <div className="flex items-end justify-end mb-[20px]">
              <IoMdCloseCircle
                onClick={() => setIsFormOpen(false)}
                className="text-red-500 text-[30px] cursor-pointer"
              />
            </div>

            {/* form */}
            <div className="w-full">
              <h2 className="text-center text-[20px] font-bold mb-[20px]">
                নতুন ঠিকানা যোগ করুন
              </h2>

              <div className="flex flex-col gap-[20px]">
                <InputField
                  title={"আপনার নাম"}
                  placeholder={"এখানে আপনার নাম লিখুন"}
                />{" "}
                <InputField
                  title={"কন্টাক্ট নম্বর"}
                  placeholder={"আপনার মোবাইল নম্বর দিন"}
                />
                <InputField
                  title={"বাসা/হোল্ডিং, রোড নং"}
                  placeholder={"বাসা নং, রোড নং এবং পাড়ার নাম লিখুন"}
                />
                <InputField
                  title={"এলাকা/উপজেলা"}
                  placeholder={"এলাকা/উপজেলার নাম লিখুন"}
                />
                <TextareaField
                  title={"বিশেষ নোট (ঐচ্ছিক)"}
                  placeholder={
                    "ডেলিভারি সংক্রান্ত কোনো বিশেষ নির্দেশনা থাকলে এখানে লিখুন..."
                  }
                  bg={"bg-[#eff1f1]"}
                />
              </div>

              <button className="mt-[30px] w-full bg-[#ff6347] text-white py-[10px] rounded-[10px]">
                ঠিকানা সেভ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
