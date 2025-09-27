// import { useState } from "react";
// import notImage from "../../../../public/images/notimage.svg";
// import { IoIosArrowForward } from "react-icons/io";

// const Cetegories = () => {
//   const [mani_cetegory, setMainCetegory] = useState("");
//   const [sub_cetegory, setSubCetegory] = useState("");

//   const allCetegory = [
//     {
//       main_category: "খাবার",
//       sub_categories: [
//         {
//           name: "ফাস্ট ফুড",
//           items: [
//             "বার্গার",
//             "পিজ্জা",
//             "হট ডগ",
//             "স্যান্ডউইচ",
//             "শাওয়ারমা",
//             "ফ্রেঞ্চ ফ্রাই",
//           ],
//         },
//         {
//           name: "ভাজাপোড়া / চিকেন আইটেম",
//           items: ["চিকেন ফ্রাই", "ফ্রাইড উইংস", "বিবিকিউ চিকেন"],
//         },
//         {
//           name: "পাস্তা ও নুডলস",
//           items: ["পাস্তা", "নুডলস", "স্প্যাগেটি", "চাউমিন"],
//         },
//         {
//           name: "স্ট্রিট ফুড",
//           items: ["ফুচকা", "চটপটি", "ঝালমুড়ি", "সিঙ্গারা", "সমুচা", "রোল"],
//         },
//         {
//           name: "দেশি খাবার",
//           items: ["খিচুড়ি", "তেহারি / বিরিয়ানি", "হালিম", "কাবাব"],
//         },
//         {
//           name: "মিষ্টি / সুইটস",
//           items: ["রসগোল্লা", "সন্দেশ", "চমচম", "লাড্ডু", "পায়েস", "মিল্ককেক"],
//         },
//       ],
//     },
//     {
//       main_category: "মুদি বাজার",
//       sub_categories: [
//         {
//           name: "শাকসবজি",
//           items: ["আলু", "পটল", "বাঁধাকপি", "ফুলকপি", "বেগুন", "ঢেঁড়স"],
//         },
//         {
//           name: "ফলমূল",
//           items: ["আপেল", "কমলা", "কলা", "পেয়ারা", "আম", "আনারস"],
//         },
//         {
//           name: "চাল-ডাল",
//           items: ["আতপ চাল", "বাসমতি চাল", "মসুর ডাল", "মুগ ডাল", "ছোলা ডাল"],
//         },
//         {
//           name: "দুধ ও দুগ্ধজাত পণ্য",
//           items: ["দুধ", "ঘি", "মাখন", "দই", "চিজ"],
//         },
//         {
//           name: "ডিম ও প্রোটিন",
//           items: [
//             "মুরগির ডিম",
//             "হাঁসের ডিম",
//             "মুরগির মাংস",
//             "গরুর মাংস",
//             "মাছ",
//           ],
//         },
//         {
//           name: "স্ন্যাকস ও বিস্কুট",
//           items: ["বিস্কুট", "চিপস", "চানাচুর", "কেক"],
//         },
//         {
//           name: "তেল-মশলা",
//           items: [
//             "সয়াবিন তেল",
//             "সরিষার তেল",
//             "হলুদ গুঁড়া",
//             "মরিচ গুঁড়া",
//             "জিরা",
//             "ধনে",
//           ],
//         },
//         {
//           name: "হোম ও পার্সোনাল কেয়ার",
//           items: ["সাবান", "শ্যাম্পু", "টুথপেস্ট", "ডিটারজেন্ট", "হ্যান্ডওয়াশ"],
//         },
//         {
//           name: "বাড়ির অন্যান্য প্রয়োজনীয় জিনিস",
//           items: [
//             "কাগজের তোয়ালে",
//             "লাইটার",
//             "ব্যাগ",
//             "প্লাস্টিকের পাত্র",
//             "রান্নার সরঞ্জাম",
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="mb-[90px]">
//       <div className="bg-white   flex items-center gap-[15px] p-[16px] top_header_shadow">
//         <h2 className="bg-white text-[#171717] font-semibold text-[16px]">
//           Barakha Mart
//         </h2>
//       </div>

//       {/*  */}

//       <div className="bg-white mt-[10px] flex  gap-[16px] py-[16px] pr-[16px]">
//         <div className="flex flex-col gap-[16px]">
//           {allCetegory &&
//             allCetegory?.map((item, i) => (
//               <button
//                 onClick={() => setMainCetegory(item?.main_category)}
//                 className={` py-[10px] px-[16px] flex flex-col justify-center items-center transition-colors duration-300 hover:bg-[#ff7f61]
//             ${
//               item?.main_category === mani_cetegory
//                 ? "bg-[#ffe5e0] text-white" // selected হলে primary color
//                 : "bg-white text-black" // normal হলে হালকা shade
//             }`}
//               >
//                 <img src={notImage} alt="" />
//                 <p className="text-[14px] mt-[6px]">{item?.main_category} </p>
//               </button>
//             ))}
//         </div>
//         <div className="w-[90%] flex flex-col gap-[16px]">
//           {allCetegory?.map((item, i) => {
//             return item?.sub_categories?.map((item, i) => (
//               <div>
//                 <button className="bg-[#eff1f1] w-full flex items-center justify-between p-[8px] text-[14px] text-[#1e2939]">
//                   <div className="flex items-center gap-[6px]">
//                     <img src={notImage} alt="" />
//                     {item?.name}
//                   </div>
//                   <IoIosArrowForward />
//                 </button>

//                 <div className="grid grid-cols-3 my-[16px]">
//                   {item?.items?.map((item, i) => (
//                     <div className="flex flex-col gap-[16px] ">
//                       <img className="w-[50px]" src={notImage} alt="" />
//                       <p className="text-[14px]"> {item?.slice(0, 10)}..</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ));
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cetegories;

import { useEffect, useState } from "react";
import notImage from "../../../../public/images/notimage.svg";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router";
import axios from "axios";
import Loading from "../../../Component/Loading/Loading";

const Cetegories = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const categoryName = location.state?.name;

  const [mani_cetegory, setMainCetegory] = useState("");
  const [sub_cetegory, setSubCetegory] = useState("");
  const [allData, setAllData] = useState([]);

  // Get all  category
  const handleGetAllCategory = async () => {
    setLoading(true);
    try {
      let res = await axios.get(baseUrl + "/allCategories");
      if (res?.data?.success) {
        setAllData(res?.data?.data);

        if (categoryName) {
          setMainCetegory(categoryName);
        } else {
          setMainCetegory(res?.data?.data[0]?.main_category);
        }
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
    handleGetAllCategory();
  }, []);

  // selected main category object
  const selectedMain = allData.find(
    (cat) => cat.main_category === mani_cetegory
  );

  return (
    <div>
      {" "}
      {loading ? (
        <Loading />
      ) : (
        <div className="mb-[90px]">
          {/* Header */}
          <div className="bg-white flex items-center gap-[15px] p-[16px] top_header_shadow">
            <h2 className="bg-white text-[#171717] font-semibold text-[16px]">
              ক্যাটাগরি
            </h2>
          </div>

          {/* Main content */}
          <div className="bg-white mt-[10px] flex gap-[16px] py-[16px] pr-[16px]">
            {/* Left: Main Categories */}
            <div className="flex flex-col gap-[16px] ">
              {allData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMainCetegory(item.main_category);
                    setSubCetegory(""); // main category change -> sub reset
                  }}
                  className={` py-[10px] px-[16px] flex flex-col justify-center items-center transition-colors duration-300 rounded-r-md
                ${
                  item.main_category === mani_cetegory
                    ? "bg-[#ffe5e0] text-[#ff6347] "
                    : ""
                }`}
                >
                  {item?.image ? (
                    <img
                      className="w-[40px]"
                      src={baseImageUrl + "/" + item?.image}
                      alt=""
                    />
                  ) : (
                    <img src={notImage} alt="" />
                  )}
                  <p className="text-[14px] mt-[6px]">{item.main_category}</p>
                </button>
              ))}
            </div>

            {/* Right: Sub-category & Items */}
            <div className="flex-1 flex flex-col gap-[16px] w-[80%]">
              {selectedMain?.sub_categories?.length > 0 ? (
                selectedMain?.sub_categories?.map((sub, i) => (
                  <div key={i}>
                    {/* Sub-category button */}
                    <button
                      onClick={() =>
                        setSubCetegory(
                          sub.name === sub_cetegory ? "" : sub.name
                        )
                      }
                      className={`bg-[#eff1f1] w-full flex items-center justify-between p-[8px] text-[14px] text-[#1e2939] transition-colors duration-300
                  ${
                    sub.name === sub_cetegory
                      ? "bg-[#ffe5e0] text-white"
                      : "hover:bg-[#e0e4e4]"
                  }`}
                    >
                      <div className="flex items-center gap-[6px]">
                        <img src={notImage} alt="" />
                        <p
                          className={` ${
                            sub.name === sub_cetegory ? "text-[#ff6347]" : ""
                          }`}
                        >
                          {sub.name}
                        </p>
                      </div>
                      <IoIosArrowForward />
                    </button>

                    {/* Items grid */}
                    {sub.name === sub_cetegory && (
                      <div className="grid grid-cols-3 my-[16px] gap-[16px]">
                        {sub?.productCategories?.map((item, idx) => (
                          <Link to={"/categories/item/চাউল"}>
                            {" "}
                            <div
                              key={idx}
                              className="flex flex-col gap-[16px] items-center"
                            >
                              {item?.image ? (
                                <img
                                  className="w-[40px]"
                                  src={baseImageUrl + "/" + item?.image}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="w-[50px]"
                                  src={notImage}
                                  alt=""
                                />
                              )}
                              <p className="text-[14px] text-center">
                                {item?.name}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div>nai</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cetegories;
