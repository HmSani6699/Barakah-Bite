import React from "react";
import {
  FaArrowLeft,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";
import meImage from "../../public/images/me.jpg";

const Developer = () => {
  return (
    <div className="mb-[30px]">
      <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
        <Link to={"/profile"} className="flex items-center gap-[15px]">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
            ডেভেলপার
          </h2>
        </Link>
      </div>

      {/*  */}

      <div className=" mt-[20px] px-[20px]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[100px]  h-[100px] rounded-full border-[2px] border-white shadow-md overflow-hidden">
            <img className="w-full h-full" src={meImage} alt="" />
          </div>
          <h2 className="text-[25px] font-semibold mt-[16px]">
            মোঃ সাদিকুর রহমান সানী
          </h2>
          <p>প্রতিষ্ঠাতা ও ডেভেলপার, ডেলিহাট</p>
        </div>

        <p className="mb-[20px] mt-[20px] text-justify">
          আমি সাদিকুর রহমান সানী, এই এলাকারই কৃতি সন্তান । আমার জন্ম ও বেড়ে ওঠা
          এখানেই। আমি সব সময় চেয়েছি আমার এলাকার মানুষের জন্য আধুনিক প্রযুক্তির
          মাধ্যমে ভালো কিছু করতে। 'ডেলিহাট' আমার সেই স্বপ্নেরই একটি বাস্তব রূপ।
        </p>
        <p className="text-justify">
          আমি দেখেছি, আমাদের এলাকার মানুষ কতটা কর্মঠ ও ব্যস্ত। এই ব্যস্ততার মাঝে
          তাদের পছন্দের খাবার ও নিত্যপ্রয়োজনীয় বাজার অর্ডার করার প্রক্রিয়াটিকে
          আরও সহজ ও আনন্দদায়ক করার লক্ষ্যেই আমি এই অ্যাপটি তৈরি করেছি। আমার মূল
          উদ্দেশ্য হলো, আমাদের স্থানীয় রেস্টুরেন্টগুলোকে একটি ডিজিটাল পরিচয়
          দেওয়া এবং আমাদের এলাকার প্রতিটি মানুষের দোরগোড়ায় প্রযুক্তিগত সুবিধা
          পৌঁছে দেওয়া। আপনাদের সকলের সমর্থন ও ভালোবাসা পেলে এই যাত্রাকে আমরা আরও
          অনেক দূরে নিয়ে যেতে পারব।
        </p>
        <div className="flex items-center justify-center gap-[20px] mt-[30px]">
          <Link to={"https://www.facebook.com/share/16njEMUZVT/"}>
            <FaFacebook className="text-[25px]" />
          </Link>
          {/* <Link>
            <FaLinkedin className="text-[25px]" />
          </Link> */}
          <Link to={"https://wa.me/8801996359111"}>
            <FaWhatsapp className="text-[25px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Developer;
