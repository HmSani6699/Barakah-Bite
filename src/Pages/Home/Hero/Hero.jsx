import React from "react";

const Hero = () => {
  return (
    <div className="my-[16px] flex items-center gap-[16px] overflow-auto scrollbar-hide">
      <div className="bg-white flex items-center gap-[16px] p-[16px] rounded-[8px]">
        <h2 className="text-[12px] text-[#101828]">Restaurant</h2>
        <div className="h-[40px] w-[50px] rounded-[8px]">
          <img
            className=" h-full w-full rounded-[8px]"
            src={"https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"}
            alt=""
          />
        </div>
      </div>
      <div className="bg-white flex items-center gap-[16px] p-[16px] rounded-[8px]">
        <h2 className="text-[12px] text-[#101828]">Restaurant</h2>
        <div className="h-[40px] w-[50px] rounded-[8px]">
          <img
            className=" h-full w-full rounded-[8px]"
            src={"https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"}
            alt=""
          />
        </div>
      </div>
      <div className="bg-white flex items-center gap-[16px] p-[16px] rounded-[8px]">
        <h2 className="text-[12px] text-[#101828]">Restaurant</h2>
        <div className="h-[40px] w-[50px] rounded-[8px]">
          <img
            className=" h-full w-full rounded-[8px]"
            src={"https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
