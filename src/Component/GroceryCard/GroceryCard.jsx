import React from "react";

const GroceryCard = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="h-[80px] w-[80px] rounded-full  border-[3px] border-[#eff1f1] -mb-[15px]">
        <img
          className="h-full w-full rounded-full"
          src="https://i.postimg.cc/bJqXjHd5/FB-IMG-1757409260966.jpg"
          alt="logo"
        />
      </div>
      <div className="bg-[#eff1f1] text-center px-[10px] py-[4px] rounded-b-[10px] shadow-md">
        <h2 className=" font-bold text-[16px]">চাল</h2>
        <p className="main_color font-semibold text-[12px]">10 আইটেম </p>
      </div>
    </div>
  );
};

export default GroceryCard;
