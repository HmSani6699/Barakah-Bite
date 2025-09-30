import { ImSearch } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";
import { useCart } from "../../Component/CartContext/CartContext";
import { Link } from "react-router";

const HomeTopNavber = ({ openPopulerSearchBox, setOpenPopulerSearchBox }) => {
  const { totalCardCount } = useCart();

  // Get all populer search
  const handleGetPopuler = () => {
    console.log(345);
    setOpenPopulerSearchBox(true);
  };

  return (
    <div>
      <div className=" top_header_shadow bg-white px-[20px] py-[16px] fixed w-full top-0 z-[200] lg:hidden">
        <div
          className={`flex items-center justify-between border rounded-full pl-[10px] pr-[4px] ${
            openPopulerSearchBox && "border border-[#ff6347]"
          }`}
        >
          <div className={`flex items-center w-[80%]`}>
            <ImSearch className="text-[20px] text-gray-500 bg-white" />

            <input
              onClick={() => handleGetPopuler()}
              type="text"
              className={`bg-white outline-none rounded-full  w-full  h-full pl-[6px] py-[8px] `}
              placeholder="খাবার বা দোকানের নাম দিয়ে "
            />
          </div>
          <button className="bg-[#ff6347] text-white text-[12px] px-[15px] py-[5px] rounded-full w-[20%]">
            খুঁজুন
          </button>
        </div>
      </div>

      {/* Pc */}
      <div className="bg-white fixed top-0 left-0 w-full z-[500] top_header_shadow px-[20px] py-[10px] lg:block hidden">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[10px] ">
            <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full   bg-white shadow-md ">
              <img
                className="h-full w-full rounded-full"
                src="https://i.postimg.cc/bJqXjHd5/FB-IMG-1757409260966.jpg"
                alt="logo"
              />
            </div>
            <h2 className="font-semibold text-[20px] text-[#ff6347]">
              Barakh Mart
            </h2>
          </div>
          {/* Location */}
          <div className="min-w-[300px]">
            <button className=" bg-[#eff1f1]  w-full px-[20px] py-[10px] rounded-full flex items-center gap-[10px]">
              <IoLocationOutline />
              <p className="text-[14px]"> Pakunda, Sonargaon, Narayongonj</p>
            </button>
          </div>
          {/* Login  */}
          <div className="flex items-center gap-[20px] relative">
            <div className="relative">
              <LiaShoppingCartSolid className="text-[40px] text-gray-500" />

              {totalCardCount > 0 && (
                <div className="h-[15px] w-[15px] bg-[#ff6347] flex items-center justify-center rounded-full absolute -top-[2px] -right-[5px]">
                  <p className="text-[10px] text-white">{totalCardCount}</p>
                </div>
              )}
            </div>

            <Link
              to={"/login"}
              className="bg-[#ff6347] text-white py-[6px] px-[20px] rounded-[8px] flex items-center gap-[10px]"
            >
              Login <LuLogIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopNavber;
