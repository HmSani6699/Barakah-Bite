import React from "react";
import { Link } from "react-router";

const Hero = ({ allData }) => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  return (
    <div className="my-[16px] flex items-center gap-[16px] overflow-auto scrollbar-hide px-[16px]">
      {allData?.length > 0 &&
        allData?.map((item, i) => (
          <Link
            key={i}
            to="/categories"
            state={{ name: item?.name }}
            className="bg-white flex items-center gap-[16px] p-[16px] rounded-[8px] shadow-lg  "
          >
            <h2 className="text-[14px] text-[#101828] whitespace-nowrap">
              {item?.name}
            </h2>
            <div className="h-[40px] w-[50px] rounded-[8px]">
              <img
                className=" h-full w-full rounded-[8px]"
                src={baseImageUrl + "/" + item?.icon}
                alt=""
              />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Hero;
