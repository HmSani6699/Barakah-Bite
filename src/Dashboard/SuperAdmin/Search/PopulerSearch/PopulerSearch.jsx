import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line, RiFileList2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import axios, { all } from "axios";
import Swal from "sweetalert2";
import Loading from "../../../../Component/Loading/Loading";
import InputField from "../../../../Component/InputField/InputField";

const PopulerSearch = () => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [viewFormType, setviewFormType] = useState("");

  const [allPopulerSearch, setAllPopulerSearch] = useState([]);
  const [updateData, setUpdateData] = useState({});

  const [name, setName] = useState("");

  const [error, setError] = useState(null);

  // 🔁 Fetch all SubCategories
  const handleGetAllPopulerSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl + "/populerSearch");
      if (res?.data?.success) {
        setAllPopulerSearch(res?.data?.data);
        setError("");
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllPopulerSearch();
  }, []);

  // 🔁 Populate form fields when editing
  useEffect(() => {
    if (updateData) {
      setName(updateData?.name || "");
    }
  }, [updateData]);

  // ✅ Create SubCategory
  const handleCreate = async () => {
    if (!name) {
      setError("Name is Requierd");
      return;
    }

    try {
      const res = await axios.post(baseUrl + "/populerSearch", { name });

      if (res?.data?.success) {
        handleGetAllPopulerSearch();
        setOpenForm(false);
        setName("");

        Swal.fire("Success!", "Category created successfully!", "success");
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  // ✅ Update SubCategory
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        baseUrl + "/populerSearch/" + updateData?._id,
        {
          name,
        }
      );

      if (res?.data?.success) {
        handleGetAllPopulerSearch();
        setOpenForm(false);
        setName("");

        Swal.fire("Success!", "Category updated successfully!", "success");
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

  // ❌ Delete SubCategory
  const handleDelete = (id) => {
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
          await axios.delete(baseUrl + `/populerSearch/${id}`);
          handleGetAllPopulerSearch();
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        } catch (error) {
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
    <div className="p-[16px] relative">
      <div className="flex items-center justify-between mb-[20px]">
        <h2 className="text-[20px] font-bold">Populer Search</h2>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setviewFormType("create");
              setOpenForm(true);
              setName("");
            }}
            className="flex items-center gap-[10px] bg-[#ff6347] text-white px-[15px] py-[8px] rounded-[6px]"
          >
            <FaPlus className="h-4 w-4 mr-2" />
            New Text
          </button>
        </div>
      </div>

      {/* ✅ LOADING SPINNER */}
      {loading ? (
        <Loading />
      ) : allPopulerSearch?.length > 0 ? (
        // ✅ CATEGORY TABLE
        <div className="bg-white p-[16px]">
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="text-left pl-[30px] py-[16px]">ID</th>
                <th className="text-center py-[16px]">Name</th>
                <th className="py-[16px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {allPopulerSearch.map((item, i) => (
                <tr key={i} className="w-full">
                  <td className="px-[30px] py-[20px]">{i + 1}</td>
                  <td className="px-[30px] py-[20px] text-center">
                    {item?.name}
                  </td>
                  <td className="px-[30px] py-[20px]">
                    <div className="flex gap-[20px] items-center justify-center">
                      <button
                        onClick={() => {
                          setviewFormType("update");
                          setOpenForm(true);
                          setUpdateData(item);
                        }}
                      >
                        <TbEdit className="text-[25px]" />
                      </button>
                      <button onClick={() => handleDelete(item?._id)}>
                        <RiDeleteBin6Line className="text-[25px] text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // ✅ NO DATA UI
        <div className="text-center my-[30px]">
          <RiFileList2Line className="text-[120px] text-[#a7a6a6] inline-block" />
          <h2 className="mt-[20px]">কোনো Search এখনো যোগ করা হয়নি।</h2>
        </div>
      )}

      {/* ✅ CREATE/UPDATE FORM MODAL */}
      {openForm && (
        <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center">
          <div className="bg-white w-full max-w-[600px] mx-[16px] rounded-lg shadow-lg max-h-[90vh] overflow-y-auto p-[20px]">
            <div className="flex justify-end mb-[20px] sticky top-0 z-10">
              <IoMdCloseCircle
                onClick={() => setOpenForm(false)}
                className="text-red-500 text-[30px] cursor-pointer"
              />
            </div>

            <div className="bg-gray-300 p-[20px] flex flex-col gap-[20px]">
              <h2 className="text-[20px] font-semibold">
                {viewFormType === "create"
                  ? "Add  Populer Search"
                  : "Update  Populer Search"}
              </h2>

              <InputField
                title={"Search Name"}
                value={name}
                setValue={setName}
                placeholder={"Enter Search name"}
                required={true}
                errorMessage={error}
              />
            </div>

            <div className="flex items-end justify-end">
              <button
                onClick={
                  viewFormType === "create" ? handleCreate : handleUpdate
                }
                className="mt-[20px] flex items-center gap-[10px] bg-[#ff6347] text-white px-[15px] py-[8px] rounded-[6px]"
              >
                {viewFormType === "create" ? "Add Search" : "Update Search"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopulerSearch;
