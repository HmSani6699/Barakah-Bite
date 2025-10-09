import React, { useState } from "react";
import InputField from "../../Component/InputField/InputField";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

import loginLogo from "../../../public/images/login.png";
import Swal from "sweetalert2";

const Login = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { login } = useAuth();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("01996359111");
  const [password, setPassword] = useState("12345");
  const from = location.state?.from || "/";

  const handleLogin = async () => {
    const userBody = { phone, password };

    try {
      const loginUser = await axios.post(baseUrl + "/login", userBody);
      if (loginUser?.data?.sussecc) {
        localStorage.setItem("user", JSON.stringify(loginUser?.data?.data));
        login(loginUser?.data?.data);
        if (loginUser?.data?.data?.role === "customer") {
          navigate(from);
        } else if (loginUser?.data?.data?.role === "seller") {
          navigate("/food-shop");
        } else if (loginUser?.data?.data?.role === "rider") {
          navigate("/rider");
        } else if (loginUser?.data?.data?.role === "admin") {
          navigate("/super-admin");
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error!",
        error?.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-[15px] lg:my-[50px] ">
      <div className="border-t-[4px] border-[#ff6347] rounded-[10px] bg-white shadow-md  w-full p-[20px] lg:w-[450px]">
        <div className="flex items-center justify-center gap-[10px]">
          <img src={loginLogo} className="w-[150px]" alt="logo" />
        </div>
        <h2 className="text-center text-[20px] font-bold ">স্বাগতম!</h2>

        {/* form */}
        <div className="flex flex-col gap-[20px] mt-[30px]">
          <InputField
            title={"ফোন নাম্বার "}
            placeholder={"আপনার ফোন নাম্বার লিখুন"}
            value={phone}
            setValue={setPhone}
          />
          <InputField
            title={"পাসওয়ার্ড "}
            placeholder={" আপনার পাসওয়ার্ড লিখুন"}
            value={password}
            setValue={setPassword}
          />
        </div>

        <button
          onClick={handleLogin}
          className="bg-[#ff6347] text-white w-full py-[10px] rounded-[10px] mt-[30px]"
        >
          লগইন করুন
        </button>
        {/* <h2 className="text-center mt-[20px]">অথবা</h2>
        <button className="bg-[#eff1f1]  w-full py-[10px] rounded-[10px] mt-[20px] border flex items-center justify-center gap-[10px]">
          <FcGoogle className="text-[20px]" />
          গুগল দিয়ে লগইন করুন
        </button> */}
        <p className="mt-[20px] text-center">
          অ্যাকাউন্ট নেই ?
          <Link to={"/signup"} className="text-[#ff6347] pl-[5px]">
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
