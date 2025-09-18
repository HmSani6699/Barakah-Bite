import React from "react";

const SelectInputField = ({ title, value, setValue, options = [] }) => {
  return (
    <div>
      {title && <p className="mb-[10px] text-[16px]">{title}</p>}
      <select
        className="bg-[#eff1f1] outline-none rounded-[10px] py-[10px] w-full px-[20px]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInputField;
