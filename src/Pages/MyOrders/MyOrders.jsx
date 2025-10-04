import React, { useEffect, useState } from "react";
import MyOrderCard from "../../Component/MyOrderCard/MyOrderCard";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../Component/Loading/Loading";

const MyOrders = () => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);

  const [allOrders, setAllOrders] = useState([]);

  const handleGetAllOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/orders/user/${user?.phone}`);
      if (res?.data?.success) {
        setAllOrders(res?.data?.order);
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
    handleGetAllOrders();
  }, []);

  return (
    <>
      {loading ? (
        <div className="mt-[400px]">
          <Loading />
        </div>
      ) : (
        <div className="mb-[120px]">
          <div className="bg-white h-[65px] text-center flex items-center justify-center top_header_shadow">
            <h2 className="bg-white font-bold text-[20px]">আমার অর্ডারসমূহ</h2>
          </div>

          {/* order card */}

          {allOrders?.length > 0 ? (
            <div>
              <div className="px-[15px] mt-[20px] grid grid-cols-1 lg:grid-cols-1 gap-[20px]">
                {allOrders?.map((item, i) => (
                  <MyOrderCard key={i} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center mt-10 px-[16px] lg:max-w-[500px] mx-auto  mb-[100px]">
              <p className="text-gray-600 mt-2">
                দুঃখিত! আপনার খোঁজা আইটেমটি আমরা এই মুহূর্তে খুঁজে পাইনি। আপনি
                চাইলে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে পারেন, আমরা আপনার
                প্রয়োজন অনুযায়ী সর্বোচ্চ চেষ্টা করব আইটেমটি সরবরাহ করতে।
              </p>
              <a
                href="https://wa.me/8801996359111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
              >
                WhatsApp এ মেসেজ করুন
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyOrders;
