import { IoMdDoneAll } from "react-icons/io";
import { Link, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";

const OrderSuccess = () => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const location = useLocation();
  const order = location.state;
  console.log(order?.order?.orderNumber);

  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div>
        <div className="shadow-md p-[20px] rounded-[10px] bg-white border">
          <div className="flex items-center justify-center">
            <div className="bg-green-500 h-[40px] w-[40px] rounded-full flex items-center justify-center relative z-[20] border-[1px] border-white">
              <IoMdDoneAll className="text-white bg-green-500 font-extrabold" />
            </div>
          </div>
          <h2 className="mt-[20px] font-bold text-[22px]">
            আপনার অর্ডারটি সফল হয়েছে!
          </h2>
          <p className="text-center text-gray-400 mt-[10px] border-b border-b-gray-200 pb-[20px]">
            অর্ডার আইডি:{" "}
            <span className="text-gray-400 font-semibold">
              {order?.order?.orderNumber}
            </span>
          </p>

          <div>
            <h2 className="text-[18px] font-bold mb-[20px]">অর্ডার সামারি</h2>

            <div className="flex flex-col gap-[16px]">
              {order?.order?.items?.length > 0 &&
                order?.order?.items?.map((item, i) => (
                  <div
                    key={i}
                    className=" flex items-center justify-between gap-[10px] bg-white"
                  >
                    <div className="flex items-center gap-[10px]">
                      <div className="h-[65px] w-[65px] rounded-[10px]  border-[3px] border-[#eff1f1] ">
                        <img
                          className="h-full w-full rounded-[10px]"
                          src={`${baseImageUrl}/${item?.img}`}
                          alt="logo"
                        />
                      </div>
                      <h2 className="bg-white text-[14px] font-semibold">
                        {item?.productName} ( {item?.quantity} )
                      </h2>
                    </div>

                    <h2 className="bg-white font-semibold p-0  text-[16px]">
                      <span className="font-extrabold  bg-white p-0">৳</span>{" "}
                      {item?.totalPrice ? item?.totalPrice : 0}
                    </h2>
                  </div>
                ))}
            </div>

            <div className="bg-[#ffffff80]  rounded-[15px] mt-[30px]">
              <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
                <p className="text-[14px]  bg-[#ffffff80]">সাব-টোটাল</p>
                <p className="bg-[#ffffff80] font-semibold text-gray-500">
                  <span className="font-extrabold bg-[#ffffff80]">৳</span>{" "}
                  {order?.order?.subtotal ? order?.order?.subtotal : 0}
                </p>
              </div>
              <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
                <p className="text-[14px] ">ডেলিভারি চার্জ</p>
                <p className="bg-[#ffffff80] font-semibold text-gray-500">
                  <span className="font-extrabold bg-[#ffffff80]">৳</span>{" "}
                  {order?.order?.deliveryFee ? order?.order?.deliveryFee : 0}
                </p>
              </div>
              <div className="flex items-center justify-between mb-[8px] bg-[#ffffff80]">
                <p className="bg-[#ffffff80] text-[14px] ">ডিসকাউন্ট</p>
                <p className="bg-[#ffffff80] font-semibold text-gray-500">
                  <span className="font-extrabold bg-[#ffffff80]">৳</span>{" "}
                  {order?.order?.discount ? order?.order?.discount : 0}
                </p>
              </div>

              <div className=" border-t-2 border-t-gray-200 bg-[#ffffff80] flex items-center justify-between">
                <p className="pt-[8px] bg-[#ffffff80] text-[14px] font-semibold">
                  সর্বমোট
                </p>
                <p className="font-bold pt-[8px] bg-[#ffffff80]">
                  <span className="font-extrabold bg-[#ffffff80]">৳</span>{" "}
                  {order?.order?.totalAmount ? order?.order?.totalAmount : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mt-[30px] w-full">
          <Link
            to={"/myorders"}
            className="main_bg_color text-white rounded-full py-[10px] px-[20px] w-full inline-block text-center"
          >
            অর্ডার ট্র্যাক করুন
          </Link>
          <Link
            to={"/"}
            className="bg-white rounded-full py-[10px] px-[20px] w-full inline-block text-center border"
          >
            হোমপেজে ফিরে যান
          </Link>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default OrderSuccess;
