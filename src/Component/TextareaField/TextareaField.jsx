import React from "react";

const TextareaField = () => {
  return (
    <div className="">
      <p className=" mb-[10px]">আপনার মন্তব্য লিখুন </p>
      <textarea
        className="w-full outline-none rounded-[15px] bg-white p-[20px]"
        rows={6}
        placeholder="আপনার মন্তব্য লিখুন"
      ></textarea>
    </div>
  );
};

export default TextareaField;
