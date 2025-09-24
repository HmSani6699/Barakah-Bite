import { FaHeadset, FaInfoCircle, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import ProfileNaveList from "../../../Component/Profile/ProfileNaveList";
import { useAuth } from "../../../Context/AuthContext";
import { useNavigate } from "react-router";

const MenuPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="px-[20px]">
      <div className=" h-[90px] text-center flex items-center justify-center">
        <div className="h-[90px] w-[90px] rounded-full  border-[4px] border-[#eff1f1] shadow-md mt-[40px]">
          <img
            className="h-full w-full rounded-full"
            src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
            alt="logo"
          />
        </div>
      </div>
      <div className="mt-[30px] text-center">
        <h2 className="text-[20px] font-bold">Md Sadiq Sadi</h2>
      </div>

      {/* About Company */}
      <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mt-[20px]">
        <ProfileNaveList
          title={"Main category"}
          icon={
            <FaUser className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/super-admin/main-category"}
        />
        <ProfileNaveList
          title={"Sub category"}
          icon={
            <FaUser className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/super-admin/sub-category"}
        />
        <ProfileNaveList
          title={"Product category"}
          icon={
            <FaUser className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/super-admin/product-category"}
        />
        {/* <ProfileNaveList
          title={"যোগাযোগ"}
          icon={
            <FaHeadset className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/contactus"}
        /> */}

        <div
          onClick={handleLogOut}
          className="w-full flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-[15px]">
            <FiLogOut className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            <p className="text-gray-600">লগআউট</p>
          </div>
          <IoIosArrowForward />
        </div>
      </div>

      {/* About Company */}
      {/* <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mt-[20px]">
        <ProfileNaveList
          title={"আমাদের সম্পর্কে"}
          icon={
            <FaInfoCircle className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/aboutus"}
        />
        <ProfileNaveList
          title={"যোগাযোগ"}
          icon={
            <FaHeadset className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/contactus"}
        />

        <div
          onClick={handleLogOut}
          className="w-full flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-[15px]">
            <FiLogOut className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            <p className="text-gray-600">লগআউট</p>
          </div>
          <IoIosArrowForward />
        </div>
      </div> */}
    </div>
  );
};

export default MenuPage;
