import React from "react";
import { MdCloudUpload } from "react-icons/md";

const FileInputField = ({
  title,
  value,
  setValue,
  required,
  errorMessage,
  size,
  setPreview,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValue(file);

    // Browser এর জন্য preview link বানানো
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  return (
    <div>
      {title && (
        <p className="mb-2 text-[16px] ">
          {title}{" "}
          {required && (
            <span className="text-red-500 text-[18px] pl-[2px]">*</span>
          )}
        </p>
      )}
      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-[#ff6347] rounded-[10px] cursor-pointer bg-[#fff5f3] hover:bg-[#ffe7e3] transition">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <MdCloudUpload className="text-[#ff6347] text-[40px]" />

          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold text-[#ff6347]">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p>{size && size}</p>
          <p className="text-xs text-gray-400">PNG, JPG, PDF, etc.</p>
        </div>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {value && (
        <p className="mt-2 text-sm text-gray-600">
          Selected file: <span className="font-medium">{value.name}</span>
        </p>
      )}

      {errorMessage && (
        <p className="text-[12px] text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default FileInputField;
