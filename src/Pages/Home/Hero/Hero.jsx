import React from "react";
import { Link } from "react-router";

const Hero = ({ allData }) => {
  return (
    <div className="my-[16px] flex items-center gap-[16px] overflow-auto scrollbar-hide">
      {allData?.length > 0 &&
        allData?.map((item, i) => (
          <Link
            key={i}
            to="/categories"
            state={{ name: item?.name }}
            className="bg-white flex items-center gap-[16px] p-[16px] rounded-[8px] "
          >
            <h2 className="text-[14px] text-[#101828] whitespace-nowrap">
              {item?.name}
            </h2>
            <div className="h-[40px] w-[50px] rounded-[8px]">
              <img
                className=" h-full w-full rounded-[8px]"
                src={item?.img}
                alt=""
              />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Hero;
