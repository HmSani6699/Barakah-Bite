import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import InputField from "../../../../Component/InputField/InputField";
import SelectInputField from "../../../../Component/SelectInputField/SelectInputField";
import TextareaField from "../../../../Component/TextareaField/TextareaField";
import FileInputField from "../../../../Component/FileInputField/FileInputField";
import axios from "axios";
import Swal from "sweetalert2";

const FoodShopCreateUpdate = ({ viewForm, setOpenForm, handleGetShop }) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [ownerName, setOwnerName] = useState("Md Sadiq");
  const [ownerPhone, setOwnerPhone] = useState("01996359111");
  const [ownerPassword, setOwnerPassword] = useState("12345");
  const [name, setName] = useState("Sadiq Food");
  const [phone, setPhone] = useState("01996359111");
  const [address, setAddress] = useState("Bhulta, Gawuciya");
  const [logo, setLogo] = useState("logo.png");
  const [coverImage, setCoverImage] = useState("coverimage.png");
  const [shopType, setShopType] = useState(1);
  const [status, setStatus] = useState(2);
  const [description, setDescription] = useState(
    "Ami apnader sathe new add hocchi asa korchi bohu dur jete parbo"
  );
  const [sharePricing, setSharePricing] = useState({
    tier1: "10", // for 0-150
    tier2: "8", // for 151-300
    tier3: "7", // for 301-500
    tier4: "6", // for 501-750
    tier5: "5", // for 751-1000
  });

  // Form validation

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    // Phone number regex for Bangladeshi format
    const phoneRegex = /^01[3-9]\d{8}$/;

    // Owner Name
    if (!ownerName.trim()) {
      newErrors.ownerName = "Owner name is required";
    }

    // Owner Phone
    const trimmedOwnerPhone = ownerPhone.trim();
    if (!trimmedOwnerPhone) {
      newErrors.ownerPhone = "Owner phone is required";
    } else if (trimmedOwnerPhone.length !== 11) {
      newErrors.ownerPhone = "Phone number must be exactly 11 digits";
    } else if (!phoneRegex.test(trimmedOwnerPhone)) {
      newErrors.ownerPhone = "Invalid Bangladeshi phone number";
    }

    // Owner Password
    if (!ownerPassword.trim()) {
      newErrors.ownerPassword = "Owner password is required";
    }

    // Shop Name
    if (!name.trim()) {
      newErrors.name = "Shop name is required";
    }

    // Shop Phone
    const trimmedPhone = phone.trim();
    if (!trimmedPhone) {
      newErrors.phone = "Shop phone is required";
    } else if (trimmedPhone.length !== 11) {
      newErrors.phone = "Phone number must be exactly 11 digits";
    } else if (!phoneRegex.test(trimmedPhone)) {
      newErrors.phone = "Invalid Bangladeshi phone number";
    }

    // Shop Address
    if (!address.trim()) {
      newErrors.address = "Shop address is required";
    }

    // Shop Type
    if (!shopType) {
      newErrors.shopType = "Shop type is required";
    }

    // Shop Status
    if (!status) {
      newErrors.status = "Shop status is required";
    }

    // Description
    if (!description.trim()) {
      newErrors.description = "Description is required";
    }

    // Logo file
    if (!logo) {
      newErrors.logo = "Logo file is required";
    }

    // Cover image file
    if (!coverImage) {
      newErrors.coverImage = "Cover image file is required";
    }

    // Share pricing validation
    if (!sharePricing.tier1.trim()) {
      newErrors.tier1 = "Tier 1 price is required";
    }

    if (!sharePricing.tier2.trim()) {
      newErrors.tier2 = "Tier 2 price is required";
    }

    if (!sharePricing.tier3.trim()) {
      newErrors.tier3 = "Tier 3 price is required";
    }

    if (!sharePricing.tier4.trim()) {
      newErrors.tier4 = "Tier 4 price is required";
    }

    if (!sharePricing.tier5.trim()) {
      newErrors.tier5 = "Tier 5 price is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };

  // Create update
  const handleCreateUpdate = async () => {
    if (!validateForm()) {
      // validation failed, stop submission
      return;
    }

    const postData = {
      ownerName,
      ownerPhone,
      ownerPassword,
      name,
      phone,
      address,
      logo,
      coverImage,
      shopType,
      status,
      description,
      sharePricing: {
        "0-150": sharePricing.tier1,
        "151-300": sharePricing.tier2,
        "301-500": sharePricing.tier3,
        "501-750": sharePricing.tier4,
        "751-1000": sharePricing.tier5,
      },
    };

    try {
      let response;

      if (viewForm === "create") {
        // Create Shop
        response = await axios.post(baseUrl + "/shops", postData);
        Swal.fire("Success!", "Shop created successfully!", "success");
      } else {
        // Update Shop
        response = await axios.put(
          baseUrl + `/products/${updateData?._id}`,
          newItem
        );
        Swal.fire("Updated!", "Product updated successfully!", "success");
      }

      setOpenForm(false);
      handleGetShop();
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  const pricingTiers = [
    {
      key: "tier1",
      title: "1. Price",
      placeholder: "Enter 10%",
      range: "0 - 150",
    },
    {
      key: "tier2",
      title: "2. Price",
      placeholder: "Enter 8%",
      range: "151 - 300",
    },
    {
      key: "tier3",
      title: "3. Price",
      placeholder: "Enter 7%",
      range: "301 - 500",
    },
    {
      key: "tier4",
      title: "4. Price",
      placeholder: "Enter 6%",
      range: "501 - 750",
    },
    {
      key: "tier5",
      title: "5. Price",
      placeholder: "Enter 5%",
      range: "751 - 1000",
    },
  ];

  return (
    <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center">
      <div
        className="bg-white w-full max-w-[600px] mx-[16px] rounded-lg shadow-lg 
                      max-h-[90vh] overflow-y-auto p-[20px]"
      >
        {/* Close button */}
        <div className="flex items-end justify-end mb-[20px] sticky top-0 z-10">
          <IoMdCloseCircle
            onClick={() => setOpenForm(false)}
            className="text-red-500 text-[30px] cursor-pointer"
          />
        </div>

        {/* Form Title */}
        <h2 className="text-xl font-bold mb-4">
          {viewForm === "create" ? "Add New Shop" : "Update Shop"}{" "}
        </h2>

        {/* Form fields */}
        <div className="space-y-4">
          {/* Name */}
          <div className="bg-[#cdcdcd] p-[16px] rounded-[8px]">
            <h2 className="text-[18px] font-semibold mb-[16px]"> Owner Info</h2>
            <div className="flex flex-col gap-[16px] ">
              <InputField
                value={ownerName}
                setValue={setOwnerName}
                title="Owner Name"
                placeholder="Enter owner name"
                required={true}
                errorMessage={errors.ownerName}
              />
              <InputField
                value={ownerPhone}
                setValue={setOwnerPhone}
                title="Owner phone"
                placeholder="Enter owner phone"
                required={true}
                errorMessage={errors.phone}
                type="number"
              />
              <InputField
                value={ownerPassword}
                setValue={setOwnerPassword}
                title="Owner password"
                placeholder="Enter owner password"
                required={true}
                errorMessage={errors.ownerPassword}
              />
            </div>
          </div>

          <div className="bg-[#cdcdcd] p-[16px] rounded-[8px]">
            <h2 className="text-[18px] font-semibold mb-[16px]"> Shop Info</h2>
            <div className="flex flex-col gap-[16px] ">
              <SelectInputField
                value={shopType}
                setValue={setShopType}
                title="Shop Type"
                options={[
                  { value: 1, label: "Restaurant" },
                  { value: 2, label: "Grocery" },
                ]}
                required={true}
                errorMessage={errors.shopType}
              />
              <InputField
                value={name}
                setValue={setName}
                title="Shop name"
                placeholder="Enter shop name"
                required={true}
                errorMessage={errors.name}
              />
              <InputField
                value={phone}
                setValue={setPhone}
                title="Shop phone"
                placeholder="Enter shop phone"
                required={true}
                errorMessage={errors.phone}
                type={"number"}
              />
              <InputField
                value={address}
                setValue={setAddress}
                title="Shop address"
                placeholder="Enter shop address"
                required={true}
                errorMessage={errors.address}
              />
              <SelectInputField
                value={status}
                setValue={setStatus}
                title="Shop Status"
                options={[
                  { value: 1, label: "pending" },
                  { value: 2, label: "approved" },
                  { value: 3, label: "blocked" },
                ]}
                required={true}
                errorMessage={errors.status}
              />
              <FileInputField
                title="Logo"
                value={logo}
                setValue={setLogo}
                required={true}
                errorMessage={errors.logo}
              />
              <FileInputField
                title="Cover Image"
                value={coverImage}
                setValue={setCoverImage}
                required={true}
                errorMessage={errors.coverImage}
              />
              <TextareaField
                value={description}
                setValue={setDescription}
                title={"Description"}
                placeholder={"Message"}
              />
            </div>
          </div>
          <div className="bg-[#cdcdcd] p-[16px] rounded-[8px]">
            <h2 className="text-[18px] font-semibold mb-[16px]">
              Shear Priching
            </h2>
            <div className="flex flex-col gap-[16px]">
              {pricingTiers.map((tier) => (
                <div className="flex items-center" key={tier.key}>
                  <div className="w-[70%]">
                    <InputField
                      title={tier.title}
                      value={sharePricing[tier.key]}
                      setValue={(val) =>
                        setSharePricing((prev) => ({
                          ...prev,
                          [tier.key]: val,
                        }))
                      }
                      placeholder={tier.placeholder}
                      required={true}
                      errorMessage={errors[tier.key]}
                      type={"number"}
                    />
                  </div>
                  <h2 className="w-[30%] font-extrabold bg-[#ff6347] text-white py-[10px] px-[20px] mt-[38px]">
                    {tier.range}
                    <span className="font-extrabold"> ৳ </span>
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {viewForm === "create" ? (
            <button
              onClick={() => handleCreateUpdate()}
              className="w-full bg-[#ff6347] text-white py-2 rounded-lg transition"
            >
              Add Shop
            </button>
          ) : (
            <button
              onClick={() => handleCreateUpdate()}
              className="w-full bg-[#ff6347] text-white py-2 rounded-lg transition"
            >
              Update Shop
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodShopCreateUpdate;
