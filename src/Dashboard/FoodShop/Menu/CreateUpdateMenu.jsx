import React, { useEffect, useState } from "react";
import InputField from "../../../Component/InputField/InputField";
import SelectInputField from "../../../Component/SelectInputField/SelectInputField";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../../Context/AuthContext";
import FileInputField from "../../../Component/FileInputField/FileInputField";

const CreateUpdateMenu = ({
  updateData,
  setOpenForm,
  handleGetProduct,
  viewForm,
}) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  const [loading, setLoading] = useState(false);

  const [mainCategoryOption, setMainCategoryOption] = useState();
  const [productCategoryOption, setProductCategoryOption] = useState();
  const [subCategoryOption, setSubCategoryOption] = useState();
  const [unitOption, setUnitOption] = useState();

  const [preview, setPreview] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState();
  const [subCategory, setsubCategory] = useState();
  const [productCategory, setProductCategory] = useState();
  const [defaultUnit, setDefaultUnit] = useState("");
  const [img, setImage] = useState("");
  const [variants, setVariants] = useState([
    {
      label: "",
      unit: "",
      price: "",
      cutPrice: "",
      discount: "",
      qty_step: "",
      stock: "",
    },
  ]);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (!category || category.trim() === "") {
      newErrors.category = "Category is required";
    }
    if (!subCategory || subCategory.trim() === "") {
      newErrors.subCategory = "Sub category is required";
    }
    if (!productCategory || productCategory.trim() === "") {
      newErrors.productCategory = "Product category is required";
    }
    if (!img) {
      newErrors.img = "Image is required";
    }

    // Variants validation
    variants.forEach((variant, index) => {
      if (!variant.label || variant.label.trim() === "") {
        newErrors[`variants_${index}_label`] = "Label is required";
      }
      if (!variant.unit || variant.unit.trim() === "") {
        newErrors[`variants_${index}_unit`] = "Unit is required";
      }
      if (!variant.price || isNaN(variant.price)) {
        newErrors[`variants_${index}_price`] = "Valid price is required";
      }

      if (!variant.qty_step || isNaN(variant.qty_step)) {
        newErrors[`variants_${index}_qty_step`] = "Valid qty step is required";
      }
      if (!variant.stock || isNaN(variant.stock)) {
        newErrors[`variants_${index}_stock`] = "Valid stock is required";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Add new variant
  const addVariant = () => {
    setVariants([
      ...variants,
      {
        label: "",
        unit: "",
        price: "",
        cutPrice: "",
        discount: "",
        qty_step: "",
        stock: "",
      },
    ]);
  };

  // Delete variant
  const deleteVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  // Handle input change
  const handleVariantChange = (index, field, value) => {
    const updated = [...variants];
    updated[index][field] = value;
    setVariants(updated);
  };

  const handleCreateUpdate = async () => {
    console.log(errors);

    if (!validateForm()) {
      return; // validation fail হলে আর submit করবে না
    }

    const getUser = JSON.parse(localStorage.getItem("user"));
    const newItem = {
      name,
      category,
      subCategory,
      productCategory,
      defaultUnit,
      variants,
      img,
      phone: getUser?.phone,
    };

    try {
      let res;

      if (viewForm === "create") {
        // Create product
        res = await axios.post(baseUrl + "/products", newItem, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        Swal.fire("Success!", "Product created successfully!", "success");
      } else {
        // Update product
        res = await axios.put(
          baseUrl + `/products/${updateData?._id}`,
          newItem,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        Swal.fire("Updated!", "Product updated successfully!", "success");
      }

      if (res?.data?.success) {
        setName("");
        setCategory("");
        setsubCategory("");
        setProductCategory("");
        setDefaultUnit("");
        setImage("");
        setOpenForm(false);
        setVariants([
          {
            label: "",
            unit: "",
            price: "",
            cutPrice: "",
            discount: "",
            qty_step: "",
            stock: "",
          },
        ]);
        handleGetProduct();
      }
    } catch (error) {
      console.error(error);

      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  // Unit list
  const unitOptions = [
    // ওজন
    { value: "kg", label: "কেজি (kg)" },
    { value: "g", label: "গ্রাম (g)" },
    { value: "mg", label: "মিলিগ্রাম (mg)" },

    // তরল / ভলিউম
    { value: "litre", label: "লিটার (L)" },
    { value: "ml", label: "মিলিলিটার (ml)" },
    { value: "cup", label: "কাপ" },
    { value: "bottle", label: "বোতল" },

    // সংখ্যা
    { value: "pcs", label: "পিস" },
    { value: "pack", label: "প্যাকেট" },
    { value: "dozen", label: "ডজন" },
    { value: "pair", label: "জোড়া" },

    // বাল্ক / শুকনো পরিমাপ
    { value: "bag", label: "ব্যাগ" },
    { value: "sack", label: "বস্তা" },
    { value: "box", label: "বক্স" },
    { value: "carton", label: "কার্টুন" },
    { value: "plate", label: "প্লেট" },
  ];

  // old value set
  useEffect(() => {
    if (updateData) {
      setName(updateData.name || "");
      setCategory(updateData.category || "");
      setsubCategory(updateData.subCategory || "");
      setProductCategory(updateData.productCategory || "");
      setDefaultUnit(updateData.defaultUnit || "");
      setVariants(
        updateData.variants && updateData.variants.length > 0
          ? updateData.variants
          : [
              {
                label: "",
                unit: "",
                price: "",
                cutPrice: "",
                discount: "",
                qty_step: "",
                stock: "",
              },
            ]
      );

      if (updateData?.img) {
        setPreview(baseImageUrl + "/" + updateData?.img); // এখানে direct URL/DB icon আসবে
      } else {
        setPreview(null);
      }
      setImage(updateData?.img);
    }
  }, [updateData]);

  // Sub category

  // Load main category
  const handleGetMainCategory = async () => {
    setLoading(true);

    try {
      const res = await axios.get(baseUrl + "/mainCategoryes");
      if (res?.data?.success) {
        const mainOptions = res?.data?.data?.map((item) => ({
          label: item.name,
          value: item._id,
        }));

        setMainCategoryOption(mainOptions);
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
    handleGetMainCategory();
  }, []);

  // Load sub category
  const handleGetSubCategory = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `${baseUrl}/subCategoryesByMainCategoryId/${category}`
      );

      if (res?.data?.success) {
        const subOptions = res?.data?.data?.map((item) => ({
          label: item.name,
          value: item._id,
        }));

        setSubCategoryOption(subOptions);
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

  // get sub category
  useEffect(() => {
    if (category) {
      handleGetSubCategory();
    }
  }, [category]);

  // Load main category
  const handleProductSubCategory = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `${baseUrl}/productCategoryesByMainCategoryIdSubcategoryId/${category}/${subCategory}`
      );

      if (res?.data?.success) {
        const productOptions = res?.data?.data?.map((item) => ({
          label: item.name,
          value: item._id,
        }));

        setProductCategoryOption(productOptions);
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

  // get sub category
  useEffect(() => {
    if (subCategory) {
      handleProductSubCategory();
    }
  }, [subCategory]);

  // Load Unut category
  const handleUnit = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        // `${baseUrl}/units/${category}/${subCategory}/${productCategory}`
        `${baseUrl}/units`
      );

      if (res?.data?.success) {
        const unitptions = res?.data?.data?.map((item) => ({
          label: item.name,
          value: item._id,
        }));

        setUnitOption(unitptions);
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

  // get sub category
  useEffect(() => {
    handleUnit();
  }, []);

  console.log(updateData);

  return (
    <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center">
      <div
        className="bg-white w-full max-w-[600px] mx-[16px] rounded-lg shadow-lg 
                  max-h-[90vh] overflow-y-auto p-[20px]"
      >
        {/* Close button */}
        <div className="flex items-end justify-end mb-[20px] sticky top-0 bg-white z-10">
          <IoMdCloseCircle
            onClick={() => setOpenForm(false)}
            className="text-red-500 text-[30px] cursor-pointer"
          />
        </div>

        {/* Form Title */}
        <h2 className="text-xl font-bold mb-4">
          {" "}
          {viewForm === "create" ? "Add New Item" : "Update Item"}{" "}
        </h2>

        {/* Form fields */}
        <div className="space-y-4">
          {/* Name */}

          {/* Category */}
          <SelectInputField
            value={category}
            setValue={setCategory}
            title="Main Category"
            options={mainCategoryOption}
            required={true}
            errorMessage={errors?.category}
          />

          {subCategoryOption && (
            <SelectInputField
              value={subCategory}
              setValue={setsubCategory}
              title="Sub Category"
              options={subCategoryOption}
              required={true}
              errorMessage={errors?.subCategory}
            />
          )}

          {productCategoryOption && (
            <SelectInputField
              value={productCategory}
              setValue={setProductCategory}
              title="Product Category"
              options={productCategoryOption}
              required={true}
              errorMessage={errors?.productCategory}
            />
          )}

          <InputField
            value={name}
            setValue={setName}
            title="Name"
            placeholder="Enter product name"
            required={true}
            errorMessage={errors?.name}
          />

          {/* Default Unit */}
          <SelectInputField
            options={unitOption}
            setValue={setDefaultUnit}
            value={defaultUnit}
            title="Default Unit"
            placeholder="e.g. litre, ml, pcs"
            required={true}
            errorMessage={errors?.unitOption}
          />

          {/* Variants Section */}
          <div className="border-2 p-3 rounded-md space-y-4 bg-white">
            <h3 className="font-semibold">Variants</h3>

            {variants.map((variant, index) => (
              <div
                key={index}
                className="border p-3 rounded-md relative space-y-2"
              >
                <button
                  type="button"
                  onClick={() => deleteVariant(index)}
                  className="absolute top-2 right-2 text-red-500 text-sm"
                >
                  ✕
                </button>
                <VariantsInputField
                  title="Variant Label"
                  value={variant.label}
                  onChange={(e) =>
                    handleVariantChange(index, "label", e.target.value)
                  }
                  required={true}
                  errorMessage={errors?.label}
                />
                <SelectInputField
                  options={unitOption}
                  title="Unit"
                  placeholder="e.g. litre, ml, pcs"
                  value={variant.unit} // <-- this is the main fix
                  setValue={(value) =>
                    handleVariantChange(index, "unit", value)
                  }
                  required={true}
                  errorMessage={errors?.unit}
                />
                <VariantsInputField
                  title="Price"
                  type="number"
                  value={variant.price}
                  onChange={(e) =>
                    handleVariantChange(index, "price", e.target.value)
                  }
                  required={true}
                  errorMessage={errors?.price}
                />
                <VariantsInputField
                  title="Cut Price"
                  type="number"
                  value={variant.cutPrice}
                  onChange={(e) =>
                    handleVariantChange(index, "cutPrice", e.target.value)
                  }
                />
                <VariantsInputField
                  title="Discount"
                  value={variant.discount}
                  onChange={(e) =>
                    handleVariantChange(index, "discount", e.target.value)
                  }
                />
                <VariantsInputField
                  title="Qty Step"
                  type="number"
                  value={variant.qty_step}
                  onChange={(e) =>
                    handleVariantChange(index, "qty_step", e.target.value)
                  }
                  required={true}
                  errorMessage={errors?.variants_0_qty_step}
                />
                <VariantsInputField
                  title="Stock"
                  type="number"
                  value={variant.stock}
                  onChange={(e) =>
                    handleVariantChange(index, "stock", e.target.value)
                  }
                  required={true}
                  errorMessage={errors?.variants_0_stock}
                />
              </div>
            ))}

            {/* Add variant button */}
            <div className="flex items-end justify-end">
              <div>
                <button
                  type="button"
                  onClick={addVariant}
                  className="w-full bg-green-600 text-white py-[10px] px-[20px] rounded-lg hover:bg-green-700 transition"
                >
                  + Add Another Variant
                </button>
              </div>
            </div>
          </div>

          {/* Image URL */}
          {!preview ? (
            <div>
              <FileInputField
                title={"Image"}
                value={img}
                setValue={setImage}
                size={"Height-40px Width-50px"}
                setPreview={setPreview}
                required={true}
                errorMessage={errors?.img}
              />
            </div>
          ) : (
            <div>
              <p className="mb-[10px] text-[16px]">
                Image
                <span className="text-red-500 text-[18px] pl-[5px]">*</span>
              </p>
              <div className="flex items-center justify-center border-2 border-dashed p-[16px] border-[#ff6347] rounded-[10px]">
                <div className="h-[160px] w-[160px] ">
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

          {viewForm === "create" ? (
            <button
              onClick={() => handleCreateUpdate()}
              className="w-full bg-[#ff6347] text-white py-2 rounded-lg  transition"
            >
              Add Item
            </button>
          ) : (
            <button
              onClick={() => handleCreateUpdate()}
              className="w-full bg-[#ff6347] text-white py-2 rounded-lg  transition"
            >
              Update Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateUpdateMenu;

const VariantsInputField = ({ title, required, errorMessage, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium">
      {title}{" "}
      {required && <span className="text-red-500 text-[18px] pl-[2px]">*</span>}
    </label>
    <input
      {...props}
      className={`bg-[#eff1f1] outline-none rounded-[10px] py-[10px] w-full px-[20px] ${
        errorMessage && "border-red-500 border"
      }`}
    />
    {errorMessage && <p className="text-[12px] text-red-500">{errorMessage}</p>}
  </div>
);
