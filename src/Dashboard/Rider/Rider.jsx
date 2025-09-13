import React, { useState } from "react";
import { FaClock, FaRegClock, FaStar } from "react-icons/fa";
import { FaLocationDot, FaMoneyBill1Wave } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { IoCloseSharp, IoLocationOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";

const Rider = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [hasNewOrder, setHasNewOrder] = useState(false);
  const [locationStatus, setLocationStatus] = useState("অফলাইন");
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [newOrderData, setNewOrderData] = useState();

  const riderData = {
    name: "মোঃ সাদিক সাদি",
    email: "sadiq@gmail.com",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wGk2DC9SsXnEr2J74kpDXP3aCxBL4L.png",
    rating: 4.8,
    totalDeliveries: 1247,
    totalEarnings: 45650,
    todayEarnings: 1250,
    status: "অনলাইন",
    joinDate: "২০২৩-০১-১৫",
  };

  const handleNewOrder = () => {
    setHasNewOrder(true);
    setTimeout(() => {
      const orderData = [
        {
          id: "#1248",
          restaurant: "কাচ্চি ভাই রেস্টুরেন্ট",
          pickup: "ধানমন্ডি ২৭",
          delivery: "গুলশান ২",
          amount: "৳১৫০",
          distance: "৫.২ কিমি",
          estimatedTime: "২৫ মিনিট",
          customerName: "রহিম উদ্দিন",
          customerPhone: "+৮৮০১৯১২৩৪৫৬৭৮",
        },
        {
          id: "#1248",
          restaurant: "Barakah Mart",
          pickup: "ধানমন্ডি ২৭",
          delivery: "গুলশান ২",
          amount: "৳১৫০",
          distance: "৫.২ কিমি",
          estimatedTime: "২৫ মিনিট",
          customerName: "রহিম উদ্দিন",
          customerPhone: "+৮৮০১৯১২৩৪৫৬৭৮",
        },
        {
          id: "#1248",
          restaurant: "কাচ্চি ভাই রেস্টুরেন্ট",
          pickup: "ধানমন্ডি ২৭",
          delivery: "গুলশান ২",
          amount: "৳১৫০",
          distance: "৫.২ কিমি",
          estimatedTime: "২৫ মিনিট",
          customerName: "রহিম উদ্দিন",
          customerPhone: "+৮৮০১৯১২৩৪৫৬৭৮",
        },
        {
          id: "#1248",
          restaurant: "কাচ্চি ভাই রেস্টুরেন্ট",
          pickup: "ধানমন্ডি ২৭",
          delivery: "গুলশান ২",
          amount: "৳১৫০",
          distance: "৫.২ কিমি",
          estimatedTime: "২৫ মিনিট",
          customerName: "রহিম উদ্দিন",
          customerPhone: "+৮৮০১৯১২৩৪৫৬৭৮",
        },
      ];
      setNewOrderData(orderData);
      setShowOrderModal(true);
      setHasNewOrder(false);
    }, 2000);
  };

  const handleAcceptOrder = () => {
    setShowOrderModal(false);
    alert("অর্ডার গ্রহণ করা হয়েছে! রেস্টুরেন্টে যাওয়ার জন্য প্রস্তুত হন।");
  };

  const handleRejectOrder = () => {
    setShowOrderModal(false);
    setNewOrderData(null);
  };

  const handleLocationUpdate = () => {
    if (locationStatus === "অফলাইন") {
      setLocationStatus("অনলাইন");
      alert("লোকেশন সার্ভিস চালু করা হয়েছে। আপনি এখন অর্ডার পেতে পারবেন।");
    } else {
      setLocationStatus("অফলাইন");
      alert("লোকেশন সার্ভিস বন্ধ করা হয়েছে।");
    }
  };
  return (
    <div className="px-[15px] pt-[20px] mb-[120px] relative">
      {/* Today's Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">আজকের আয়</p>
              <p className="text-xl font-bold text-[#ff6347]">
                <span className="font-extrabold">৳</span> ১২
              </p>
            </div>
            <FaMoneyBill1Wave className=" text-[#ff6347] text-[30px]" />
          </div>
        </div>

        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">আজকের অর্ডার</p>
              <p className="text-xl font-bold text-[#ff6347]">১২</p>
            </div>
            <FiPackage className=" text-[#ff6347] text-[30px]" />
          </div>
        </div>
        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">অনলাইন সময়</p>
              <p className="text-xl font-bold text-[#307848]">২ ঘন্টা</p>
            </div>
            <FaRegClock className=" text-[#307848] text-[30px]" />
          </div>
        </div>
        <div className="p-[20px] bg-white rounded-[10px] shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">দূরত্ব</p>
              <p className="text-xl font-bold text-[#307848]">১.২ কিমি</p>
            </div>
            <FaLocationDot className=" text-[#307848] text-[30px]" />
          </div>
        </div>
      </div>
      {/* Overall Performance */}
      <div className="space-y-4 bg-white p-[20px] rounded-[10px] mt-[20px]">
        <h3 className="text-lg font-semibold">সামগ্রিক পারফরমেন্স</h3>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 ">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaStar className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">3.4</span>
            </div>
            <p className="text-sm text-muted-foreground">গড় রেটিং</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FiPackage className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">234</span>
            </div>
            <p className="text-sm text-muted-foreground">মোট ডেলিভারি</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {/* <TrendingUp className="h-5 w-5 text-green-600" /> */}
              <span className="text-2xl font-bold">৯৬.৭%</span>
            </div>
            <p className="text-sm text-muted-foreground">সফলতার হার</p>
          </div>
        </div>
      </div>
      {/* Wekkly  */}
      <div className="space-y-4 bg-white p-[20px] rounded-[10px] mt-[20px]">
        <h3 className="text-lg font-semibold">এই সপ্তাহের অগ্রগতি</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">ডেলিভারি লক্ষ্য (৫০টি)</span>
            <span className="text-sm font-medium">৪২/৫০</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: "84%" }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">আয়ের লক্ষ্য (৳১০,০০০)</span>
            <span className="text-sm font-medium">৳৮,১৮০/৳১০,০০০</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>
      </div>
      {/* New Order */}
      <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
        <h3 className="text-lg font-semibold">দ্রুত অ্যাকশন</h3>

        <div className="mt-[20px]">
          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex flex-col items-center py-[10px] px-[2px] text-white  relative bg-[#ff6347] rounded-[10px]"
              onClick={handleNewOrder}
              disabled={hasNewOrder}
            >
              <FiPackage className="h-6 w-6 inline-block" />
              {hasNewOrder ? "খোঁজা হচ্ছে..." : "নতুন অর্ডার"}
              {hasNewOrder && (
                <div className="absolute top-2 right-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                </div>
              )}
            </button>

            <button
              variant={locationStatus === "অনলাইন" ? "default" : "outline"}
              className={` flex flex-col items-center py-[10px] px-[2px]  rounded-[10px]  ${
                locationStatus === "অনলাইন"
                  ? "bg-[#ff6347] hover:bg-green-700 text-white"
                  : " border bg-[#eff1f1]"
              }`}
              onClick={handleLocationUpdate}
            >
              <FaLocationDot className="h-6 w-6 text-center inline-block" />
              লোকেশন {locationStatus}
            </button>
          </div>
        </div>
      </div>

      {/* New order modal */}
      {newOrderData && (
        <div className="fixed inset-0 bg-[#000000d9] flex items-center justify-center p-[15px] z-[300]">
          <div className="bg-white p-[20px] rounded-[10px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto">
            <div>
              <div className="flex items-end justify-end mb-[10px]">
                <button onClick={handleRejectOrder}>
                  <IoCloseSharp className="text-[25px]" />
                </button>
              </div>

              <div className="text-center text-lg font-bold text-primary mb-[20px]">
                🎉 নতুন অর্ডার পাওয়া গেছে!
              </div>

              {newOrderData &&
                newOrderData?.slice(0, 3).map((item) => (
                  <div>
                    <div className="bg-[#dcfce759] rounded-[10px]">
                      <div className="space-y-4">
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-lg">
                              {item.id}
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                              {item.amount}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <FiPackage className="h-4 w-4 text-primary" />
                              <span className="font-medium">
                                {item.restaurant}
                              </span>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <IoLocationOutline className="h-4 w-4 text-orange-500" />
                                <span className="text-sm">
                                  পিকআপ: {item.pickup}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <IoIosSend className="h-4 w-4 text-green-500" />
                                <span className="text-sm">
                                  ডেলিভারি: {item.delivery}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <IoLocationOutline className="h-3 w-3" />
                                {item.distance}
                              </div>
                              <div className="flex items-center gap-1">
                                <FaRegClock className="h-3 w-3" />
                                {item.estimatedTime}
                              </div>
                            </div>

                            <div className="border-t pt-3">
                              <p className="text-sm">
                                <strong>কাস্টমার:</strong> {item.customerName}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.customerPhone}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-[20px] flex items-center justify-between gap-[20px] ">
                      <button
                        variant="outline"
                        onClick={handleRejectOrder}
                        className=" bg-[#eff1f1] p-[10px] w-full rounded-[10px]"
                      >
                        প্রত্যাখ্যান
                      </button>
                      <button
                        onClick={handleAcceptOrder}
                        className="p-[10px] bg-[#ff6347] text-white w-full rounded-[10px]"
                      >
                        গ্রহণ করুন
                      </button>
                    </div>
                    <hr className="my-[15px]" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* order record */}
      <div className="mt-[20px]">
        <div className="flex items-center justify-between mb-[15px]">
          <h2 className="text-lg font-semibold">সাম্প্রতিক ডেলিভারি</h2>
          <button className="text-[#ff6347] flex items-center gap-[4px]">
            সব দেখুন <MdKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className="flex flex-col gap-[20px]">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-3 bg-muted rounded-lg bg-white "
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FiPackage className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">অর্ডার #{1000 + item}</p>
                  <p className="text-sm text-muted-foreground">
                    ধানমন্ডি → গুলশান
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">
                  <span className="font-semibold">৳</span> {120 + item * 10}
                </p>
                <p className="text-xs text-muted-foreground">সম্পন্ন</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rider;
