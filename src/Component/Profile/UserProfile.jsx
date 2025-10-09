import ProfileNaveList from "./ProfileNaveList";
import { RiFileList2Line } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowForward, IoIosCamera } from "react-icons/io";
import noImage from "../../../public/images/notimage.svg";
import { CgLock } from "react-icons/cg";

const UserProfile = ({
  userData,
  handleLogOut,
  setOpenFileForm,
  setOpenFileFormType,
  setResatePassword,
}) => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  return (
    <div>
      <div className="relative h-[130px] w-full bg-gray-200 rounded-xl  shadow-sm">
        {/* Cover Image */}
        <img
          src={
            userData?.coverImage
              ? `${baseImageUrl}/${userData.coverImage}`
              : noImage
          }
          alt="cover"
          className="h-full w-full object-cover"
        />

        {/* Cover Image Edit Button */}
        <button
          onClick={() => {
            setOpenFileForm(true);
            setOpenFileFormType("cover");
          }}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
          title="Change Cover Photo"
        >
          <IoIosCamera className="text-xl" />
        </button>

        {/* Logo Section */}
        <div className="absolute bottom-[-55px] left-[16px] flex flex-col items-center z-[200]">
          <div className="relative">
            <div className="relative h-[100px] w-[100px] rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
              <img
                src={
                  userData?.logo ? `${baseImageUrl}/${userData.logo}` : noImage
                }
                alt="logo"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            {/* Logo Edit Button */}
            <button
              onClick={() => {
                setOpenFileForm(true);
                setOpenFileFormType("Logo");
              }}
              className="absolute bottom-1 right-1 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-1 shadow-md transition-all"
              title="Change Profile Picture"
            >
              <IoIosCamera className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[70px] px-[16px] mb-[30px] ">
        <h2 className=" font-bold text-[16px] text-[#171717]">
          {userData?.name}
        </h2>
        <p className="text-gray-600">{userData?.phone}</p>
      </div>
      {/* ====> Nav list <==== */}
      <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mb-[16px] mx-[16px]">
        {/* <ProfileNaveList
            title={"ড্যাশবোর্ড"}
            icon={
              <CiGrid41 className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/myorders"}
          /> */}
        <ProfileNaveList
          title={"আমার অর্ডারসমূহ"}
          icon={
            <RiFileList2Line className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/myorders"}
        />
        <ProfileNaveList
          title={"ট্র্যাক অর্ডার"}
          icon={
            <BsBoxSeam className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/tracking-order"}
        />
        <ProfileNaveList
          title={"আমার ঠিকানা"}
          icon={
            <IoLocationOutline className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/address"}
        />
        {/* <ProfileNaveList
            title={"আমার রিভিউ"}
            icon={
              <FaRegStar className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          /> */}

        <div onClick={() => setResatePassword(true)}>
          <ProfileNaveList
            title={"পাসওয়ার্ড পরিবর্তন করুন"}
            icon={
              <CgLock className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
          />
        </div>

        {userData && (
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
        )}
      </div>
    </div>
  );
};

export default UserProfile;
