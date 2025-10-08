import { FaMotorcycle, FaStar, FaUtensils } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import TextareaField from "../../Component/TextareaField/TextareaField";
import { Link, useLocation } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import confiromImage from "../../../public/images/confiromImage.png";
import preparingImage from "../../../public/images/coking.png";
import deliveredImage from "../../../public/images/delivered.png";

const TrackOrder = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const stateId = location.state?.orderID;
  const stateOrderNumber = location.state?.orderNumber;
  const [errors, setErrors] = useState(false);

  const [orders, setOrders] = useState([]);
  const [orderID, setOrderID] = useState(stateId);
  const [inputOrderID, setInputOrderID] = useState("");

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSearch = () => {
    setOrderID(inputOrderID);
  };

  // get status
  const handleGetOrders = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/track-orders/${id}`);
      if (res?.data?.success) {
        setOrders(res?.data?.order);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orderID) {
      handleGetOrders(orderID);
    }
  }, [orderID]);

  //

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${baseUrl}/reviews`, {
        rating,
        comment,
      });

      if (res?.data?.success) {
        Swal.fire("Success!", "Send review successfully!", "success");
        setRating("");
        setComment("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {orderID ? (
        <div>
          <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
            <Link to={"/"} className="flex items-center gap-[15px]">
              <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
              <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
                ট্র্যাক অর্ডার
              </h2>
            </Link>
          </div>
          <div className="px-[15px]">
            <h2 className="text-[25px] text-center mt-[30px] font-bold">
              আপনার খাবার আসছে!
            </h2>
            <p className="text-center text-gray-500 text-[14px] mt-[10px]">
              অর্ডার আইডি:{" "}
              {(stateOrderNumber && stateOrderNumber) || (orderID && orderID)}
            </p>

            {orders?.status === "confirmed" ||
            orders?.status === "partially_accepted" ? (
              <div>
                <div className="relative mx-[15px] overflow-hidden flex items-center justify-center mt-[30px]">
                  <div className="h-[3px] bg-gray-300 absolute w-full top-[13px]"></div>
                  <div className="flex items-center justify-between w-[90%]">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <MdDone className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        অর্ডার কনফার্মড
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <FaUtensils />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        খাবার তৈরি হচ্ছে
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <FaMotorcycle />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        ডেলিভারির পথে
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <TiHome />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        ডেলিভার্ড
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={confiromImage} alt="conform image" />
                </div>
              </div>
            ) : orders?.status === "preparing" ? (
              <div>
                {" "}
                <div className="relative mx-[15px] overflow-hidden flex items-center justify-center mt-[30px]">
                  <div className="h-[3px] bg-gray-300 absolute w-full top-[13px]"></div>
                  <div className="flex items-center justify-between w-[90%]">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <MdDone className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        অর্ডার কনফার্মড
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <FaUtensils className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        খাবার তৈরি হচ্ছে
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <FaMotorcycle />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        ডেলিভারির পথে
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <TiHome />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        ডেলিভার্ড
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[30px]">
                  <img src={preparingImage} alt="conform image" />
                </div>
              </div>
            ) : orders?.status === "out_for_delivery" ? (
              <div>
                {" "}
                <div className="relative mx-[15px] overflow-hidden flex items-center justify-center mt-[30px]">
                  <div className="h-[3px] bg-gray-300 absolute w-full top-[13px]"></div>
                  <div className="flex items-center justify-between w-[90%]">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <MdDone className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        অর্ডার কনফার্মড
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <FaUtensils className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        খাবার তৈরি হচ্ছে
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <FaMotorcycle className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        ডেলিভারির পথে
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-gray-200 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <TiHome />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        ডেলিভার্ড
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={deliveredImage} alt="conform image" />
                </div>
              </div>
            ) : orders?.status === "delivered" ? (
              <div>
                <div className="relative mx-[15px] overflow-hidden flex items-center justify-center mt-[30px]">
                  <div className="h-[3px] bg-gray-300 absolute w-full top-[13px]"></div>
                  <div className="flex items-center justify-between w-[90%]">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <MdDone className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        অর্ডার কনফার্মড
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <FaUtensils className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        খাবার তৈরি হচ্ছে
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <FaMotorcycle className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        ডেলিভারির পথে
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-green-600 text-gray-400 h-[30px] w-[30px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
                        <TiHome className="text-white bg-green-600" />
                      </div>
                      <p className="text-[10px] whitespace-nowrap mt-[10px] text-gray-400">
                        ডেলিভার্ড
                      </p>
                    </div>
                  </div>
                </div>
                {/* Revidew box */}
                <div className="mt-[30px] rounded-[15px] p-[15px]">
                  <div className="mb-[20px]">
                    <p className="mb-[10px]">রেটিং দিন</p>
                    <div className="flex items-center gap-[10px]">
                      {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                          <FaStar
                            key={index}
                            size={30}
                            className={`cursor-pointer transition-all ${
                              currentRating <= (hover || rating)
                                ? "text-[#ff6347]"
                                : "text-gray-300"
                            }`}
                            onClick={() => setRating(currentRating)}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(0)}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <textarea
                    className="w-full border border-gray-300 rounded-[8px] p-[10px]  outline-none"
                    rows="6"
                    placeholder="আপনার মতামত লিখুন..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />

                  <div className="flex justify-end mt-[10px]">
                    <button
                      onClick={handleSubmit}
                      className="main_bg_color text-white py-[8px] px-[20px] rounded-[8px] shadow-sm"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ) : orders?.status === "pending" ? (
              <div className="bg-white p-[16px] rounded-[10px] shadow-md flex items-center justify-between border mt-[20px]">
                <p className=" text-gray-500 text-[14px]">
                  অর্ডার আইডি: {orderID && orderID}
                </p>

                <button className="text-white bg-yellow-500 rounded-md py-[3px] px-[12px] text-sm font-medium shadow-sm">
                  Pending
                </button>
              </div>
            ) : orders?.status === "cancelled" ? (
              <div className="bg-white p-[16px] rounded-[10px] shadow-md flex items-center justify-between border mt-[20px]">
                <p className=" text-gray-500 text-[14px]">
                  অর্ডার আইডি: {orderID && orderID}
                </p>

                <button className="text-white bg-red-500 rounded-md py-[3px] px-[12px] text-sm font-medium shadow-sm">
                  অর্ডার বাতিল
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
            <Link to={"/profile"} className="flex items-center gap-[15px]">
              <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
              <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
                ট্র্যাক অর্ডার
              </h2>
            </Link>
            {/* <LiaShoppingCartSolid className="bg-white text-[35px] text-[#6b7280]" /> */}
          </div>
          <div className="bg-white pt-[30px] px-[20px]">
            <h2 className="text-[20px] text-center font-semibold">
              আপনার অর্ডার ট্র্যাক করুন
            </h2>
            <p className="text-[12px] text-center text-gray-500">
              অর্ডার আইডি লিখুন এবং "ট্র্যাক অর্ডার" টিপুন।
            </p>

            <div className="mt-[20px]">
              <p className="mb-[10px] text-[16px]">
                অর্ডার আইডি{" "}
                <span className="text-red-500 text-[18px] pl-[5px]">*</span>
              </p>
              <input
                value={inputOrderID}
                onChange={(e) => setInputOrderID(e.target.value)}
                type="text"
                className="bg-[#eff1f1] outline-none rounded-[10px] py-[8px] w-full px-[20px] border"
                placeholder="অর্ডার আইডি লিখুন"
              />
              {errors && <p className="text-[12px] text-red-500">{errors}</p>}
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleSearch("2")}
                className="mt-[16px] mb-[30px] text-center bg-[#ff6347] text-white px-[30px] py-[8px] rounded-[8px]"
              >
                ট্র্যাক অর্ডার
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
