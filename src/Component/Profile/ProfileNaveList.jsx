import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const ProfileNaveList = ({ title, icon, url }) => {
  return (
    <Link to={url} className="inline-block w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-[15px]">
          {icon}
          <p className="text-gray-600">{title}</p>
        </div>
        <IoIosArrowForward />
      </div>
    </Link>
  );
};

export default ProfileNaveList;
