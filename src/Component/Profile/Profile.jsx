import React, { useState } from "react";
import { HiClipboardList } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import ProfileNaveList from "./ProfileNaveList";
import { FaHeadset, FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const [user, setUser] = useState("rider");
  return (
    <div className="mb-[120px]">
      <div className="bg-white h-[90px] text-center flex items-center justify-center">
        <div className="h-[90px] w-[90px] rounded-full  border-[4px] border-[#eff1f1] -mb-[100px] shadow-md">
          <img
            className="h-full w-full rounded-full"
            src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
            alt="logo"
          />
        </div>
      </div>
      <div className="mt-[60px] text-center">
        <h2 className="text-[20px] font-bold">Md Sadiq Sadi</h2>
        <p className="text-gray-500">sadiq@gmail.com</p>
      </div>

      <div className=" px-[20px] mt-[30px]">
        {/* Rider nav */}

        {user === "rider" ? (
          <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mb-[20px]">
            {" "}
            sider
          </div>
        ) : (
          ""
        )}

        {/* About me */}
        <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md">
          <ProfileNaveList
            title={"আমার অর্ডারসমূহ"}
            icon={
              <HiClipboardList className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/myorders"}
          />
          <ProfileNaveList
            title={"আমার ঠিকানা"}
            icon={
              <FaLocationDot className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          />
          {/* <ProfileNaveList
            title={"পেমেন্ট পদ্ধতি"}
            icon={
              <HiClipboardList className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/myorders"}
          /> */}
        </div>
        {/* About Company */}
        <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mt-[20px]">
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

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[15px]">
              <FiLogOut className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
              <p className="text-gray-600">লগআউট</p>
            </div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
