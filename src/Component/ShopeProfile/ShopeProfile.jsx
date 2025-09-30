import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation, useParams } from "react-router";
import FoodCard from "../FoodCard/FoodCard";
import SearchInputField from "../SearchInputField/SearchInputField";
import { HiShoppingCart } from "react-icons/hi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useCart } from "../CartContext/CartContext";
import noImage from "../../../public/images/notimage.svg";
import Loading from "../Loading/Loading";

const ShopeProfile = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const [loading, setLoading] = useState(false);
  const [contentloading, setContentLoading] = useState(false);
  const { addToCart, totalCardCount } = useCart();

  const [isTabeButton, setIsTabeButton] = useState("সকল");
  const [search, setsearch] = useState("");

  const [allShop, setallShop] = useState([]);
  const [shopTabButton, setShopTabButton] = useState([]);
  const [allItemsData, setAllItemsData] = useState([]);

  const { id } = useParams();

  // get single shop
  const handleGetShop = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`${baseUrl}/shops/${id}`);

      if (res?.data?.success) {
        setallShop(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // get single shop
  const handleGetShopTabButton = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`${baseUrl}/shopTabButton/${id}`);

      if (res?.data?.success) {
        setShopTabButton(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // get single shop
  const handleGetFilterItem = async () => {
    setContentLoading(true);
    try {
      let url = `${baseUrl}/singleRestaurentItems?shopId=${id}`;

      // যদি "সকল" না হয় এবং search না থাকে, itemName যোগ করো
      if (isTabeButton !== "সকল" && !search) {
        url += `&itemName=${isTabeButton}`;
      }

      // যদি search থাকেই, তাহলে itemName হিসেবে search পাঠাও
      if (search) {
        url += `&itemName=${search}`;
      }

      const res = await axios.get(url);

      console.log(res);

      if (res?.data?.success) {
        setAllItemsData(res.data.data);
        setContentLoading(false);
      }
    } catch (error) {
      console.log(error);

      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    } finally {
      setContentLoading(false);
    }
  };

  useEffect(() => {
    handleGetFilterItem();
  }, [isTabeButton, search]);

  useEffect(() => {
    handleGetShop();
    handleGetShopTabButton();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mb-[120px] relative">
          <div className="bg-white h-[65px]   px-[15px] top_header_shadow flex items-center justify-between">
            <Link to={"/"} className="flex items-center gap-[15px]">
              <FaArrowLeft className="bg-white text-[20px] text-[#6b7280]" />
              <h2 className="bg-white font-bold text-[14px] text-[#6b7280]">
                {allShop?.name}
              </h2>
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

          <div className="bg-white h-[80px] text-center flex items-center justify-center relative">
            {allShop?.coverImage ? (
              <img
                className="h-full w-full object-cover"
                src={`${baseImageUrl}/${allShop?.coverImage}`}
                alt="banner"
              />
            ) : (
              <img
                className="h-full w-full object-cover"
                src={noImage}
                alt="banner"
              />
            )}
          </div>

          <div className="px-[20px] absolute top-[110px] left-0 w-full">
            <div className="h-[80px] w-[80px] rounded-full  border-[4px] border-[#eff1f1] shadow-md  overflow-hidden">
              {allShop?.logo ? (
                <img
                  className="h-full w-full object-cover"
                  src={`${baseImageUrl}/${allShop?.logo}`}
                  alt="banner"
                />
              ) : (
                <img
                  className="h-full w-full object-cover"
                  src={noImage}
                  alt="banner"
                />
              )}
            </div>

            <div className="flex items-center gap-[15px]">
              <h2 className=" font-bold text-[16px] text-[#171717]">
                {allShop?.name}
              </h2>

              <MdVerified className="text-blue-600 text-[20px]" />

              <button className="py-[5px] px-[20px] rounded-[8px] bg-[#ff6347] text-white">
                Follow
              </button>
            </div>
            <p className="text-gray-600">10 followers</p>
            <hr className="mt-[20px]" />
          </div>

          <div className="px-[15px] mt-[135px]">
            <SearchInputField value={search} setValue={setsearch} />
          </div>

          {/*  */}
          <div>
            {!search && shopTabButton?.products?.length > 0 && (
              <div className="px-[15px] flex items-center gap-[10px] overflow-auto scrollbar-hide my-[16px]">
                <button
                  className={` ${
                    isTabeButton === "সকল"
                      ? "main_bg_color text-white"
                      : " bg-white text_black_color"
                  }      py-[6px] px-[20px]  rounded-[8px] shadow-sm whitespace-nowrap`}
                  onClick={() => setIsTabeButton("সকল")}
                >
                  সকল
                </button>
                {shopTabButton?.products?.map((item, i) => (
                  <button
                    key={i}
                    className={` ${
                      isTabeButton === item?.name
                        ? "main_bg_color text-white"
                        : " bg-white text_black_color"
                    }      border-gray-300 py-[6px] px-[15px]  rounded-[8px] shadow-sm`}
                    onClick={() => setIsTabeButton(item?.name)}
                  >
                    {item?.name}
                  </button>
                ))}
              </div>
            )}

            {contentloading ? (
              <div className="mt-[100px]">
                <Loading />
              </div>
            ) : (
              <>
                {" "}
                {allItemsData?.length > 0 ? (
                  <div className="px-[15px] mt-[20px] flex flex-col gap-[20px] mb-[20px]">
                    {allItemsData?.map((item, i) => (
                      <FoodCard height="h-[190px]" item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center mt-10 px-[16px]">
                    <p className="text-gray-600 mt-2">
                      দুঃখিত! আপনার খোঁজা আইটেমটি আমরা এই মুহূর্তে খুঁজে পাইনি।
                      আপনি চাইলে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে পারেন,
                      আমরা আপনার প্রয়োজন অনুযায়ী সর্বোচ্চ চেষ্টা করব আইটেমটি
                      সরবরাহ করতে।
                    </p>
                    <a
                      href="https://wa.me/8801996359111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
                    >
                      WhatsApp এ মেসেজ করুন
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default ShopeProfile;
