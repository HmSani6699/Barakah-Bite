import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaMoneyBillWave } from "react-icons/fa";
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { IoIosArrowForward, IoMdCloseCircle } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import SelectInputField from "../SelectInputField/SelectInputField";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../CartContext/CartContext";
import Swal from "sweetalert2";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import HomeTopNavber from "../../Pages/Navber/HomeTopNavber";
import { TiHomeOutline } from "react-icons/ti";

const CheckOut = () => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selected, setSelected] = useState("cash");
  const [address, setAddress] = useState({});
  const location = useLocation();
  const orderItem = location.state;
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [area, setArea] = useState("");
  const [gram, setGram] = useState("");
  const [elaka, setElaka] = useState("  ");
  const [hous, setHous] = useState("");
  const [note, setNote] = useState("");
  const { cartItems, removeAllItem } = useCart();
  const [paymentNumber, setPaymentNumber] = useState();
  const [paymentTransactionId, setPaymentTransactionId] = useState();
  const [InsiteOROutsite, setInsiteOROutsite] = useState("inside");

  const options = [
    {
      id: "cash",
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
    // Inside & Out site
    if (!InsiteOROutsite.trim()) {
      newErrors.insiteOROutsite = "Please select Insite or Outsite bazar";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };

  // Add Address
  const handleAddAddress = () => {
    if (!createValidateForm()) {
      return;
    }

    const getDelivery = JSON.parse(localStorage.getItem("deliveryAddress"));

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

    // get aitem
    if (getDelivery) {
      localStorage.removeItem("deliveryAddress");
      localStorage.setItem("deliveryAddress", JSON.stringify(newAddress));
      const getItem = localStorage.getItem("deliveryAddress");
      setAddress(JSON.parse(getItem));
      setIsFormOpen(false);
    } else {
      localStorage.setItem("deliveryAddress", JSON.stringify(newAddress));
      const getItem = localStorage.getItem("deliveryAddress");
      setAddress(JSON.parse(getItem));
      setIsFormOpen(false);
    }
  };

  useEffect(() => {
    const getItem = localStorage.getItem("deliveryAddress");
    setAddress(JSON.parse(getItem));
  }, []);

  // Handle order
  const handleOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const deliveryAddress = JSON.parse(localStorage.getItem("deliveryAddress"));

    if (!user) {
      Swal.fire({
        title: "<strong>অনুগ্রহ করে <u>লগইন</u> করুন</strong>",
        icon: "warning",
        html: `
    অর্ডার সম্পন্ন করতে হলে আপনাকে প্রথমে লগইন করতে হবে।<br><br>
    দয়া করে লগইন করুন অথবা একটি নতুন একাউন্ট তৈরি করুন।
  `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
    <i class="fa fa-sign-in-alt"></i> লগইন
  `,
        confirmButtonAriaLabel: "লগইন",
        cancelButtonText: `
    <i class="fa fa-user-plus"></i> সাইন আপ
  `,
        cancelButtonAriaLabel: "সাইন আপ",
      }).then((result) => {
        if (result.isConfirmed) {
          navigation("/login", {
            state: { from: "/checkOut" },
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigation("/signup", {
            state: { from: "/checkOut" },
          });
        }
      });

      return;
    }

    try {
      const payload = {
        userId: user?.phone, // usually from auth
        orderNumber: "ACC" + Date.now(),
        status: "pending",

        items: orderItem?.items,
        subtotal: orderItem?.totalAmount,
        deliveryFee: address?.deliveryCharge,
        discount: 0,
        totalAmount: orderItem?.totalAmount + address?.deliveryCharge,
        deliveryType: "home",

        deliveryInfo: {
          name: deliveryAddress?.name,
          phone: deliveryAddress?.number,
          elaka: deliveryAddress?.elaka,
          area: deliveryAddress?.area,
          gram: deliveryAddress?.gram,
        },
        payment: {
          method: selected,
          status: "unpaid",
          paymentNumber: paymentNumber,
          transactionId: paymentTransactionId,
        },
        notes: deliveryAddress?.note || "",
      };

      // console.log(payload);

      const res = await axios.post(`${baseUrl}/orders`, payload);

      if (res?.data?.success) {
        toast.success("Order Success", {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
          transition: Slide,
        });
        removeAllItem();
        navigation("/success", { state: { order: res?.data?.order } });
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  return (
    <div className="">
      <Link to={"/card"} className="lg:hidden block">
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow w-full">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[14px] text-[#6b7280]">
            পেমেন্ট করুন
          </h2>
        </div>
      </Link>

      <HomeTopNavber />
      <div className="hidden  lg:mt-[90px] px-[16px] lg:flex items-center gap-[10px]">
        <TiHomeOutline className="text-[25px] text-[#6b7280]" />
        <Link to={"/card"} className="text-[#6b7280] hover:underline">
          হোম
        </Link>
        <IoIosArrowForward className="text-[#6b7280]" />
        <h2> পেমেন্ট করুন</h2>
      </div>

      {/*  */}
      <div className="px-[15px] lg:w-[500px] mx-auto">
        {/* Address */}

        {address ? (
          <div className="flex items-center gap-[10px] mt-[16px]">
            <div
              className={`flex items-center justify-between bg-white  rounded-[10px] py-[8px] px-[10px]  border-dashed border border-[#ff6347] w-[80%]`}
            >
              <div className="flex items-center gap-[10px]">
                <FaLocationDot className="text-[#ff6347] text-[30px]" />
                <div>
                  <h2 className="font-semibold text-[14px]">{address?.name}</h2>

                  <h2 className="font-semibold text-gray-500 text-[12px]">
                    {address?.elaka}, {address?.area}
                  </h2>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsFormOpen(true)}
              className=" bg-[#ff6347]  flex items-center flex-col h-full text-white py-[5px] rounded-[8px] w-[20%]"
            >
              <FaPlus />
              <p className="text-[10px] mt-[10px]">নতুন ঠিকানা</p>
            </button>
          </div>
        ) : (
          <button onClick={() => setIsFormOpen(true)} className="w-full">
            <div className="flex items-center gap-[10px] rounded-[15px] bg-[#ffffff80]  mt-[16px] p-[16px] border-[1px] border-dashed border-[#ff6347]">
              <FaLocationDot className="text-[20px] text-[#ff6347] bg-[#ffffff80]" />
              <p className="bg-[#ffffff19] text-gray-400">
                ডেলিভারি ঠিকানা যোগ করুন
              </p>
            </div>
          </button>
        )}

        <div className="bg-[#ffffff80]  rounded-[15px] mt-[16px] p-[20px]">
          <h2 className="font-bold mb-[10px] bg-[#ffffff80]">বিল বিবরণী</h2>
          <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
            <p className="text-[14px]  bg-[#ffffff80]">সাব-টোটাল</p>
            <p className="bg-[#ffffff80]">
              <span className="font-extrabold bg-[#ffffff80]">৳ </span>
              {orderItem?.totalAmount ? orderItem?.totalAmount : "0"}
            </p>
          </div>
          <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
            <p className="text-[14px] ">ডেলিভারি চার্জ</p>
            <p className="bg-[#ffffff80]">
              <span className="font-extrabold bg-[#ffffff80]">৳</span>{" "}
              {address?.deliveryCharge}
            </p>
          </div>
          <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
            <p className="bg-[#ffffff80] text-[14px] ">ডিসকাউন্ট</p>
            <p className="bg-[#ffffff80]">
              <span className="font-extrabold bg-[#ffffff80]">৳</span> 00
            </p>
          </div>

          <div className=" border-t-2 border-t-gray-200 bg-[#ffffff80] flex items-center justify-between">
            <p className="pt-[8px] bg-[#ffffff80] text-[14px] font-semibold">
              সর্বমোট
            </p>
            <p className="font-bold pt-[8px] bg-[#ffffff80]">
              <span className="font-extrabold bg-[#ffffff80]">৳</span>{" "}
              {orderItem?.totalAmount &&
                orderItem?.totalAmount + address?.deliveryCharge}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="w-full max-w-md bg-white rounded-lg shadow p-[20px] mt-[16px] ">
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
              {option.id === "cash" && selected === "cash" ? (
                <div className=" relative bg-[#f3f3f3] border border-gray-200 rounded-md  p-[16px] text-gray-600 text-sm ">
                  <div className="absolute -top-2 left-[20px] w-[30px] h-[30px] bg-[#f3f3f3]  border-gray-200 rotate-45"></div>
                  <h2 className="relative z-[20]">
                    ডেলিভারির সময় নগদ অর্থ প্রদান করুন।
                  </h2>
                </div>
              ) : option.id === "bkash" && selected === "bkash" ? (
                <div className=" relative bg-[#f3f3f3] border border-gray-200 rounded-md  p-[16px] text-gray-600 text-sm ">
                  <div className="absolute -top-2 left-[20px] w-[30px] h-[30px] bg-[#f3f3f3]  border-gray-200 rotate-45"></div>
                  <h2 className="text-center font-bold mb-[15px] relative z-10">
                    আপনাকে{" "}
                    {orderItem?.totalAmount &&
                      orderItem?.totalAmount + address?.deliveryCharge}{" "}
                    টাকা পাঠাতে হবে ।
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
                        onChange={(e) => setPaymentNumber(e.target.value)}
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
                        onChange={(e) =>
                          setPaymentTransactionId(e.target.value)
                        }
                        type="text"
                        className="bg-white outline-none  p-[10px] w-full rounded-[8px] border shadow-sm"
                        placeholder="ট্রানজেকশন আইডি"
                      />
                    </div>
                  </div>
                </div>
              ) : option.id === "nagad" && selected === "nagad" ? (
                <div className=" relative bg-[#f3f3f3] border border-gray-200 rounded-md  p-[16px] text-gray-600 text-sm ">
                  <div className="absolute -top-2 left-[20px] w-[30px] h-[30px] bg-[#f3f3f3]  border-gray-200 rotate-45"></div>
                  <h2 className="text-center font-bold mb-[15px] relative z-10">
                    আপনাকে{" "}
                    {orderItem?.totalAmount &&
                      orderItem?.totalAmount + address?.deliveryCharge}{" "}
                    টাকা পাঠাতে হবে ।
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
                <div className=" relative bg-[#f3f3f3] border border-gray-200 rounded-md  p-[16px] text-gray-600 text-sm ">
                  <div className="absolute -top-2 left-[20px] w-[30px] h-[30px] bg-[#f3f3f3]  border-gray-200 rotate-45"></div>
                  <h2 className="text-center font-bold mb-[15px] relative z-10">
                    আপনাকে{" "}
                    {orderItem?.totalAmount &&
                      orderItem?.totalAmount + address?.deliveryCharge}{" "}
                    টাকা পাঠাতে হবে ।
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

        {selected ? (
          <div className="mb-[30px]">
            <button
              onClick={() => handleOrder()}
              disabled={!address && true}
              className={`${
                address
                  ? "main_bg_color  text-white"
                  : " bg-[#ff63478c] text-white cursor-not-allowed"
              }  border-[1px] border-gray-300 py-[8px] px-[20px]  w-full rounded-[8px] shadow-sm  mt-[30px]`}
            >
              অর্ডার করুন
            </button>
          </div>
        ) : (
          <p>df</p>
        )}
      </div>

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
                      className="h-5 w-5 accent-[#ff5733]"
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
                      className="h-5 w-5 accent-[#ff5733]"
                    />
                    <div className="flex items-center gap-[10px]">
                      <p className="font-medium text-gray-800">Outside Bazar</p>
                      <p className="text-sm text-gray-600">
                        ( গাউসিয়া থেকে দূরের এলাকা )
                      </p>
                    </div>
                  </label>

                  {errors?.insiteOROutsite && (
                    <p className="text-[12px] text-red-500">
                      {errors?.insiteOROutsite}
                    </p>
                  )}
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

export default CheckOut;
