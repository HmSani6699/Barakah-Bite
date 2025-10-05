import React from "react";
import logo from "../../../public/images/logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-10">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Link to={"/"}>
            <div className=" w-[150px] mb-[16px]">
              <img src={logo} alt="logo" className="w-full h-full " />
            </div>
          </Link>
          <p className="text-sm text-gray-300">
            সুস্বাদু খাবার ও তাজা মুদিপণ্য আপনার দোরগোড়ায় পৌঁছে দিচ্ছি – দ্রুত ও
            নির্ভরযোগ্য সেবায়।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">দ্রুত লিংক</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">আমাদের সম্পর্কে</a>
            </li>
            <li>
              <a href="#">নিয়মাবলী</a>
            </li>
            <li>
              <a href="#">রিফান্ড এবং রিটার্ন নীতি</a>
            </li>
            <li>
              <a href="#">গোপনীয়তা নীতি</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">যোগাযোগ করুন</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">আমাদের সাথে যোগাযোগ করুন</a>
            </li>
            <li>
              <a href="#">প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী</a>
            </li>
            <li>
              <a href="#">কিভাবে কিনবেন</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">সাপোর্ট দরকার?</h3>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-pink-500"
              >
                <FaMapMarkerAlt className="text-[#0f172a]" />
              </a>
              <p>হাউস# ৪৪, রোড নং ২/এ, ভূলতা, গাউছিয়া, রূপগঞ্জ, নারায়ণগঞ্জ</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-pink-500"
              >
                <FaPhoneAlt className="text-[#0f172a]" />
              </a>

              <a
                href="https://wa.me/8801996359111"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <p>+8801996-359111 ( WhatsApp )</p>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-pink-500"
              >
                <FaEnvelope className="text-[#0f172a]" />
              </a>
              <p>hallo.pfood@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0f172a] py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-white font-semibold text-sm">
              আমাদের সাথে যুক্ত থাকুন
            </span>
            <div className="flex gap-3 text-[#0f172a] text-lg">
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-sky-500"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-red-500"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Payments */}
          <div className="flex  items-center  gap-[10px] mt-[30px]">
            <h2 className="text-[#99a1af] font-semibold text-sm ">
              পেমেন্ট গ্রহণযোগ্য
            </h2>

            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-[30px] w-[50px] bg-white p-1 rounded shadow"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="h-[30px] w-[50px] bg-white p-1 rounded shadow"
            /> */}

            <img
              src="https://download.logo.wine/logo/BKash/BKash-Logo.wine.png"
              alt="Bkash"
              className="h-[30px] w-[50px] bg-white p-1 rounded shadow"
            />
            <img
              src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
              alt="Nagad"
              className="h-[30px] w-[50px] bg-white p-1 rounded shadow"
            />
            <img
              src="https://i.postimg.cc/NFZtSzJj/Rocket-Payment-Integration-removebg-preview.png"
              alt="Rocket"
              className="h-[30px] w-[50px] bg-white p-1 rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600  py-4 text-center text-sm text-gray-400">
        © ২০২৫ PFood & পি ফুড। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;
