import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const GroseryShop = () => {
  return (
    <div className="px-[15px] mt-[20px] mb-[200px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold  mt-[10px]">
          নিত্যপ্রয়োজনীয় বাজার
        </h2>
        <button className="flex  items-center gap-[10px] main_color">
          আরো দেখুন <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default GroseryShop;
