import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const ViewMenu = ({ data, setOpeView }) => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  console.log(data);

  return (
    <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center">
      <div
        className="bg-white w-full max-w-[600px] mx-[16px] rounded-lg shadow-lg 
                  max-h-[90vh] overflow-y-auto p-[20px]"
      >
        {/* Close button */}
        <div className="flex items-end justify-end mb-[20px] sticky top-0  z-10">
          <IoMdCloseCircle
            onClick={() => setOpeView(false)}
            className="text-red-500 text-[30px] cursor-pointer"
          />
        </div>

        {/* amin  */}
        <div>
          <div className="h-[300px] w-full">
            <img
              className="w-full h-full"
              src={baseImageUrl + "/" + data?.img}
              alt="not image"
            />
          </div>
          <h2 className="text-[20px] my-[6px] font-bold">{data?.name}</h2>
          {data?.variants?.map((item, i) => (
            <div key={i} className="border-[2px] w-full border-gray-200 ">
              <div className="flex items-center gap-[5px]">
                <p className="bg-green-200 text-green-900 rounded-full h-[20px] w-[20px] flex items-center justify-center text-[12px]">
                  {i + 1}
                </p>
                <p>variant</p>
              </div>
              <h2>Label:{item?.label}</h2>
              <h2>Price:{item?.price}</h2>
              <h2>Cut Price:{item?.cutPrice}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMenu;
