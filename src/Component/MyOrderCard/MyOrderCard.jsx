import { FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router";

const MyOrderCard = ({ item }) => {
  const baseImageUrl = import.meta.env.VITE_API_URL_IMAGE;
  const usenavigate = useNavigate();

  // Order time
  function getTimeAgoBangla(dateString) {
    const inputDate = new Date(dateString);
    const now = new Date();

    const diffInSeconds = Math.floor((now - inputDate) / 1000);

    if (diffInSeconds < 0) {
      return "ভবিষ্যতের সময়"; // future time
    }

    const units = [
      { name: "বছর", seconds: 31536000 },
      { name: "মাস", seconds: 2592000 },
      { name: "সপ্তাহ", seconds: 604800 },
      { name: "দিন", seconds: 86400 },
      { name: "ঘণ্টা", seconds: 3600 },
      { name: "মিনিট", seconds: 60 },
      { name: "সেকেন্ড", seconds: 1 },
    ];

    for (const unit of units) {
      const interval = Math.floor(diffInSeconds / unit.seconds);
      if (interval >= 1) {
        return `${convertToBanglaNumber(interval)} ${unit.name} আগে`;
      }
    }

    return "এইমাত্র";
  }

  function convertToBanglaNumber(number) {
    const enToBnDigits = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };

    return number
      .toString()
      .split("")
      .map((d) => enToBnDigits[d] || d)
      .join("");
  }

  console.log(item);

  return (
    <div
      onClick={() => usenavigate("/myorderstracking/1")}
      className=" bg-white  rounded-[15px]"
    >
      <div className={` bg-white rounded-[10px] `}>
        <div className="flex  justify-between gap-3 mb-2 bg-gray-300 rounded-t-[10px] p-[16px]">
          <div>
            <p className="font-medium lg:text-[18px] text-[14px]">
              অর্ডার আইডি: {item?.orderNumber}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-[6px] text-[10px] lg:text-[14px]">
              <FaRegClock />
              {getTimeAgoBangla(item?.shopOrders[0]?.createdAt)} (
              {convertToBanglaNumber(
                item?.shopOrders[0]?.createdAt.slice(0, 10)
              )}
              )
            </p>
          </div>
        </div>
        <div className="lg:flex items-center justify-between p-[20px]">
          <div className="">
            {/* Order items */}
            <div className="flex flex-col gap-[16px]">
              {item?.shopOrders[0]?.items?.map((item, i) => (
                <div key={i} className="flex items-center gap-[16px]">
                  {console.log(item)}

                  <div className="h-full w-[100px] lg:w-[150px] border">
                    <img
                      className="w-full h-full"
                      src={`${baseImageUrl}/${item?.img}`}
                      alt="item img"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold mb-[10px]">
                      {item?.productName}
                    </h2>
                    <p className="text-[14px]">
                      প্রতি ইউনিট মূল্য:{" "}
                      {convertToBanglaNumber(item?.pricePerUnit)}
                    </p>
                    <p className="text-[14px]">
                      অর্ডার পরিমাণ: {convertToBanglaNumber(item?.quantity)}
                    </p>
                    <p className="text-[14px]">
                      ভেরিয়েন্টের নাম: {item?.variantName}
                    </p>
                    <p className="text-[14px]">
                      সাব টোটাল : {convertToBanglaNumber(item?.totalPrice)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 my-[30px] lg:my-0">
            <p className="font-bold lg:text-lg text-[16px]">
              মোট মূল্য =
              {convertToBanglaNumber(
                item?.shopOrders[0]?.items?.reduce((total, i) => {
                  return total + i?.totalPrice;
                }, 0)
              )}
              টাকা
            </p>
          </div>
          <div className="flex items-end justify-end gap-2">
            {item?.status === "pending" ? (
              <button className="text-white bg-yellow-500 rounded-[6px] py-[2px] px-[10px]">
                pending
              </button>
            ) : item?.status === "confirmed" ? (
              <button className="text-white bg-green-700 rounded-[6px] py-[2px] px-[10px]">
                কন্ফার্ম
              </button>
            ) : (
              <button className="text-white bg-red-500 rounded-[6px] py-[2px] px-[10px]">
                বাতিল
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;
