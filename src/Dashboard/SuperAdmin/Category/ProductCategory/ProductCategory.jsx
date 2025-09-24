import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line, RiFileList2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import InputField from "../../../../Component/InputField/InputField";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../../../Component/Loading/Loading";
import SelectInputField from "../../../../Component/SelectInputField/SelectInputField";

const ProductCategory = () => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [viewFormType, setviewFormType] = useState("");

  const [allMainCategory, setAllMainCategory] = useState([]);
  const [allSubCategory, setAllSubCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [updateData, setUpdateData] = useState({});

  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [name, setName] = useState("");

  // 🔁 Fetch all SubCategories
  const handleGetAllCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl + "/productCategoryes");
      if (res?.data?.success) {
        setAllCategory(res?.data?.data);
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

  // 🔁 Fetch all MainCategories for select dropdown
  const handleGetAllMainCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl + "/mainCategoryes");
      if (res?.data?.success) {
        const options = res.data.data.map((item) => ({
          label: item.name,
          value: item._id,
        }));
        setAllMainCategory(options);
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

  // 🔁 Fetch all SubCategories for select dropdown
  const handleGetAllSubCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl + "/subCategoryes");
      if (res?.data?.success) {
        const options = res.data.data.map((item) => ({
          label: item.name,
          value: item._id,
        }));
        setAllSubCategory(options);
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
    handleGetAllCategory();
    handleGetAllMainCategory();
    handleGetAllSubCategory();
  }, []);

  // 🔁 Populate form fields when editing
  useEffect(() => {
    if (updateData) {
      setName(updateData?.name || "");
      setMainCategory(updateData?.mainCategory?._id || "");
    }
  }, [updateData]);

  // ✅ Create SubCategory
  const handleCreate = async () => {
    try {
      const res = await axios.post(baseUrl + "/productCategoryes", {
        name,
        mainCategory,
        subCategory,
      });

      if (res?.data?.success) {
        handleGetAllCategory();
        setOpenForm(false);
        setName("");
        setMainCategory("");
        setSubCategory("");
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
        baseUrl + "/productCategoryes/" + updateData?._id,
        {
          name,
          mainCategory,
          subCategory,
        }
      );

      if (res?.data?.success) {
        handleGetAllCategory();
        setOpenForm(false);
        setName("");
        setMainCategory("");
        setSubCategory("");
        Swal.fire("Success!", "Category updated successfully!", "success");
      }
    } catch (error) {
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
          await axios.delete(baseUrl + `/productCategoryes/${id}`);
          handleGetAllCategory();
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
        <h2 className="text-[20px] font-bold">Product Catecory</h2>
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
            New Category
          </button>
        </div>
      </div>

      {/* ✅ LOADING SPINNER */}
      {loading ? (
        <Loading />
      ) : allCategory?.length > 0 ? (
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
              {allCategory.map((item, i) => (
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
          <h2 className="mt-[20px]">কোনো Category এখনো যোগ করা হয়নি।</h2>
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
                  ? "Add Product Category"
                  : "Update Product Category"}
              </h2>

              <SelectInputField
                title={"Main Catecory"}
                options={allMainCategory}
                value={mainCategory}
                setValue={setMainCategory}
              />

              <SelectInputField
                title={"Sub Catecory"}
                options={allSubCategory}
                value={subCategory}
                setValue={setSubCategory}
              />

              <InputField
                title={"Product Category Name"}
                value={name}
                setValue={setName}
                placeholder={"Enter sub category name"}
              />
            </div>

            <div className="flex items-end justify-end">
              <button
                onClick={
                  viewFormType === "create" ? handleCreate : handleUpdate
                }
                className="mt-[20px] flex items-center gap-[10px] bg-[#ff6347] text-white px-[15px] py-[8px] rounded-[6px]"
              >
                {viewFormType === "create" ? "Add Category" : "Update Category"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
