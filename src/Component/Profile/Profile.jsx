// import React, { useEffect, useState } from "react";
// import { HiClipboardList } from "react-icons/hi";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link, useNavigate } from "react-router";
// import ProfileNaveList from "./ProfileNaveList";
// import { FaHeadset, FaLocationDot, FaStar } from "react-icons/fa6";
// import { FaInfoCircle } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import InputField from "../InputField/InputField";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setUser(user);
//     }
//   }, []);

//   const handleLogOut = () => {
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   const [number, setNumber] = useState("01996359111");
//   const [password, setPassword] = useState("customer");

//   const handleLogin = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       localStorage.removeItem("user");
//     }
//     localStorage.setItem(
//       "user",
//       JSON.stringify({ phone: number, role: password })
//     );

//     if (password === "customer") {
//       navigate("/");
//     } else if (password === "rider") {
//       navigate("/rider");
//     } else if (password === "foodShop") {
//       navigate("/food-shop");
//     } else if (password === "superAdmin") {
//       navigate("/super-admin");
//     }
//   };

//   return (
//     <div>
//       <div className="mb-[120px]">
//         <div className=" h-[90px] text-center flex items-center justify-center">
//           <div className="h-[90px] w-[90px] rounded-full  border-[4px] border-[#eff1f1] shadow-md mt-[40px]">
//             <img
//               className="h-full w-full rounded-full"
//               src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
//               alt="logo"
//             />
//           </div>
//         </div>
//         <div className="mt-[30px] text-center">
//           <h2 className="text-[20px] font-bold">Md Sadiq Sadi</h2>

//           {user?.role === "customer" ? (
//             <p className="text-gray-500">sadiq@gmail.com</p>
//           ) : user?.role === "rider" ? (
//             <div>
//               <div className="flex items-center justify-center my-[6px]">
//                 <FaStar className="text-yellow-400 text-[25px] mr-[5px]" />
//                 <h2 className="font-semibold">
//                   4.8
//                   <span className="font-normal text-gray-500">
//                     (1247 ডেলিভারি)
//                   </span>
//                 </h2>
//               </div>
//               <button className="text-white bg-[#ff6347] py-[6px] px-[20px] rounded-[8px]">
//                 Online
//               </button>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>

//         <div className=" px-[20px] mt-[30px]">
//           {user?.role === "customer" && (
//             <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md">
//               <ProfileNaveList
//                 title={"আমার অর্ডারসমূহ"}
//                 icon={
//                   <HiClipboardList className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
//                 }
//                 url={"/myorders"}
//               />
//               <ProfileNaveList
//                 title={"আমার ঠিকানা"}
//                 icon={
//                   <FaLocationDot className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
//                 }
//                 url={"/address"}
//               />
//             </div>
//           )}

//           {/* About Company */}
//           <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mt-[20px]">
//             <ProfileNaveList
//               title={"আমাদের সম্পর্কে"}
//               icon={
//                 <FaInfoCircle className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
//               }
//               url={"/aboutus"}
//             />
//             <ProfileNaveList
//               title={"যোগাযোগ"}
//               icon={
//                 <FaHeadset className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
//               }
//               url={"/contactus"}
//             />

//             <div
//               onClick={handleLogOut}
//               className="w-full flex items-center justify-between cursor-pointer"
//             >
//               <div className="flex items-center gap-[15px]">
//                 <FiLogOut className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
//                 <p className="text-gray-600">লগআউট</p>
//               </div>
//               <IoIosArrowForward />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-center p-[20px] mb-[100px]">
//         <div>
//           <div className="my-[20px]   rounded-[10px] p-[20px] border-l-[4px] border-red-500 bg-red-100">
//             <h1>
//               আপনার প্রোফাইল দেখতে হলে আগে লগইন বা সাইন আপ করতে হবে। এখনই লগইন
//               করুন অথবা নতুন একাউন্ট তৈরি করুন।
//             </h1>
//           </div>
//           <div className=" rounded-[10px] bg-white shadow-md  w-full p-[20px]">
//             {/* <div className="flex items-center justify-center gap-[10px]">
//                 <div className="h-[50px] w-[50px]">
//                   <img
//                     src="https://i.postimg.cc/bJqXjHd5/FB-IMG-1757409260966.jpg"
//                     alt=""
//                   />
//                 </div>
//                 <h2 className="text-[20px] font-bold">Barakah Mart</h2>
//               </div>*/}
//             <h2 className="text-center text-[20px] font-bold mt-[20px]">
//               স্বাগতম!
//             </h2>

//             {/* form */}
//             <div className="flex flex-col gap-[20px] mt-[30px]">
//               <InputField
//                 title={"ফোন নাম্বার "}
//                 placeholder={"আপনার ফোন নাম্বার লিখুন"}
//                 value={number}
//                 setValue={setNumber}
//               />
//               <InputField
//                 title={"পাসওয়ার্ড "}
//                 placeholder={" আপনার পাসওয়ার্ড লিখুন"}
//                 value={password}
//                 setValue={setPassword}
//               />
//             </div>

//             <button
//               onClick={handleLogin}
//               className="bg-[#ff6347] text-white w-full py-[10px] rounded-[10px] mt-[30px]"
//             >
//               লগইন করুন
//             </button>
//             <h2 className="text-center mt-[20px]">অথবা</h2>
//             <button className="bg-[#eff1f1]  w-full py-[10px] rounded-[10px] mt-[20px] border flex items-center justify-center gap-[10px]">
//               <FcGoogle className="text-[20px]" />
//               গুগল দিয়ে লগইন করুন
//             </button>
//             <p className="mt-[20px] text-center">
//               অ্যাকাউন্ট নেই ?
//               <Link to={"/signup"} className="text-[#ff6347] pl-[5px]">
//                 সাইন আপ করুন
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { HiClipboardList } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import ProfileNaveList from "./ProfileNaveList";
import { FaHeadset, FaLocationDot, FaRegStar, FaStar } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import InputField from "../InputField/InputField";
import { CiGrid41 } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { IoCodeSlash, IoLocationOutline } from "react-icons/io5";
import { CgLock } from "react-icons/cg";
import { RiFileList2Line } from "react-icons/ri";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const [number, setNumber] = useState("01996359111");
  const [password, setPassword] = useState("customer");

  return (
    <div className="px-[20px] mt-[16px] mb-[100px]">
      {!user && (
        <div>
          <h2 className="text-center text-[25px] font-bold  mb-[20px]">
            স্বাগতম!
          </h2>

          {/*  */}
          <div className="   rounded-[10px] p-[20px] border-l-[4px] border-red-500 bg-red-100">
            <h1>
              আপনার প্রোফাইল দেখতে হলে আগে লগইন বা সাইন আপ করতে হবে। এখনই লগইন
              করুন অথবা নতুন একাউন্ট তৈরি করুন।
            </h1>
          </div>

          <div className="flex items-center gap-[16px] my-[16px]">
            <Link
              to={"/login"}
              className="bg-white py-[8px] w-full rounded-[8px] shadow-md text-center"
            >
              Login
            </Link>

            <Link
              to={"/signup"}
              className="w-full bg-[#ff6347] py-[8px] rounded-[8px] text-white shadow-md text-center"
            >
              Signup
            </Link>
          </div>
        </div>
      )}

      {user && (
        <div className="mb-[16px]">
          <div className=" h-[90px] text-center flex items-center justify-center">
            <div className="h-[90px] w-[90px] rounded-full  border-[4px] border-[#eff1f1] shadow-md mt-[40px]">
              <img
                className="h-full w-full rounded-full"
                src="https://i.postimg.cc/QNH0fRzB/download-3.jpgg"
                alt="logo"
              />
            </div>
          </div>
          <div className="mt-[30px] text-center">
            <h2 className="text-[20px] font-bold">Md Sadiq Sadi</h2>

            {user?.role === "customer" ? (
              <p className="text-gray-500">sadiq@gmail.com</p>
            ) : user?.role === "rider" ? (
              <div>
                <div className="flex items-center justify-center my-[6px]">
                  <FaStar className="text-yellow-400 text-[25px] mr-[5px]" />
                  <h2 className="font-semibold">
                    4.8
                    <span className="font-normal text-gray-500">
                      (1247 ডেলিভারি)
                    </span>
                  </h2>
                </div>
                <button className="text-white bg-[#ff6347] py-[6px] px-[20px] rounded-[8px]">
                  Online
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}

      {/* Customer */}
      {user?.role === "customer" && (
        <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mb-[16px]">
          {/* <ProfileNaveList
            title={"ড্যাশবোর্ড"}
            icon={
              <CiGrid41 className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/myorders"}
          /> */}
          <ProfileNaveList
            title={"আমার অর্ডারসমূহ"}
            icon={
              <RiFileList2Line className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/tracking-order"}
          />
          <ProfileNaveList
            title={"ট্র্যাক অর্ডার"}
            icon={
              <BsBoxSeam className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/tracking-order"}
          />
          <ProfileNaveList
            title={"আমার ঠিকানা"}
            icon={
              <IoLocationOutline className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          />
          {/* <ProfileNaveList
            title={"আমার রিভিউ"}
            icon={
              <FaRegStar className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          />
          <ProfileNaveList
            title={"পাসওয়ার্ড পরিবর্তন করুন"}
            icon={
              <CgLock className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          /> */}

          {user && (
            <div
              onClick={handleLogOut}
              className="w-full flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-[15px]">
                <FiLogOut className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
                <p className="text-gray-600">লগআউট</p>
              </div>
              <IoIosArrowForward />
            </div>
          )}
        </div>
      )}

      {/* Rider */}
      {user?.role === "rider" && (
        <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mb-[16px]">
          {/* <ProfileNaveList
            title={"ড্যাশবোর্ড"}
            icon={
              <CiGrid41 className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/myorders"}
          /> */}
          <ProfileNaveList
            title={"আমার অর্ডারসমূহ"}
            icon={
              <RiFileList2Line className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/tracking-order"}
          />
          <ProfileNaveList
            title={"ট্র্যাক অর্ডার"}
            icon={
              <BsBoxSeam className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/tracking-order"}
          />
          <ProfileNaveList
            title={"আমার ঠিকানা"}
            icon={
              <IoLocationOutline className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          />
          {/* <ProfileNaveList
            title={"আমার রিভিউ"}
            icon={
              <FaRegStar className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          />
          <ProfileNaveList
            title={"পাসওয়ার্ড পরিবর্তন করুন"}
            icon={
              <CgLock className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          /> */}

          {user && (
            <div
              onClick={handleLogOut}
              className="w-full flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-[15px]">
                <FiLogOut className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
                <p className="text-gray-600">লগআউট</p>
              </div>
              <IoIosArrowForward />
            </div>
          )}
        </div>
      )}
      {/* Food Shop */}
      {user?.role === "foodShope" && (
        <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mb-[16px]">
          {/* <ProfileNaveList
            title={"ড্যাশবোর্ড"}
            icon={
              <CiGrid41 className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/myorders"}
          /> */}
          <ProfileNaveList
            title={"আমার অর্ডারসমূহ"}
            icon={
              <RiFileList2Line className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/tracking-order"}
          />
          <ProfileNaveList
            title={"ট্র্যাক অর্ডার"}
            icon={
              <BsBoxSeam className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/tracking-order"}
          />
          <ProfileNaveList
            title={"আমার ঠিকানা"}
            icon={
              <IoLocationOutline className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          />
          {/* <ProfileNaveList
            title={"আমার রিভিউ"}
            icon={
              <FaRegStar className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          />
          <ProfileNaveList
            title={"পাসওয়ার্ড পরিবর্তন করুন"}
            icon={
              <CgLock className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
            }
            url={"/address"}
          /> */}

          {user && (
            <div
              onClick={handleLogOut}
              className="w-full flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-[15px]">
                <FiLogOut className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
                <p className="text-gray-600">লগআউট</p>
              </div>
              <IoIosArrowForward />
            </div>
          )}
        </div>
      )}

      {/* About Company */}
      <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md ">
        <ProfileNaveList
          title={"আমাদের সম্পর্কে"}
          icon={
            <FaInfoCircle className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/aboutus"}
        />
        <ProfileNaveList
          title={"যোগাযোগ"}
          icon={
            <FaHeadset className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/contactus"}
        />
        <ProfileNaveList
          title={"ডেভেলপার"}
          icon={
            <IoCodeSlash className="text-[22px] mb-[3px]0 bg-white text-[#ff6347]" />
          }
          url={"/developer"}
        />
      </div>
    </div>
  );
};

export default Profile;
