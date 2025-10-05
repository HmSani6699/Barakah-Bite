import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaLocationDot, FaPlus } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { TbMapPinSearch, TbMapSearch } from "react-icons/tb";
import { Link, useLocation } from "react-router";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  getAllAddresses,
  getDeliveryAddress,
  removeAllAddresses,
  removeDeliveryAddress,
  saveAllAddresses,
  saveDeliveryAddress,
} from "../../helper/addressHelper";

const Address = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("MD Sadiq");
  const [number, setNumber] = useState("0199726482776");
  const [hous, setHous] = useState("Pakunda");
  const [area, setArea] = useState("Sonargaon");
  const [note, setNote] = useState("Vallo note");
  const [isIndex, setIsIndex] = useState("");
  const [InsiteOROutsite, setInsiteOROutsite] = useState("inside");
  const location = useLocation();
  const checkout = location.state;

  const [allAddress, setAllAddress] = useState([]);

  const [errors, setErrors] = useState({});
  const createValidateForm = () => {
    const newErrors = {};

    // Phone number regex for Bangladeshi format
    const phoneRegex = /^01[3-9]\d{8}$/;

    // Owner Name
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Owner Phone
    const trimmedOwnerPhone = number.trim();
    if (!trimmedOwnerPhone) {
      newErrors.number = "Phone is required";
    } else if (trimmedOwnerPhone.length !== 11) {
      newErrors.number = "Phone number must be exactly 11 digits";
    } else if (!phoneRegex.test(trimmedOwnerPhone)) {
      newErrors.number = "Invalid Bangladeshi phone number";
    }

    // Owner Password
    if (!area.trim()) {
      newErrors.area = "Area is required";
    }

    // Shop Name
    if (!gram.trim()) {
      newErrors.gram = "Gram name is required";
    }

    // Shop Address
    if (!elaka.trim()) {
      newErrors.elaka = "Elaka name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };

  // Load on mount
  useEffect(() => {
    const address = getAllAddresses();
    const deliveryAddress = getDeliveryAddress();
    setAllAddress(address);
    setIsIndex(deliveryAddress?.id);
  }, []);

  // Add Address
  const handleAddAddress = () => {
    if (!createValidateForm()) {
      return;
    }

    const newAddress = {
      name,
      number,
      gram,
      elaka,
      hous,
      area,
      note,
      deliveryCharge: InsiteOROutsite === "inside" ? 30 : 50,
      id: uuidv4(),
      date: new Date().toISOString().split("T")[0],
    };

    const all = getAllAddresses();
    const updated = [...all, newAddress];

    saveAllAddresses(updated);
    saveDeliveryAddress(newAddress);

    setAllAddress(updated);
    setIsFormOpen(false);
  };

  // Select delivery address
  const handleDeliveryAddress = (item) => {
    saveDeliveryAddress(item);
    setIsIndex(item.id);
  };

  // Delete address
  const handleDeleteAddress = (id) => {
    const all = getAllAddresses();
    const filtered = all.filter((item) => item.id !== id);

    if (filtered.length === 0) {
      removeAllAddresses();
      removeDeliveryAddress();
    } else {
      saveAllAddresses(filtered);

      // যদি ডিলিট হওয়া address = current হয়
      const current = getDeliveryAddress();
      if (current?.id === id) {
        removeDeliveryAddress();
      }
    }

    setAllAddress(filtered);
  };

  return (
    <div>
      <Link to={checkout ? "/checkout" : "/profile"}>
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
          <div className="my-[40px]  mx-[15px] p-[20px] rounded-[10px] bg-white  w-[700px] mt-[80px]">
            <div className="flex items-end justify-end mb-[20px]">
              <IoMdCloseCircle
                onClick={() => setIsFormOpen(false)}
                className="text-red-500 text-[30px] cursor-pointer"
              />
            </div>

            <div className="w-full">
              <h2 className="text-center text-[20px] font-bold mb-[20px]">
                নতুন ঠিকানা যোগ করুন
              </h2>

              <div className="grid grid-cols-2 gap-[20px]">
                <InputField
                  title={"আপনার নাম"}
                  placeholder={"এখানে আপনার নাম লিখুন"}
                  value={name}
                  setValue={setName}
                  required={true}
                  errorMessage={errors?.name}
                />{" "}
                <InputField
                  title={"কন্টাক্ট নম্বর"}
                  placeholder={"আপনার মোবাইল নম্বর দিন"}
                  value={number}
                  setValue={setNumber}
                  required={true}
                  errorMessage={errors?.number}
                />
                <SelectInputField
                  title="থানা"
                  value={area}
                  setValue={setArea}
                  options={[
                    { value: "রূপগঞ্জ", label: "রূপগঞ্জ" },
                    { value: "আড়াইহাজার", label: "আড়াইহাজার" },
                    { value: "সোনারগাঁ", label: "সোনারগাঁ" },
                  ]}
                  required={true}
                  errorMessage={errors?.area}
                />
                <InputField
                  title={"গ্রাম"}
                  placeholder={"গ্রাম এর নাম লিখুন"}
                  value={gram}
                  setValue={setGram}
                  required={true}
                  errorMessage={errors?.gram}
                />{" "}
                <InputField
                  title={"এলাকা / পাড়া"}
                  placeholder={"এলাকার নাম লিখুন"}
                  value={elaka}
                  setValue={setElaka}
                  required={true}
                  errorMessage={errors?.elaka}
                />
                <InputField
                  title={"বাসা/হোল্ডিং, রোড নং"}
                  placeholder={"বাসা নং, রোড নং এবং পাড়ার নাম লিখুন"}
                  value={hous}
                  setValue={setHous}
                />
                <div className="col-span-2">
                  {/* Inside Bazar */}
                  <label className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={InsiteOROutsite === "inside"}
                      onChange={() => setInsiteOROutsite("inside")}
                      className="h-5 w-5 accent-green-500"
                    />
                    <div className="flex items-center gap-[10px]">
                      <p className="font-medium text-gray-800">Inside Bazar</p>
                      <p className="text-sm text-gray-600">
                        ( গাউসিয়া কেন্দ্রের কাছের এলাকা )
                      </p>
                    </div>
                  </label>

                  {/* Outside Bazar */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={InsiteOROutsite === "outside"}
                      onChange={() => setInsiteOROutsite("outside")}
                      className="h-5 w-5 accent-orange-500"
                    />
                    <div className="flex items-center gap-[10px]">
                      <p className="font-medium text-gray-800">Outside Bazar</p>
                      <p className="text-sm text-gray-600">
                        ( গাউসিয়া থেকে দূরের এলাকা )
                      </p>
                    </div>
                  </label>
                </div>
                <div className="col-span-2">
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
