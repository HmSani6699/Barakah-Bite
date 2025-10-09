import React from "react";
import { FaArrowLeft, FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import { Link } from "react-router";

const ContactUs = () => {
  return (
    <div className="mb-[120px]">
      {" "}
      <Link to={"/profile"}>
        <div className="bg-white h-[65px]  flex items-center justify-center gap-[15px] px-[15px] top_header_shadow">
          {/* <FaArrowLeft className="bg-white text-[20px]" /> */}
          <h2 className="bg-white font-bold text-[20px] text-center">
            যোগাযোগ
          </h2>
        </div>
      </Link>
      <div className="px-[15px] flex flex-col gap-[30px] mt-[30px]">
        <div className="bg-white rounded-[10px] p-[20px] text-center">
          <MdAddIcCall className="text-[#ff6347] inline-block text-[40px] font-bold mb-[10px]" />
          <p>ফোন করুন</p>
          <p className="text-[18px] text-gray-600">01830630365 ( WhatsApp )</p>
        </div>
        <div className="bg-white rounded-[10px] p-[20px] text-center">
          <MdEmail className="text-[#ff6347] inline-block text-[40px] font-bold mb-[10px]" />
          <p>ইমেইল করুন</p>
          <p className="text-[18px] text-gray-600">hallo.pfood@gmail.com</p>
        </div>
        <div className="bg-white rounded-[10px] p-[20px] text-center">
          <FaLocationDot className="text-[#ff6347] inline-block text-[40px] font-bold mb-[10px]" />
          <p>অফিস</p>
          <p className="text-[18px] text-gray-600">
            ভূলতা, গাউছিয়া, রূপগঞ্জ, নারায়ণগঞ্জ
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
