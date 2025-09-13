import InputField from "../../Component/InputField/InputField";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen px-[15px]">
      <div className="border-t-[4px] border-[#ff6347] rounded-[10px] bg-white shadow-md  w-full p-[20px]">
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
          <InputField title={" আপনার নাম "} placeholder={"আপনার নাম লিখুন"} />
          <InputField
            title={"ফোন নাম্বার "}
            placeholder={"আপনার ফোন নাম্বার লিখুন"}
          />
          <InputField
            title={"পাসওয়ার্ড "}
            placeholder={" আপনার পাসওয়ার্ড লিখুন"}
          />
        </div>

        <button className="bg-[#ff6347] text-white w-full py-[10px] rounded-[10px] mt-[30px]">
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
