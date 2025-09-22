import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line, RiFileList2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import CreateUpdateMenu from "./CreateUpdateMenu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ViewMenu from "./ViewMenu";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../../Component/Loading/Loading";

const Menu = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [opeView, setOpeView] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [viewData, setViewData] = useState();
  const [updateData, setUpdateData] = useState();
  const [viewForm, setViewForm] = useState();
  const [data, setData] = useState([]);

  // handle view data
  const handleView = (data) => {
    setViewData(data);
    setOpeView(true);
  };

  // handle update data
  const handleCreateUpdate = (state) => {
    setViewForm(state);
    setOpenForm(true);
  };

  // Get all products
  const handleGetProduct = async () => {
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const getAllData = await axios.get(
        baseUrl + "/products/seller/" + user?.phone
      );

      if (getAllData?.status === 200) {
        setData(getAllData?.data?.data);
        setLoading(false);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setData([]); // fallback empty if error
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, [setData]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(baseUrl + `/products/${id}`);

          handleGetProduct();

          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="px-[15px] mb-[100px] mt-[20px]">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-between mb-[20px]">
            <h2 className="text-[20px] font-bold">মেনু ম্যানেজমেন্ট</h2>
            <div className="flex gap-2">
              <button
                onClick={() => handleCreateUpdate("create")}
                className="flex items-center gap-[10px] bg-[#ff6347] text-white px-[15px] py-[8px] rounded-[6px]"
              >
                <FaPlus className="h-4 w-4 mr-2" />
                নতুন আইটেম
              </button>
            </div>
          </div>

          {/*menu item */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {!loading && data.length > 0 ? (
              <>
                {data.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white p-[20px] rounded-[10px]"
                  >
                    <div className="flex items-center gap-[10px]">
                      <img
                        src={item?.img}
                        alt={item.name}
                        className="w-[70px] h-[70px] rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item?.variants[0]?.label} - ৳{" "}
                          {item?.variants[0]?.price}
                        </p>
                        <div className="flex items-center justify-between mt-2 gap-[5px]">
                          <h2 className="bg-white font-extrabold p-0 text-gray-500 line-through text-[16px]">
                            <span className=" font-extrabold  bg-white p-0">
                              ৳
                            </span>{" "}
                            {item?.variants[0]?.cutPrice}
                          </h2>
                          <h2>
                            <span className="font-bold">
                              <span className="font-extrabold  bg-white p-0">
                                ৳{" "}
                              </span>
                              {item?.variants[0]?.price}
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => setIsOn(!isOn)}
                        className={`relative flex items-center w-16 h-8 rounded-full transition-colors duration-300  mb-[20px]
        ${isOn ? "bg-green-500" : "bg-gray-300"}`}
                      >
                        <span
                          className={`absolute left-1 text-xs font-bold transition-all duration-300
          ${isOn ? "text-white opacity-100" : "opacity-0"}`}
                        >
                          ON
                        </span>
                        <span
                          className={`absolute right-1 text-xs font-bold transition-all duration-300
          ${!isOn ? "text-gray-600 opacity-100" : "opacity-0"}`}
                        >
                          OFF
                        </span>

                        {/* Circle */}
                        <span
                          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
          ${isOn ? "translate-x-8" : "translate-x-0"}`}
                        />
                      </button>
                      <div className="flex gap-[20px] ">
                        <button onClick={() => handleView(item)}>
                          <MdOutlineRemoveRedEye className="text-[25px]" />
                        </button>
                        <button
                          onClick={() => {
                            handleCreateUpdate("update");
                            setUpdateData(item);
                          }}
                        >
                          <TbEdit className="text-[25px]" />
                        </button>
                        <button onClick={() => handleDelete(item?._id)}>
                          <RiDeleteBin6Line className="text-[25px] text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}{" "}
              </>
            ) : (
              <div className="text-center my-[30px] ">
                <RiFileList2Line className="text-[120px]  text-[#a7a6a6] inline-block" />
                <h2 className="mt-[20px]">কোনো আইটেম এখনো যোগ করা হয়নি।</h2>
              </div>
            )}
          </div>

          {/* Form  */}
          {openForm && (
            <CreateUpdateMenu
              setOpenForm={setOpenForm}
              handleGetProduct={handleGetProduct}
              updateData={updateData}
              viewForm={viewForm}
            />
          )}
          {opeView && <ViewMenu setOpeView={setOpeView} data={viewData} />}
        </>
      )}
    </div>
  );
};

export default Menu;
