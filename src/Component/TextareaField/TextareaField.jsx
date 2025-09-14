import React from "react";

const TextareaField = ({ title, placeholder, bg }) => {
  return (
    <div className="">
      <p className=" mb-[10px]">{title} </p>
      <textarea
        className={`w-full outline-none rounded-[15px] ${bg} p-[20px]`}
        rows={6}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextareaField;
