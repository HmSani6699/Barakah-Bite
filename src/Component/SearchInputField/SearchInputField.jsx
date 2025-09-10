import { ImSearch } from "react-icons/im";

const SearchInputField = () => {
  return (
    <div className="flex items-center bg-white rounded-full pl-[20px]">
      <ImSearch className="text-[20px] text-gray-500 bg-white" />

      <input
        type="text"
        className="bg-white outline-none rounded-full p-[10px] w-full "
        placeholder="খাবার বা দোকানের নাম দিয়ে খুঁজুন"
      />
    </div>
  );
};

export default SearchInputField;
