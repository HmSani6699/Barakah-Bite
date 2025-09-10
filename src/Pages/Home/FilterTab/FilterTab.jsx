const FilterTab = () => {
  return (
    <div className="px-[15px] flex items-center gap-[20px] overflow-auto scrollbar-hide pb-[15px] mt-[30px]">
      <button className="main_bg_color text-white border-[1px] border-gray-300 py-[10px] px-[20px]  rounded-full shadow-sm">
        সকল
      </button>
      <button className="bg-white border-[1px] border-gray-300 py-[10px] px-[20px]  rounded-full shadow-sm">
        বিরিয়ানি
      </button>
      <button className="bg-white border-[1px] border-gray-300 py-[10px] px-[20px]  rounded-full shadow-sm">
        বার্গার{" "}
      </button>
      <button className="bg-white border-[1px] border-gray-300 py-[10px] px-[20px]  rounded-full shadow-sm">
        নুডুলস{" "}
      </button>
      <button className="bg-white border-[1px] border-gray-300 py-[10px] px-[20px]  rounded-full shadow-sm">
        পিৎজা{" "}
      </button>
      <button className="bg-white border-[1px] border-gray-300 py-[10px] px-[20px]  rounded-full shadow-sm">
        পানীয়{" "}
      </button>
    </div>
  );
};

export default FilterTab;
