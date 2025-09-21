import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import InputField from "../../../Component/InputField/InputField";
import { IoMdCloseCircle } from "react-icons/io";
import SelectInputField from "../../../Component/SelectInputField/SelectInputField";
import CreateUpdateMenu from "./CreateUpdateMenu";

const Menu = () => {
  const [openForm, setOpenForm] = useState(false);
  const menuItems = [
    {
      id: 1,
      name: "চিকেন বিরিয়ানি",
      price: 350,
      category: "প্রধান খাবার",
      stock: 25,
      image: "/flavorful-chicken-biryani.png",
    },
    {
      id: 2,
      name: "ইলিশ মাছ ভাজা",
      price: 450,
      category: "মাছ",
      stock: 15,
      image: "/hilsa-fish-fry.jpg",
    },
    {
      id: 3,
      name: "রসগোল্লা",
      price: 80,
      category: "মিষ্টি",
      stock: 50,
      image: "/rasgulla-sweet.jpg",
    },
    {
      id: 4,
      name: "ফুচকা",
      price: 120,
      category: "স্ন্যাক্স",
      stock: 30,
      image: "/fuchka-pani-puri.jpg",
    },
    {
      id: 1,
      name: "চিকেন বিরিয়ানি",
      price: 350,
      category: "প্রধান খাবার",
      stock: 25,
      image: "/flavorful-chicken-biryani.png",
    },
    {
      id: 2,
      name: "ইলিশ মাছ ভাজা",
      price: 450,
      category: "মাছ",
      stock: 15,
      image: "/hilsa-fish-fry.jpg",
    },
    {
      id: 3,
      name: "রসগোল্লা",
      price: 80,
      category: "মিষ্টি",
      stock: 50,
      image: "/rasgulla-sweet.jpg",
    },
    {
      id: 1,
      name: "চিকেন বিরিয়ানি",
      price: 350,
      category: "প্রধান খাবার",
      stock: 25,
      image: "/flavorful-chicken-biryani.png",
    },
    {
      id: 2,
      name: "ইলিশ মাছ ভাজা",
      price: 450,
      category: "মাছ",
      stock: 15,
      image: "/hilsa-fish-fry.jpg",
    },
    {
      id: 3,
      name: "রসগোল্লা",
      price: 80,
      category: "মিষ্টি",
      stock: 50,
      image: "/rasgulla-sweet.jpg",
    },
  ];

  return (
    <div className="px-[15px] mb-[100px] mt-[20px]">
      <div className="flex items-center justify-between mb-[20px]">
        <h2 className="text-[20px] font-bold">মেনু ম্যানেজমেন্ট</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setOpenForm(true)}
            className="flex items-center gap-[10px] bg-[#ff6347] text-white px-[15px] py-[8px] rounded-[6px]"
          >
            <FaPlus className="h-4 w-4 mr-2" />
            নতুন আইটেম
          </button>
        </div>
      </div>

      {/*menu item */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white p-[20px] rounded-[10px]"
          >
            <div className="flex items-center gap-[10px]">
              <img
                src="https://i.postimg.cc/zXBTG8qp/Biriyani1.jpg"
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
                <div className="flex items-center justify-between mt-2">
                  <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[16px]">
                    <span className=" font-extrabold  bg-white p-0">৳</span> 250
                  </h2>
                  <span className="font-bold">
                    <span className="font-extrabold  bg-white p-0">৳ </span>
                    {item.price}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-[20px] ">
              <button>
                <TbEdit className="text-[25px]" />
              </button>
              <button>
                <RiDeleteBin6Line className="text-[25px] text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Form  */}
      {openForm && <CreateUpdateMenu setOpenForm={setOpenForm} />}
    </div>
  );
};

export default Menu;
