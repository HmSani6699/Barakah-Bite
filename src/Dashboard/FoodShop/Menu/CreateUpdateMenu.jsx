import React, { useState } from "react";
import InputField from "../../../Component/InputField/InputField";
import SelectInputField from "../../../Component/SelectInputField/SelectInputField";
import { IoMdCloseCircle } from "react-icons/io";

const CreateUpdateMenu = ({ setOpenForm }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [defaultUnit, setDefaultUnit] = useState("");
  const [unit, setUnit] = useState("");
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

  const [image, setImage] = useState();

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

  const handleSubmit = () => {
    const newItem = {
      name: "New Product",
      category: "Grocery",
      defaultUnit: "litre",
      variants,
      img: "https://via.placeholder.com/100",
    };
    console.log("Submitted Item:", newItem);
    setOpenForm(false);
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
  ];

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
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>

        {/* Form fields */}
        <div className="space-y-4">
          {/* Name */}
          <InputField
            value={name}
            setValue={setName}
            title="Name"
            placeholder="Enter product name"
          />

          {/* Category */}
          <SelectInputField
            value={category}
            setValue={setCategory}
            title="Main Category"
            options={[{ value: "1", label: "Main Food" }]}
          />
          <SelectInputField
            value={subCategory}
            setValue={setsubCategory}
            title="Sub Category"
            options={[{ value: "1", label: " Sub Food" }]}
          />

          {/* Default Unit */}
          <SelectInputField
            options={unitOptions}
            setValue={setDefaultUnit}
            value={defaultUnit}
            title="Default Unit"
            placeholder="e.g. litre, ml, pcs"
          />

          {/* Variants Section */}
          <div className="border p-3 rounded-md space-y-4">
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
                />
                <SelectInputField
                  options={unitOptions}
                  title="Unit"
                  placeholder="e.g. litre, ml, pcs"
                  setValue={setUnit}
                  value={unit}
                />
                <VariantsInputField
                  title="Price"
                  type="number"
                  value={variant.price}
                  onChange={(e) =>
                    handleVariantChange(index, "price", e.target.value)
                  }
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
                />
                <VariantsInputField
                  title="Stock"
                  type="number"
                  value={variant.stock}
                  onChange={(e) =>
                    handleVariantChange(index, "stock", e.target.value)
                  }
                />
              </div>
            ))}

            {/* Add variant button */}
            <button
              type="button"
              onClick={addVariant}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              + Add Another Variant
            </button>
          </div>

          {/* Image URL */}
          <InputField
            value={image}
            setValue={setImage}
            title="Image URL"
            placeholder="Paste image link here"
          />

          {/* Submit button */}
          <button
            onClick={() => handleSubmit()}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUpdateMenu;

const VariantsInputField = ({ title, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium">{title}</label>
    <input
      {...props}
      className="border px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);
