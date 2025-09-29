import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import InputField from "../../../../Component/InputField/InputField";
import SelectInputField from "../../../../Component/SelectInputField/SelectInputField";
import TextareaField from "../../../../Component/TextareaField/TextareaField";
import FileInputField from "../../../../Component/FileInputField/FileInputField";
import axios from "axios";
import Swal from "sweetalert2";

const FoodShopCreateUpdate = ({
  viewForm,
  setOpenForm,
  handleGetShop,
  updateData,
}) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;

  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [ownerPassword, setOwnerPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [shopType, setShopType] = useState(1);
  const [status, setStatus] = useState(2);
  const [description, setDescription] = useState("");
  const [sharePricing, setSharePricing] = useState({
    tier1: "10", // for 0-150
    tier2: "8", // for 151-300
    tier3: "7", // for 301-500
    tier4: "6", // for 501-750
    tier5: "5", // for 751-1000
  });

  const [logopreview, setLogoPreview] = useState(null);
  const [coverImagepreview, setCoverImagePreview] = useState(null);

  // Form validation

  const [errors, setErrors] = useState({});
  const createValidateForm = () => {
    const newErrors = {};

    console.log(sharePricing);

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
    if (!sharePricing.tier1) {
      newErrors.tier1 = "Tier 1 price is required";
    }

    if (!sharePricing.tier2) {
      newErrors.tier2 = "Tier 2 price is required";
    }

    if (!sharePricing.tier3) {
      newErrors.tier3 = "Tier 3 price is required";
    }

    if (!sharePricing.tier4) {
      newErrors.tier4 = "Tier 4 price is required";
    }

    if (!sharePricing.tier5) {
      newErrors.tier5 = "Tier 5 price is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };
  const updateValidateForm = () => {
    const newErrors = {};

    // Phone number regex for Bangladeshi format
    const phoneRegex = /^01[3-9]\d{8}$/;

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
    if (!sharePricing.tier1) {
      newErrors.tier1 = "Tier 1 price is required";
    }

    if (!sharePricing.tier2) {
      newErrors.tier2 = "Tier 2 price is required";
    }

    if (!sharePricing.tier3) {
      newErrors.tier3 = "Tier 3 price is required";
    }

    if (!sharePricing.tier4) {
      newErrors.tier4 = "Tier 4 price is required";
    }

    if (!sharePricing.tier5) {
      newErrors.tier5 = "Tier 5 price is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };

  // Create update
  const handleCreateUpdate = async () => {
    console.log(errors);

    if (viewForm === "create") {
      if (!createValidateForm()) {
        // validation failed, stop submission
        return;
      }
    } else {
      if (!updateValidateForm()) {
        // validation failed, stop submission
        return;
      }
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
        tier1: sharePricing.tier1,
        tier2: sharePricing.tier2,
        tier3: sharePricing.tier3,
        tier4: sharePricing.tier4,
        tier5: sharePricing.tier5,
      },
    };

    try {
      let response;

      if (viewForm === "create") {
        // Create Shop
        response = await axios.post(baseUrl + "/shops", postData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        Swal.fire("Success!", "Shop created successfully!", "success");
      } else {
        // Update Shop
        response = await axios.put(
          baseUrl + `/shops/${updateData?._id}`,
          postData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        Swal.fire("Updated!", "Product updated successfully!", "success");
      }

      setOpenForm(false);
      handleGetShop();
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error!",
        error?.response?.data?.error || "Something went wrong!",
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

  useEffect(() => {
    if (updateData) {
      setName(updateData.name || "");
      setAddress(updateData.address || "");
      setDescription(updateData.description || "");
      setPhone(updateData.phone || "");
      setOwnerName(updateData?.owner?.name || "");
      setShopType(updateData.shopType || "");
      setStatus(updateData.status || "");
      setSharePricing(updateData.sharePricing || {});
      setLogo(updateData?.logo || "");
      setCoverImage(updateData?.coverImage || "");
      setLogoPreview(`${baseImageUrl}/${updateData.logo}` || "");
      setCoverImagePreview(`${baseImageUrl}/${updateData.coverImage}` || "");
    }
  }, [updateData]);

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

          {viewForm !== "update" && (
            <div className="bg-[#cdcdcd] p-[16px] rounded-[8px]">
              <h2 className="text-[18px] font-semibold mb-[16px]">
                {" "}
                Owner Info
              </h2>
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
                  errorMessage={errors.ownerPhone}
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
          )}

          <div className="bg-[#cdcdcd] p-[16px] rounded-[8px]">
            <h2 className="text-[18px] font-semibold mb-[16px]"> Shop Info</h2>
            <div className="flex flex-col gap-[16px] ">
              <SelectInputField
                value={shopType}
                setValue={setShopType}
                title="Shop Type"
                options={[
                  { value: "Restaurant", label: "Restaurant" },
                  { value: "Grocery", label: "Grocery" },
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
                  { value: "pending", label: "pending" },
                  { value: "approved", label: "approved" },
                  { value: "blocked", label: "blocked" },
                ]}
                required={true}
                errorMessage={errors.status}
              />

              {/* Image URL */}
              {!logopreview ? (
                <div>
                  <FileInputField
                    title={"Logo"}
                    value={logo}
                    setValue={setLogo}
                    size={"Height-40px Width-50px"}
                    setPreview={setLogoPreview}
                    required={true}
                    errorMessage={errors?.logo}
                  />
                </div>
              ) : (
                <div>
                  <p className="mb-[10px] text-[16px]">
                    Logo
                    <span className="text-red-500 text-[18px] pl-[5px]">*</span>
                  </p>
                  <div className="flex items-center justify-center border-2 border-dashed p-[16px] border-[#ff6347] rounded-[10px]">
                    <div className="h-[160px] w-[160px] ">
                      <img
                        className=" h-full w-full"
                        src={logopreview && logopreview}
                        alt="preview"
                      />
                    </div>
                  </div>
                  <div className="flex items-end justify-end ">
                    <button
                      onClick={() => {
                        setLogoPreview("");
                        setLogo("");
                      }}
                      className="bg-[#ff6347] text-white mt-[16px] py-[8px] px-[20px] rounded-[8px]"
                    >
                      Canchel
                    </button>
                  </div>
                </div>
              )}

              {!coverImagepreview ? (
                <div>
                  <FileInputField
                    title={"Cover Image"}
                    value={coverImage}
                    setValue={setCoverImage}
                    size={"Height-40px Width-50px"}
                    setPreview={setCoverImagePreview}
                    required={true}
                    errorMessage={errors?.logo}
                  />
                </div>
              ) : (
                <div>
                  <p className="mb-[10px] text-[16px]">
                    Cover Image
                    <span className="text-red-500 text-[18px] pl-[5px]">*</span>
                  </p>
                  <div className="flex items-center justify-center border-2 border-dashed p-[16px] border-[#ff6347] rounded-[10px]">
                    <div className="h-[160px] w-[160px] ">
                      <img
                        className=" h-full w-full"
                        src={coverImagepreview && coverImagepreview}
                        alt="preview"
                      />
                    </div>
                  </div>
                  <div className="flex items-end justify-end ">
                    <button
                      onClick={() => {
                        setCoverImagePreview("");
                        setLogo("");
                      }}
                      className="bg-[#ff6347] text-white mt-[16px] py-[8px] px-[20px] rounded-[8px]"
                    >
                      Canchel
                    </button>
                  </div>
                </div>
              )}

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
