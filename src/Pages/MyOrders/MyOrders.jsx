import React from "react";
import MyOrderCard from "../../Component/MyOrderCard/MyOrderCard";

const MyOrders = () => {
  return (
    <div>
      <div className="bg-white h-[65px] text-center flex items-center justify-center">
        <h2 className="bg-white font-bold text-[20px]">আমার অর্ডারসমূহ</h2>
      </div>

      {/* order card */}
      <div className="px-[15px] mt-[20px] flex flex-col gap-[20px]">
        <MyOrderCard />
        <MyOrderCard />
        <MyOrderCard />
        <MyOrderCard />
        <MyOrderCard />
      </div>
    </div>
  );
};

export default MyOrders;
