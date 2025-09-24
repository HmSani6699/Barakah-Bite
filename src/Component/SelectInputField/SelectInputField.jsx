import React from "react";

const SelectInputField = ({
  title,
  value,
  setValue,
  options = [],
  required,
  errorMessage,
}) => {
  return (
    <div>
      {title && (
        <p className="mb-[10px] text-[16px]">
          {title}{" "}
          {required && (
            <span className="text-red-500 text-[18px] pl-[2px]">*</span>
          )}
        </p>
      )}
      <select
        className={`bg-[#eff1f1] outline-none rounded-[10px] py-[10px] w-full px-[20px]  ${
          errorMessage && "border-red-500 border"
        }`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <p className="text-[12px] text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default SelectInputField;
