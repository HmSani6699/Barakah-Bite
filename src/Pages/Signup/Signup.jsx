import InputField from "../../Component/InputField/InputField";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;
  const [name, setName] = useState("Md Sadiq");
  const [phone, setPhone] = useState("01996359111");
  const [password, setPassword] = useState("12345678");

  // Create new user
  const handleSignup = async () => {
    const userBody = { name, phone, password };

    try {
      const createNewUer = await axios.post(baseUrl + "/signup", userBody);
      if (createNewUer?.data?.sussecc) {
        localStorage.setItem("user", JSON.stringify(createNewUer?.data?.data));
        if (createNewUer?.data?.data?.role === "customer") {
          navigate("/");
        } else if (createNewUer?.data?.data?.role === "seller") {
          navigate("/seller");
        } else if (createNewUer?.data?.data?.role === "rider") {
          navigate("/rider");
        } else if (createNewUer?.data?.data?.role === "admin") {
          navigate("/super-admin");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-[15px] lg:my-[100px]">
      <div className="border-t-[4px] border-[#ff6347] rounded-[10px] bg-white shadow-md  w-full p-[20px] lg:w-[450px]">
        <div className="flex items-center justify-center gap-[10px]">
          <div className="h-[50px] w-[50px]">
            <img
              src="https://i.postimg.cc/bJqXjHd5/FB-IMG-1757409260966.jpg"
              alt=""
            />
          </div>
          <h2 className="text-[20px] font-bold">Barakah Mart</h2>
        </div>
        <h2 className="text-center text-[20px] font-bold mt-[20px]">
          স্বাগতম!
        </h2>

        {/* form */}
        <div className="flex flex-col gap-[20px] mt-[30px]">
          <InputField
            value={name}
            setValue={setName}
            title={" আপনার নাম "}
            placeholder={"আপনার নাম লিখুন"}
          />
          <InputField
            value={phone}
            setValue={setPhone}
            title={"ফোন নাম্বার "}
            placeholder={"আপনার ফোন নাম্বার লিখুন"}
          />
          <InputField
            value={password}
            setValue={setPassword}
            title={"পাসওয়ার্ড "}
            placeholder={" আপনার পাসওয়ার্ড লিখুন"}
          />
        </div>

        <button
          onClick={handleSignup}
          className="bg-[#ff6347] text-white w-full py-[10px] rounded-[10px] mt-[30px]"
        >
          অ্যাকাউন্ট তৈরি করুন
        </button>
        <h2 className="text-center mt-[20px]">অথবা</h2>
        <button className="bg-[#eff1f1]  w-full py-[10px] rounded-[10px] mt-[20px] border flex items-center justify-center gap-[10px]">
          <FcGoogle className="text-[20px]" />
          গুগল দিয়ে লগইন করুন
        </button>
        <p className="mt-[20px] text-center">
          ইতিমধ্যে অ্যাকাউন্ট আছে ?
          <Link to={"/login"} className="text-[#ff6347] pl-[5px]">
            লগইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
