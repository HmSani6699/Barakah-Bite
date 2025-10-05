import FilterTab from "../FilterTab/FilterTab";
import GroseryShop from "../GroseryShop/GroseryShop";
import RestaurantsShops from "../RestaurantsShops/RestaurantsShops";
import HomeTopNavber from "../../Navber/HomeTopNavber";

import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../../../Component/Loading/Loading";
import Hero from "../Hero/Hero";

import resImage from "../../../../public/images/restaurant.png";
import groceryImage from "../../../../public/images/grocery.png";
import { ImSearch } from "react-icons/im";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { IoClose } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import InputField from "../../../Component/InputField/InputField";
import SelectInputField from "../../../Component/SelectInputField/SelectInputField";
import TextareaField from "../../../Component/TextareaField/TextareaField";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [localStorageItems, setLocalStorageItems] = useState([]);
  const [allRestaurantActiveItems, setAllRestaurantActiveItems] = useState([]);
  const [allSubCategory, setallSubCategory] = useState([]);
  const [tabValue, setTabValue] = useState("সকল");
  const [allHeroData, setAllHeroData] = useState([
    {
      name: "রেস্টুরেন্ট খাবার",
      img: resImage,
    },
    {
      name: "বাজার আইটেম",
      img: groceryImage,
    },
  ]);

  const [allRestaurent, setAllrestaurent] = useState([]);

  const [openPopulerSearchBox, setOpenPopulerSearchBox] = useState(false);
  const [allPopulerSearch, setAllPopulerSearch] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [allSearchItem, setallSearchItem] = useState([]);
  const [title, setTitle] = useState("");
  const [openSearchItem, setOpenSearchItem] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // address
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [area, setArea] = useState("");
  const [gram, setGram] = useState("");
  const [elaka, setElaka] = useState("");
  const [hous, setHous] = useState("");
  const [note, setNote] = useState("");
  const [InsiteOROutsite, setInsiteOROutsite] = useState("inside");

  const [errors, setErrors] = useState({});
  const createValidateForm = () => {
    const newErrors = {};

    // Phone number regex for Bangladeshi format
    const phoneRegex = /^01[3-9]\d{8}$/;

    // Owner Name
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Owner Phone
    const trimmedOwnerPhone = number.trim();
    if (!trimmedOwnerPhone) {
      newErrors.number = "Phone is required";
    } else if (trimmedOwnerPhone.length !== 11) {
      newErrors.number = "Phone number must be exactly 11 digits";
    } else if (!phoneRegex.test(trimmedOwnerPhone)) {
      newErrors.number = "Invalid Bangladeshi phone number";
    }

    // Owner Password
    if (!area.trim()) {
      newErrors.area = "Area is required";
    }

    // Shop Name
    if (!gram.trim()) {
      newErrors.gram = "Gram name is required";
    }

    // Shop Address
    if (!elaka.trim()) {
      newErrors.elaka = "Elaka name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };

  // Add Address
  const handleAddAddress = () => {
    if (!createValidateForm()) {
      return;
    }

    const getDelivery = JSON.parse(localStorage.getItem("deliveryAddress"));

    const newAddress = {
      name,
      number,
      gram,
      elaka,
      hous,
      area,
      note,
      deliveryCharge: InsiteOROutsite === "inside" ? 30 : 50,
      id: uuidv4(),
      date: new Date().toISOString().split("T")[0],
    };

    // get aitem
    if (getDelivery) {
      localStorage.removeItem("deliveryAddress");
      localStorage.setItem("deliveryAddress", JSON.stringify(newAddress));
      const getItem = localStorage.getItem("deliveryAddress");
      setAddress(JSON.parse(getItem));
      setIsFormOpen(false);
    } else {
      localStorage.setItem("deliveryAddress", JSON.stringify(newAddress));
      const getItem = localStorage.getItem("deliveryAddress");
      setAddress(JSON.parse(getItem));
      setIsFormOpen(false);
    }
  };

  // handle add cart item
  const haldleAddToCard = (item) => {
    const getItems = JSON.parse(localStorage.getItem("card"));

    if (getItems) {
      const newCard = [...getItems, item];
      localStorage.setItem("card", JSON.stringify(newCard));

      // get item
      setLocalStorageItems(JSON.parse(localStorage.getItem("card")));
    } else {
      const updateItem = [item];
      localStorage.setItem("card", JSON.stringify(updateItem));

      // get item
      setLocalStorageItems(JSON.parse(localStorage.getItem("card")));
    }
  };

  // Get all main category
  const handleGetAllMainCategory = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/mainCategoryes");
      if (res?.data?.success) {
        setAllHeroData(res?.data?.data);
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

  // get all active restaurant
  const handleGetRestaurantItems = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/populerItems");

      if (res?.data?.success) {
        setAllRestaurantActiveItems(res?.data?.data);
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

  // get sub category
  const handleGetAllSubCategory = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/subcategoryProductsCount");

      if (res?.data?.success) {
        setallSubCategory(res?.data?.data);
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

  // get sub category
  const handleGetAllShop = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/allShops");

      if (res?.data?.success) {
        setAllrestaurent(res?.data?.data);
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

  useEffect(() => {
    handleGetAllMainCategory();
    handleGetAllSubCategory();
    handleGetRestaurantItems();
    handleGetAllShop();
  }, [tabValue]);

  // handle top Search
  // Get all populer search
  const handleGetPopulerSearch = async () => {
    setOpenPopulerSearchBox(true);

    try {
      const res = await axios.get(baseUrl + "/populerSearch");
      if (res?.data?.success) {
        setAllPopulerSearch(res?.data?.data);
      }
    } catch (error) {
      console.log(error);

      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  // handle get search product & item
  const handleGetSearchItem = async (value) => {
    setContentLoading(true);
    try {
      let url;

      if (value) {
        url = `${baseUrl}/searchProduct?productName=${value}`;
        setTitle(value);
      }
      if (searchValue) {
        url = `${baseUrl}/searchProduct?productName=${searchValue}`;
        setTitle(searchValue);
      }

      const res = await axios.get(url);
      if (res?.data?.success) {
        setallSearchItem(res?.data?.data);
        setOpenPopulerSearchBox(false);
        setsearchValue("");
        setContentLoading(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
      setContentLoading(false);
    } finally {
      setContentLoading(false);
    }
  };

  // convert english to bangla number
  function toBanglaDigits(input) {
    const map = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };
    return String(input).replace(/\d/g, (d) => map[d]);
  }

  return (
    <div
      className={` relative ${localStorageItems?.length > 0 && "pb-[50px]"}`}
    >
      <>
        {!loading ? (
          <>
            <HomeTopNavber
              handleGetPopulerSearch={handleGetPopulerSearch}
              openPopulerSearchBox={openPopulerSearchBox}
              setOpenPopulerSearchBox={setOpenPopulerSearchBox}
              searchValue={searchValue}
              setsearchValue={setsearchValue}
              handleGetSearchItem={handleGetSearchItem}
              setIsFormOpen={setIsFormOpen}
              address={address}
            />

            {openSearchItem ? (
              <div>
                {contentLoading ? (
                  <Loading />
                ) : (
                  <div>
                    {" "}
                    {allSearchItem?.length > 0 ? (
                      <div className="mt-[85px] mb-[90px] lg:mt-[60px] px-[16px]">
                        <div className="flex items-center justify-between rounded-full px-[20px] py-[4px] bg-white  border-[2px] border-gray-300 w-[60%] ">
                          <div className="flex items-center gap-[10px] ">
                            <ImSearch className="text-[20px] text-gray-500 bg-white" />
                            <h1> {title && title}</h1>
                          </div>
                          <button
                            onClick={() => {
                              setallSearchItem([]);
                              setsearchValue("");
                              setOpenSearchItem(false);
                            }}
                          >
                            <IoClose />
                          </button>
                        </div>
                        <h2 className="my-[16px]">
                          {toBanglaDigits(allSearchItem?.length)} টি
                          শপ/রেস্তোরাঁয় পাওয়া গেছে
                        </h2>
                        {allSearchItem?.map((item, i) => (
                          <FoodCard key={i} item={item} height="h-[200px]" />
                        ))}
                      </div>
                    ) : (
                      <div className="mt-[85px] mb-[90px] lg:mt-[60px] px-[16px]">
                        <div className="flex items-center justify-between rounded-full px-[20px] py-[4px] bg-white  border-[2px] border-gray-300 w-[60%] ">
                          <div className="flex items-center gap-[10px] ">
                            <ImSearch className="text-[20px] text-gray-500 bg-white" />
                            <h1> {title && title}</h1>
                          </div>
                          <button
                            onClick={() => {
                              setallSearchItem([]);
                              setsearchValue("");
                              setOpenSearchItem(false);
                            }}
                          >
                            <IoClose />
                          </button>
                        </div>

                        <div className="text-center mt-10 px-[16px]">
                          <p className="text-gray-600 mt-2">
                            দুঃখিত! আপনার খোঁজা আইটেমটি আমরা এই মুহূর্তে খুঁজে
                            পাইনি। আপনি চাইলে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ
                            করতে পারেন, আমরা আপনার প্রয়োজন অনুযায়ী সর্বোচ্চ
                            চেষ্টা করব আইটেমটি সরবরাহ করতে।
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
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Banner />
                <Hero allData={allHeroData} />
                <FilterTab
                  haldleAddToCard={haldleAddToCard}
                  allRestaurantActiveItems={allRestaurantActiveItems}
                  setTabValue={setTabValue}
                  tabValue={tabValue}
                />
                <GroseryShop allSubCategory={allSubCategory} />
                <RestaurantsShops allRestaurent={allRestaurent} />
                <ToastContainer />
              </div>
            )}

            {/* <PopularItem /> */}
            {localStorageItems?.length > 0 && (
              <div className="bg-red-400 fixed bottom-[80px] left-0 z-[500] w-full py-[10px] text-white">
                {localStorageItems?.length} আইটেম
              </div>
            )}
            <ToastContainer />
          </>
        ) : (
          <div className="mt-[100px] lg:h-screen">
            <Loading />
          </div>
        )}
      </>

      {/* top search box */}
      {openPopulerSearchBox && (
        <div>
          <div
            onClick={() => {
              setOpenPopulerSearchBox(false);
              setsearchValue("");
            }}
            className="fixed inset-0 bg-[#000000d9] z-[200] flex items-start justify-center overflow-y-scroll h-screen w-full top-[70px]"
          ></div>

          <div className="fixed  bg-[#fff] z-[200] flex items-start justify-center overflow-y-scroll rounded-[15px] top-[85px] left-[16px] right-[16px]">
            <div className=" p-[16px] rounded-[15px] bg-white w-full">
              <h2 className="text-[#2E3138] text-[16px] font-semibold">
                জনপ্রিয় অনুসন্ধান
              </h2>
              <div className="mt-[16px] flex flex-wrap gap-[16px]">
                {allPopulerSearch?.length > 0 &&
                  allPopulerSearch?.map((item, i) => (
                    <button
                      onClick={() => {
                        setOpenSearchItem(true);
                        handleGetSearchItem(item?.name);
                      }}
                      key={i}
                      className=" bg-[#ff6347] text-white px-[20px] py-[4px] rounded-full text-[12px] "
                    >
                      {item?.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* address add */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-start justify-center overflow-y-scroll h-screen w-full">
          <div className="my-[40px]  mx-[15px] p-[20px] rounded-[10px] bg-white  w-[700px] mt-[80px]">
            <div className="flex items-end justify-end mb-[20px]">
              <IoMdCloseCircle
                onClick={() => setIsFormOpen(false)}
                className="text-red-500 text-[30px] cursor-pointer"
              />
            </div>

            <div className="w-full">
              <h2 className="text-center text-[20px] font-bold mb-[20px]">
                নতুন ঠিকানা যোগ করুন
              </h2>

              <div className="grid grid-cols-2 gap-[20px]">
                <InputField
                  title={"আপনার নাম"}
                  placeholder={"এখানে আপনার নাম লিখুন"}
                  value={name}
                  setValue={setName}
                  required={true}
                  errorMessage={errors?.name}
                />{" "}
                <InputField
                  title={"কন্টাক্ট নম্বর"}
                  placeholder={"আপনার মোবাইল নম্বর দিন"}
                  value={number}
                  setValue={setNumber}
                  required={true}
                  errorMessage={errors?.number}
                />
                <SelectInputField
                  title="থানা"
                  value={area}
                  setValue={setArea}
                  options={[
                    { value: "রূপগঞ্জ", label: "রূপগঞ্জ" },
                    { value: "আড়াইহাজার", label: "আড়াইহাজার" },
                    { value: "সোনারগাঁ", label: "সোনারগাঁ" },
                  ]}
                  required={true}
                  errorMessage={errors?.area}
                />
                <InputField
                  title={"গ্রাম"}
                  placeholder={"গ্রাম এর নাম লিখুন"}
                  value={gram}
                  setValue={setGram}
                  required={true}
                  errorMessage={errors?.gram}
                />{" "}
                <InputField
                  title={"এলাকা / পাড়া"}
                  placeholder={"এলাকার নাম লিখুন"}
                  value={elaka}
                  setValue={setElaka}
                  required={true}
                  errorMessage={errors?.elaka}
                />
                <InputField
                  title={"বাসা/হোল্ডিং, রোড নং"}
                  placeholder={"বাসা নং, রোড নং এবং পাড়ার নাম লিখুন"}
                  value={hous}
                  setValue={setHous}
                />
                <div className="col-span-2">
                  {/* Inside Bazar */}
                  <label className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={InsiteOROutsite === "inside"}
                      onChange={() => setInsiteOROutsite("inside")}
                      className="h-5 w-5 accent-green-500"
                    />
                    <div className="flex items-center gap-[10px]">
                      <p className="font-medium text-gray-800">Inside Bazar</p>
                      <p className="text-sm text-gray-600">
                        ( গাউসিয়া কেন্দ্রের কাছের এলাকা )
                      </p>
                    </div>
                  </label>

                  {/* Outside Bazar */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={InsiteOROutsite === "outside"}
                      onChange={() => setInsiteOROutsite("outside")}
                      className="h-5 w-5 accent-orange-500"
                    />
                    <div className="flex items-center gap-[10px]">
                      <p className="font-medium text-gray-800">Outside Bazar</p>
                      <p className="text-sm text-gray-600">
                        ( গাউসিয়া থেকে দূরের এলাকা )
                      </p>
                    </div>
                  </label>
                </div>
                <div className="col-span-2">
                  <TextareaField
                    title={"বিশেষ নোট (ঐচ্ছিক)"}
                    placeholder={
                      "ডেলিভারি সংক্রান্ত কোনো বিশেষ নির্দেশনা থাকলে এখানে লিখুন..."
                    }
                    bg={"bg-[#eff1f1]"}
                    value={note}
                    setValue={setNote}
                  />
                </div>
              </div>

              <button
                onClick={handleAddAddress}
                className="mt-[30px] w-full bg-[#ff6347] text-white py-[10px] rounded-[10px]"
              >
                ঠিকানা সেভ করুন
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Home;
