import { useNavigate } from "react-router";

const MyOrderCard = () => {
  const usenavigate = useNavigate();
  return (
    <div
      onClick={() => usenavigate("/myorderstracking/1")}
      className="flex items-center justify-between bg-white  rounded-[15px] p-[20px]"
    >
      <div className=" flex items-center gap-[10px] bg-white">
        <div className="h-[65px] w-[65px] rounded-[15px]  border-[3px] border-[#eff1f1] ">
          <img
            className="h-full w-full rounded-[15px]"
            src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
            alt="logo"
          />
        </div>
        <div className="bg-white">
          <h2 className="bg-white text-[10px] text-gray-500 mb-[3px]">
            অর্ডার আইডি #LSKF&
          </h2>
          <h2 className="bg-white text-[14px] font-semibold">সাহি বিরিয়ানি</h2>
          <div className="flex items-center gap-[15px] bg-white">
            <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[16px]">
              <span className=" font-extrabold  bg-white p-0">৳</span> 250
            </h2>
            <h2 className="bg-white font-extrabold p-0 main_color text-[16px]">
              <span className="font-extrabold  bg-white p-0">৳</span> 200
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <h2 className="bg-white mb-[20px] text-[12px] text-gray-500 text-right">
          ০১-১০-২০২৫
        </h2>
        <button className="main_bg_color rounded-full text-white py-[4px] px-[15px] relative bottom-0">
          Panding
        </button>
      </div>
    </div>
  );
};

export default MyOrderCard;
