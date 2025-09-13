import React from "react";

const InputField = ({ title, placeholder, value, setValue }) => {
  return (
    <div>
      <p className="mb-[10px] text-[16px]">{title}</p>
      <input
        type="text"
        className="bg-[#eff1f1] outline-none rounded-[10px] py-[10px] w-full px-[20px]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputField;
