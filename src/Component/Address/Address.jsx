import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaLocationDot, FaPlus } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { TbMapPinSearch, TbMapSearch } from "react-icons/tb";
import { Link } from "react-router";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBin6Line } from "react-icons/ri";

const Address = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("MD Sadiq");
  const [number, setNumber] = useState("0199726482776");
  const [hous, setHous] = useState("Pakunda");
  const [area, setArea] = useState("Sonargaon");
  const [note, setNote] = useState("Vallo note");
  const [isIndex, setIsIndex] = useState("");

  const id = uuidv4();

  const [allAddress, setAllAddress] = useState([]);

  const handleAddAddress = () => {
    const allDeliveryAddress = {
      name,
      number,
      hous,
      area,
      note,
      id,
      date: new Date().toISOString().split("T")[0],
    };

    const getOldAddress = localStorage.getItem("allDeliveryAddress");
    if (getOldAddress) {
      const parseOldAddress = JSON.parse(getOldAddress);
      const newAddress = [...parseOldAddress, allDeliveryAddress];
      localStorage.setItem("allDeliveryAddress", JSON.stringify(newAddress));

      // set state
      const address = JSON.parse(localStorage.getItem("allDeliveryAddress"));
      setAllAddress(address);
      setIsFormOpen(false);
    } else {
      localStorage.setItem(
        "allDeliveryAddress",
        JSON.stringify([allDeliveryAddress])
      );

      localStorage.setItem(
        "deliveryAddress",
        JSON.stringify(allDeliveryAddress)
      );

      // set state
      const address = JSON.parse(localStorage.getItem("allDeliveryAddress"));
      setAllAddress(address);
      setIsFormOpen(false);
    }
  };

  // Handle deleveri addre set localstoregae
  const handleDeliveryAddress = (item) => {
    const address = JSON.parse(localStorage.getItem("deliveryAddress"));
    if (address) {
      localStorage.removeItem("deliveryAddress");
      localStorage.setItem("deliveryAddress", JSON.stringify(item));
    } else {
      localStorage.setItem("deliveryAddress", JSON.stringify(item));
    }

    const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"));
    setIsIndex(deliveryAddress?.id);
  };

  // Delete Address

  const handleDeleteAddress = (id) => {
    const allAddress = JSON.parse(localStorage.getItem("allDeliveryAddress"));

    const filterAddress = allAddress?.filter((item) => item?.id !== id);

    localStorage.removeItem("allDeliveryAddress");

    localStorage.setItem("allDeliveryAddress", JSON.stringify(filterAddress));

    const updateAddress = JSON.parse(
      localStorage.getItem("allDeliveryAddress")
    );
    setAllAddress(updateAddress);
  };

  // load address
  useEffect(() => {
    const address = JSON.parse(localStorage.getItem("allDeliveryAddress"));
    const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"));
    setIsIndex(deliveryAddress?.id);
    setAllAddress(address);
  }, []);

  return (
    <div>
      <Link to={"/"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />

          <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
            আমার ঠিকানা
          </h2>
        </div>
      </Link>
      <div className="px-[15px]">
        {allAddress ? (
          <div className="flex flex-col gap-[20px] my-[20px]">
            {allAddress?.map((item, i) => (
              <div
                className={`${
                  isIndex == item?.id && "border-[2px] border-[#ff6347] "
                }  flex items-center justify-between bg-white p-[20px] rounded-[10px]`}
                onClick={() => handleDeliveryAddress(item)}
              >
                <div className="flex items-center gap-[20px]">
                  <FaLocationDot className="text-[#ff6347] text-[30px]" />
                  <div>
                    <h2 className="font-bold">{item?.name}</h2>

                    <h2 className="font-semibold">
                      {item?.hous}, {item?.area}
                    </h2>

                    <p className="text-[12px] text-gray-500 mt-[10px] mb-[5px]">
                      মোবাইল: <span>{item?.number}</span>
                    </p>
                    <p className="text-[12px] text-gray-500">
                      নোট: <span>{item?.note}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteAddress(item?.id)}
                  className="text-[25px] text-red-500"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center my-[30px] ">
            <TbMapPinSearch className="text-[120px]  text-[#a7a6a6] inline-block" />

            <h2 className="mt-[20px]">কোনো ঠিকানা এখনো যোগ করা হয়নি।</h2>
          </div>
        )}

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
                  value={name}
                  setValue={setName}
                />{" "}
                <InputField
                  title={"কন্টাক্ট নম্বর"}
                  placeholder={"আপনার মোবাইল নম্বর দিন"}
                  value={number}
                  setValue={setNumber}
                />
                <InputField
                  title={"বাসা/হোল্ডিং, রোড নং"}
                  placeholder={"বাসা নং, রোড নং এবং পাড়ার নাম লিখুন"}
                  value={hous}
                  setValue={setHous}
                />
                <InputField
                  title={"এলাকা/উপজেলা"}
                  placeholder={"এলাকা/উপজেলার নাম লিখুন"}
                  value={area}
                  setValue={setArea}
                />
                <TextareaField
                  title={"বিশেষ নোট (ঐচ্ছিক)"}
                  placeholder={
                    "ডেলিভারি সংক্রান্ত কোনো বিশেষ নির্দেশনা থাকলে এখানে লিখুন..."
                  }
                  bg={"bg-[#eff1f1]"}
                  value={note}
                  setValue={setNote}
                />
              </div>

              <button
                onClick={handleAddAddress}
                className="mt-[30px] w-full bg-[#ff6347] text-white py-[10px] rounded-[10px]"
              >
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
