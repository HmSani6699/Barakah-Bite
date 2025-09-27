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
import FileInputField from "../../../../Component/FileInputField/FileInputField";
import noImage from "../../../../../public/images/notimage.svg";

const SubCategory = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [viewFormType, setviewFormType] = useState("");

  const [allMainCategory, setAllMainCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [updateData, setUpdateData] = useState({});

  const [preview, setPreview] = useState(null);
  const [mainCategory, setMainCategory] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!mainCategory || mainCategory.trim() === "") {
      newErrors.mainCategory = "Main category is required";
    }

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!image) {
      newErrors.image = "Image is required";
    }

    setErrors(newErrors);

    // যদি কোন error না থাকে তাহলে true return করবে
    return Object.keys(newErrors).length === 0;
  };

  // 🔁 Fetch all SubCategories
  const handleGetAllCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl + "/subCategoryes");
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

  useEffect(() => {
    handleGetAllCategory();
    handleGetAllMainCategory();
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
    if (!validateForm()) {
      return; // validation fail হলে আর submit করবে না
    }

    const formData = {
      name,
      mainCategory,
      icon: image,
    };

    try {
      const res = await axios.post(baseUrl + "/subCategoryes", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res?.data?.success) {
        handleGetAllCategory();
        setOpenForm(false);
        setName("");
        setMainCategory("");
        setImage("");
        setPreview("");
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
    if (!validateForm()) {
      return; // validation fail হলে আর submit করবে না
    }

    const formData = {
      name,
      mainCategory,
      icon: image,
    };

    try {
      const res = await axios.put(
        baseUrl + "/subCategoryes/" + updateData?._id,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res?.data?.success) {
        handleGetAllCategory();
        setOpenForm(false);
        setName("");
        setMainCategory("");
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
          await axios.delete(baseUrl + `/subCategoryes/${id}`);
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

  // যখন updateData change হবে
  useEffect(() => {
    if (updateData) {
      setName(updateData?.name);
      setImage(updateData?.icon);
      // যদি image থাকে তবে সেটা preview তে বসাও
      if (updateData?.icon) {
        setPreview(baseImageUrl + "/" + updateData?.icon); // এখানে direct URL/DB image আসবে
      } else {
        setPreview(null);
      }
    }
  }, [updateData]);

  return (
    <div className="p-[16px] relative mb-[90px]">
      <div className="flex items-center justify-between mb-[20px]">
        <h2 className="text-[20px] font-bold">Sub Catecory</h2>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setviewFormType("create");
              setOpenForm(true);
              setName("");
              setImage("");
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
        <div className="bg-white p-[16px] overflow-scroll">
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="text-left pl-[30px] py-[16px]">ID</th>
                <th className="text-left pl-[30px] py-[16px]">Image</th>
                <th className="text-center py-[16px]">Main Category</th>
                <th className="text-center py-[16px]">Sub Category</th>
                <th className="py-[16px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {allCategory.map((item, i) => (
                <tr key={i} className="w-full">
                  <td className="px-[30px] py-[20px]">{i + 1}</td>
                  <td className="px-[30px] py-[20px]">
                    {item?.icon ? (
                      <img
                        className="h-[50px] w-[50px] rounded-full"
                        src={`${baseImageUrl}/${item?.icon}`}
                        alt="icon"
                      />
                    ) : (
                      <img
                        className="h-[50px] w-[50px] rounded-full"
                        src={noImage}
                        alt="icon"
                      />
                    )}
                  </td>
                  <td className="px-[30px] py-[20px] text-center">
                    {item?.name}
                  </td>
                  <td className="px-[30px] py-[20px] text-center">
                    {item?.mainCategory?.name}
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
                  ? "Add Sub Category"
                  : "Update Sub Category"}
              </h2>

              <SelectInputField
                title={"Main Catecory"}
                options={allMainCategory}
                value={mainCategory}
                setValue={setMainCategory}
                required={true}
                errorMessage={errors?.mainCategory}
              />

              <InputField
                title={"Sub Category Name"}
                value={name}
                setValue={setName}
                placeholder={"Enter sub category name"}
                required={true}
                errorMessage={errors.name}
              />

              {!preview ? (
                <div>
                  <FileInputField
                    title={"image"}
                    value={image}
                    setValue={setImage}
                    size={"Height-40px Width-50px"}
                    setPreview={setPreview}
                    required={true}
                    errorMessage={errors?.image}
                  />
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center border-2 border-dashed p-[16px] border-[#ff6347] rounded-[10px]">
                    <div className="h-[100px]  w-[160px]">
                      <img
                        className=" h-full w-full"
                        src={preview && preview}
                        alt="preview"
                      />
                    </div>
                  </div>
                  <div className="flex items-end justify-end ">
                    <button
                      onClick={() => {
                        setPreview("");
                        setImage("");
                      }}
                      className="bg-[#ff6347] text-white mt-[16px] py-[8px] px-[20px] rounded-[8px]"
                    >
                      Canchel
                    </button>
                  </div>
                </div>
              )}
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

export default SubCategory;
