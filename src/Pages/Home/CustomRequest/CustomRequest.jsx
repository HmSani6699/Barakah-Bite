import {
  FaWhatsapp,
  FaPhoneAlt,
  FaFacebookMessenger,
  FaArrowLeft,
} from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useCart } from "../../../Component/CartContext/CartContext";
import { Link } from "react-router";

const CustomRequest = () => {
  const { totalCardCount } = useCart();

  return (
    <div className="min-h-screen">
      <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between lg:hidden">
        <Link to={"/"} className="flex items-center gap-[15px]">
          <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
          <h2 className="bg-white font-bold text-[14px] text-[#6b7280]">
            আমার প্রয়োজন
          </h2>{" "}
        </Link>

        <Link to={"/card"} className="relative">
          <LiaShoppingCartSolid className="bg-white text-[35px] text-[#6b7280]" />
          {totalCardCount > 0 && (
            <span className="absolute top-0 -right-[5px] text-[#fff] z-[20] text-[10px] bg-[#ff6347] rounded-full h-[15px] w-[15px] flex items-center justify-center">
              {totalCardCount}
            </span>
          )}
        </Link>
      </div>

      <div className=" flex flex-col items-center justify-center px-5 mt-[60px]">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          🛍️ আমার প্রয়োজন
        </h1>
        <p className="text-gray-600 text-center mb-8">
          আপনি যে পণ্যটি খুঁজে পাচ্ছেন না, আমাদের জানাতে নিচের যেকোনো মাধ্যমে
          যোগাযোগ করুন 👇
        </p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          {/* WhatsApp */}
          <a
            href="https://wa.me/8801830630365" // এখানে তোমার WhatsApp নম্বর বসাও
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-medium py-3 rounded-xl shadow-md hover:bg-[#1ebe5b] transition-all"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp-এ যোগাযোগ করুন
          </a>

          {/* Phone Call */}
          <a
            href="tel:+8801830630365" // এখানে তোমার ফোন নম্বর বসাও
            className="flex items-center justify-center gap-3 bg-[#007AFF] text-white font-medium py-3 rounded-xl shadow-md hover:bg-[#0064d6] transition-all"
          >
            <FaPhoneAlt className="text-xl" />
            কল করুন
          </a>

          {/* Messenger */}
          <a
            href="https://m.me/pfood" // এখানে তোমার FB Page Username বসাও
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#0084FF] text-white font-medium py-3 rounded-xl shadow-md hover:bg-[#006ee6] transition-all"
          >
            <FaFacebookMessenger className="text-xl" />
            মেসেঞ্জারে পাঠান
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-8">
          আমরা দ্রুত আপনার প্রয়োজনের জবাব দেবো 💬
        </p>
      </div>
    </div>
  );
};

export default CustomRequest;
