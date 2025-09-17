import { MdNotifications } from "react-icons/md";
import SearchInputField from "../../Component/SearchInputField/SearchInputField";
import { ImSearch } from "react-icons/im";

const HomeTopNavber = () => {
  return (
    <div className=" top_header_shadow bg-white px-[20px] py-[16px] fixed w-full top-0 z-[200]">
      <div className="flex items-center justify-between border rounded-full pl-[10px] pr-[4px]">
        <div className="flex items-center ">
          <ImSearch className="text-[20px] text-gray-500 bg-white" />

          <input
            type="text"
            className="bg-white outline-none rounded-full  w-full  h-full pl-[6px] py-[8px]"
            placeholder="খাবার বা দোকানের নাম দিয়ে খুঁজুন"
          />
        </div>
        <button className="bg-[#ff6347] text-white text-[12px] px-[15px] py-[5px] rounded-full ">
          খুঁজুন
        </button>
      </div>
    </div>
  );
};

export default HomeTopNavber;
