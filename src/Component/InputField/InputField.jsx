import React from "react";

const InputField = ({
  type,
  title,
  placeholder,
  value,
  setValue,
  required,
  errorMessage,
}) => {
  return (
    <div>
      <p className="mb-[10px] text-[16px]">
        {title}
        {required && (
          <span className="text-red-500 text-[18px] pl-[5px]">*</span>
        )}
      </p>
      <input
        required
        type={type ? type : "text"}
        className={`bg-[#eff1f1] outline-none rounded-[10px] py-[10px] w-full px-[20px] ${
          errorMessage && "border-red-500 border"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {errorMessage && (
        <p className="text-[12px] text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
