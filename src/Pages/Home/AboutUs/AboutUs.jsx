import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

import logo from "../../../../public/images/login.png";

const AboutUs = () => {
  return (
    <div className="mb-[120px]">
      <Link to={"/profile"}>
        <div className="bg-white h-[65px]  flex items-center gap-[15px] px-[15px] top_header_shadow">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[16px] text-[#6b7280]">
            আমাদের সম্পর্কে
          </h2>
        </div>
      </Link>
      {/*  */}

      <div className="mt-[30px]">
        <div className="px-[20px] h-[250px] w-full">
          <img className="h-full w-full rounded-[10px]" src={logo} alt="logo" />
        </div>

        <div className="px-[20px]">
          <h2 className="text-[20px] font-bold text-center my-[20px]">
            আমাদের গল্প
          </h2>
          <p className="text-justify text-gray-600">
            "PFood-( পি ফুড )" শুধুমাত্র একটি ফুড ডেলিভারি অ্যাপ নয়, এটি আমাদের
            প্রিয় রূপগঞ্জ অঞ্চলের মানুষের জীবনযাত্রাকে আরও সহজ ও আধুনিক করার
            একটি আন্তরিক প্রচেষ্টা। আমরা দেখেছি, শত ব্যস্ততার মাঝে আমাদের এলাকার
            মানুষের জন্য অনলাইনে তাদের পছন্দের রেস্টুরেন্ট থেকে খাবার অর্ডার
            করার কোনো সহজ ব্যবস্থা নেই।
          </p>
          <p className="mt-[20px] text-justify text-gray-600">
            এই সমস্যার সমাধান করতেই আমাদের এই উদ্যোগ। আমরা চাই, রূপগঞ্জের
            প্রতিটি মানুষ যেন ঘরে বসেই তাদের প্রিয় খাবার উপভোগ করতে পারে, সময়
            বাঁচাতে পারে এবং ডিজিটাল বাংলাদেশের সুফল ভোগ করতে পারে। আমাদের
            লক্ষ্য হলো স্থানীয় রেস্টুরেন্টগুলোকে একটি ডিজিটাল প্ল্যাটফর্ম দেওয়া
            এবং এলাকার মানুষের জন্য নতুন কর্মসংস্থান তৈরি করা। আপনাদের ভালোবাসা
            ও সমর্থনই আমাদের চলার পথের পাথেয়।
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
