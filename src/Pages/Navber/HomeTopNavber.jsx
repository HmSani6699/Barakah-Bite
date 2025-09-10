import { MdNotifications } from "react-icons/md";
import SearchInputField from "../../Component/SearchInputField/SearchInputField";

const HomeTopNavber = () => {
  return (
    <div className="p-[15px]">
      {/* Navber part start */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px] ">
          <div className="h-[60px] w-[60px] rounded-full  border-[3px] border-white">
            <img
              className="h-full w-full rounded-full"
              src="../../../public/images/dal.jpeg"
              alt="logo"
            />
          </div>
          <h2 className="text-[20px] font-bold">Barakah Mart</h2>
        </div>

        <div className="relative">
          <MdNotifications className="text-[25px]" />
          <p className="h-[15px] w-[15px] bg-[#ff6347] rounded-full text-[10px] flex items-center justify-center text-white relative -top-[30px] -right-[12px]">
            3
          </p>
        </div>
      </div>
      {/* Navber part end */}

      {/* Search part start */}
      <div className="mt-[20px]">
        <SearchInputField />
      </div>
      {/* Search part end */}
    </div>
  );
};

export default HomeTopNavber;
