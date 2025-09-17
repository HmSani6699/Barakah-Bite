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

import { useState } from "react";
import notImage from "../../../../public/images/notimage.svg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const Cetegories = () => {
  const [mani_cetegory, setMainCetegory] = useState("খাবার");
  const [sub_cetegory, setSubCetegory] = useState("");

  const allCetegory = [
    {
      main_category: "খাবার",
      image: "https://i.postimg.cc/0jC2VnwK/cooking.webp", // main category image
      sub_categories: [
        {
          name: "ফাস্ট ফুড",
          image: "https://i.postimg.cc/3x3X1RjG/fast-food.webp",
          items: [
            {
              name: "বার্গার",
              image: "https://i.postimg.cc/8C6nGfYt/burger.webp",
            },
            {
              name: "পিজ্জা",
              image: "https://i.postimg.cc/3JZV1pD2/pizza.webp",
            },
            {
              name: "হট ডগ",
              image: "https://i.postimg.cc/qR09h6Mz/hotdog.webp",
            },
            {
              name: "স্যান্ডউইচ",
              image: "https://i.postimg.cc/W1Q7y8cZ/sandwich.webp",
            },
            {
              name: "শাওয়ারমা",
              image: "https://i.postimg.cc/3JjP4gDd/shawarma.webp",
            },
            {
              name: "ফ্রেঞ্চ ফ্রাই",
              image: "https://i.postimg.cc/mgGQk7j2/french-fries.webp",
            },
          ],
        },
        {
          name: "ভাজাপোড়া / চিকেন আইটেম",
          image: "https://i.postimg.cc/3JQ8s5Kz/fried-chicken.webp",
          items: [
            {
              name: "চিকেন ফ্রাই",
              image: "https://i.postimg.cc/fyY9XJ6P/chicken-fry.webp",
            },
            {
              name: "ফ্রাইড উইংস",
              image: "https://i.postimg.cc/7hTf2Jyf/fried-wings.webp",
            },
            {
              name: "বিবিকিউ চিকেন",
              image: "https://i.postimg.cc/NfZ5xCwB/bbq-chicken.webp",
            },
          ],
        },
        {
          name: "পাস্তা ও নুডলস",
          image: "https://i.postimg.cc/3x3Q3t3h/pasta.webp",
          items: [
            {
              name: "পাস্তা",
              image: "https://i.postimg.cc/9F0P7kR7/pasta2.webp",
            },
            {
              name: "নুডলস",
              image: "https://i.postimg.cc/dVvT5jMZ/noodles.webp",
            },
            {
              name: "স্প্যাগেটি",
              image: "https://i.postimg.cc/8kK7YgHt/spaghetti.webp",
            },
            {
              name: "চাউমিন",
              image: "https://i.postimg.cc/mg1hv8rR/chaumin.webp",
            },
          ],
        },
        {
          name: "স্ট্রিট ফুড",
          image: "https://i.postimg.cc/3x3Q3t3h/street-food.webp",
          items: [
            {
              name: "ফুচকা",
              image: "https://i.postimg.cc/qR5G4wGs/fuchka.webp",
            },
            {
              name: "চটপটি",
              image: "https://i.postimg.cc/7hT9f8kR/chotpoti.webp",
            },
            {
              name: "ঝালমুড়ি",
              image: "https://i.postimg.cc/5yHf2JkP/jhalmuri.webp",
            },
            {
              name: "সিঙ্গারা",
              image: "https://i.postimg.cc/W3kP6yGh/singara.webp",
            },
            {
              name: "সমুচা",
              image: "https://i.postimg.cc/4N4H7kqR/samosa.webp",
            },
            { name: "রোল", image: "https://i.postimg.cc/6qQk4r2b/roll.webp" },
          ],
        },
        {
          name: "দেশি খাবার",
          image: "https://i.postimg.cc/2y1T3kL8/deshi-food.webp",
          items: [
            {
              name: "খিচুড়ি",
              image: "https://i.postimg.cc/Qtd4H5Yf/kichuri.webp",
            },
            {
              name: "তেহারি / বিরিয়ানি",
              image: "https://i.postimg.cc/2Sd4K7kP/tehari-biryani.webp",
            },
            {
              name: "হালিম",
              image: "https://i.postimg.cc/xjQy5rGh/halim.webp",
            },
            {
              name: "কাবাব",
              image: "https://i.postimg.cc/7Y1P3hTt/kabab.webp",
            },
          ],
        },
        {
          name: "মিষ্টি / সুইটস",
          image: "https://i.postimg.cc/3x3Q3t3h/sweets.webp",
          items: [
            {
              name: "রসগোল্লা",
              image: "https://i.postimg.cc/1t7sG8kR/rosogolla.webp",
            },
            {
              name: "সন্দেশ",
              image: "https://i.postimg.cc/2yT5F7kR/sandesh.webp",
            },
            {
              name: "চমচম",
              image: "https://i.postimg.cc/3yR7K6kR/chomchom.webp",
            },
            {
              name: "লাড্ডু",
              image: "https://i.postimg.cc/4yT6F8kR/laddu.webp",
            },
            {
              name: "পায়েস",
              image: "https://i.postimg.cc/5yT8F7kR/payesh.webp",
            },
            {
              name: "মিল্ককেক",
              image: "https://i.postimg.cc/6yT9F7kR/milkcake.webp",
            },
          ],
        },
      ],
    },
    {
      main_category: "মুদি বাজার",
      image: "https://i.postimg.cc/m2qK0MyP/fresh-vegetables.webp",
      sub_categories: [
        {
          name: "শাকসবজি",
          image: "https://i.postimg.cc/m2qK0MyP/vegetables.webp",
          items: [
            { name: "আলু", image: "https://i.postimg.cc/7hT9f7kR/alu.webp" },
            { name: "পটল", image: "https://i.postimg.cc/1yT7F6kR/patal.webp" },
            {
              name: "বাঁধাকপি",
              image: "https://i.postimg.cc/2yT7K8kR/badhakopi.webp",
            },
            {
              name: "ফুলকপি",
              image: "https://i.postimg.cc/3yT8G9kR/fulkopi.webp",
            },
            {
              name: "বেগুন",
              image: "https://i.postimg.cc/4yT9H0kR/begun.webp",
            },
            {
              name: "ঢেঁড়স",
              image: "https://i.postimg.cc/5yT0J1kR/dhers.webp",
            },
          ],
        },
        {
          name: "ফলমূল",
          image: "https://i.postimg.cc/6yT1K2kR/fruits.webp",
          items: [
            { name: "আপেল", image: "https://i.postimg.cc/1yT2F3kR/apple.webp" },
            {
              name: "কমলা",
              image: "https://i.postimg.cc/2yT3G4kR/orange.webp",
            },
            { name: "কলা", image: "https://i.postimg.cc/3yT4H5kR/banana.webp" },
            {
              name: "পেয়ারা",
              image: "https://i.postimg.cc/4yT5J6kR/peara.webp",
            },
            { name: "আম", image: "https://i.postimg.cc/5yT6K7kR/mango.webp" },
            {
              name: "আনারস",
              image: "https://i.postimg.cc/6yT7L8kR/pineapple.webp",
            },
          ],
        },
        // অন্যান্য sub-categories একইভাবে
      ],
    },
  ];

  // selected main category object
  const selectedMain = allCetegory.find(
    (cat) => cat.main_category === mani_cetegory
  );

  return (
    <div className="mb-[90px]">
      {/* Header */}
      <div className="bg-white flex items-center gap-[15px] p-[16px] top_header_shadow">
        <h2 className="bg-white text-[#171717] font-semibold text-[16px]">
          Barakha Mart
        </h2>
      </div>

      {/* Main content */}
      <div className="bg-white mt-[10px] flex gap-[16px] py-[16px] pr-[16px]">
        {/* Left: Main Categories */}
        <div className="flex flex-col gap-[16px] ">
          {allCetegory.map((item, i) => (
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
                <img className="w-[40px]" src={item?.image} alt="" />
              ) : (
                <img src={notImage} alt="" />
              )}
              <p className="text-[14px] mt-[6px]">{item.main_category}</p>
            </button>
          ))}
        </div>

        {/* Right: Sub-category & Items */}
        <div className="flex-1 flex flex-col gap-[16px] w-[80%]">
          {selectedMain?.sub_categories?.map((sub, i) => (
            <div key={i}>
              {/* Sub-category button */}
              <button
                onClick={() =>
                  setSubCetegory(sub.name === sub_cetegory ? "" : sub.name)
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
                  {sub.items.map((item, idx) => (
                    <Link to={"/categories/item/চাউল"}>
                      {" "}
                      <div
                        key={idx}
                        className="flex flex-col gap-[16px] items-center"
                      >
                        {item?.image ? (
                          <img className="w-[40px]" src={item?.image} alt="" />
                        ) : (
                          <img className="w-[50px]" src={notImage} alt="" />
                        )}
                        <p className="text-[14px] text-center">{item?.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cetegories;
