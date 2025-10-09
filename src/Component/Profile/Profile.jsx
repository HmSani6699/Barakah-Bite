import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import ProfileNaveList from "./ProfileNaveList";
import { FaHeadset } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

import { IoCodeSlash } from "react-icons/io5";

import { useEffect, useState } from "react";
import FileInputField from "../FileInputField/FileInputField";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import UserProfile from "./UserProfile";
import RiderProfile from "./RiderProfile";
import SellerProfile from "./SellerProfile";
import AdminProfile from "./AdminProfile";
import InputField from "../InputField/InputField";

const Profile = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState("");
  const [preview, setPreview] = useState(null);
  const [img, setImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [openFileForm, setOpenFileForm] = useState(false);
  const [openFileFormType, setOpenFileFormType] = useState("");

  const [resatePassword, setResatePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // handle get user
  const handleGetUser = async () => {
    setLoading(true);

    try {
      const getUser = await JSON.parse(localStorage.getItem("user"));
      if (!getUser) {
        setLoading(false);
        return;
      }

      const res = await axios.get(`${baseUrl}/users/profile/${getUser?.phone}`);
      if (res?.data?.success) {
        setUserData(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // handle update user profile
  const handleUpdateProfile = async () => {
    try {
      let payload;

      if (openFileFormType === "Logo") {
        payload = {
          logo: img,
        };
      } else {
        payload = {
          coverImage,
        };
      }

      const res = await axios.put(
        `${baseUrl}/users/${userData?._id}`,
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res?.data?.success) {
        Swal.fire("Success!", "Category updated successfully!", "success");
        handleGetUser();
        setImage("");
        setCoverImage("");
        setPreview("");
        setOpenFileForm(false);
        setOpenFileFormType("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle resate passowrd
  const handleResatePassword = async () => {
    if (!password) {
      setErrors("নতুন পাসওয়ার্ড লিখুন");
      return;
    }

    try {
      let payLoad = {
        phone: userData?.phone,
        password,
      };

      const res = await axios.put(`${baseUrl}/resatePassword`, payLoad);
      if (res?.data?.success) {
        setResatePassword(false);
        setErrors("");
        setPassword("");
        Swal.fire("Success!", "Password update successfully!", "success");
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

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="mt-[200px]">
          <Loading />
        </div>
      ) : (
        <div className=" mb-[100px]">
          {userData ? (
            <div>
              {userData?.role === "customer" ? (
                <UserProfile
                  userData={userData}
                  setOpenFileFormType={setOpenFileFormType}
                  setOpenFileForm={setOpenFileForm}
                  handleLogOut={handleLogOut}
                  setResatePassword={setResatePassword}
                />
              ) : userData?.role === "rider" ? (
                <RiderProfile
                  userData={userData}
                  setOpenFileFormType={setOpenFileFormType}
                  setOpenFileForm={setOpenFileForm}
                  handleLogOut={handleLogOut}
                  setResatePassword={setResatePassword}
                />
              ) : userData?.role === "seller" ? (
                <SellerProfile
                  userData={userData}
                  setOpenFileFormType={setOpenFileFormType}
                  setOpenFileForm={setOpenFileForm}
                  handleLogOut={handleLogOut}
                  setResatePassword={setResatePassword}
                />
              ) : userData?.role === "admin" ? (
                <AdminProfile
                  userData={userData}
                  setOpenFileFormType={setOpenFileFormType}
                  setOpenFileForm={setOpenFileForm}
                  handleLogOut={handleLogOut}
                  setResatePassword={setResatePassword}
                />
              ) : null}
            </div>
          ) : (
            <div className="mt-[100px]">
              {!userData && !loading && (
                <div className="px-[16px]">
                  <h2 className="text-center text-[25px] font-bold  mb-[20px]">
                    স্বাগতম!
                  </h2>

                  {/*  */}
                  <div className="   rounded-[10px] p-[20px] border-l-[4px] border-red-500 bg-red-100">
                    <h1>
                      আপনার প্রোফাইল দেখতে হলে আগে লগইন বা সাইন আপ করতে হবে।
                      এখনই লগইন করুন অথবা নতুন একাউন্ট তৈরি করুন।
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
            </div>
          )}

          {/* About Company */}
          <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[25px] shadow-md mx-[16px]">
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

          {/* Prifiel update */}
          {openFileForm && (
            <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center">
              <div className=" mx-[15px] p-[20px] rounded-[10px] w-full bg-white">
                <div className="flex items-end justify-end mb-[20px]">
                  <IoMdCloseCircle
                    onClick={() => {
                      setOpenFileForm(false);
                      setOpenFileFormType("");
                    }}
                    className="text-red-600 text-[30px]"
                  />
                </div>
                <div>
                  {!preview ? (
                    <div>
                      {openFileFormType === "Logo" ? (
                        <FileInputField
                          title={"Logo"}
                          value={img}
                          setValue={setImage}
                          size={"Height-90px Width-90px"}
                          setPreview={setPreview}
                        />
                      ) : (
                        <FileInputField
                          title={"Cover Image"}
                          value={coverImage}
                          setValue={setCoverImage}
                          size={"Height-140px Width-90px"}
                          setPreview={setPreview}
                        />
                      )}
                    </div>
                  ) : (
                    <div>
                      <p className="mb-[10px] text-[16px]">
                        {openFileFormType === "logo" ? " Logo" : "Cover Image"}
                        <span className="text-red-500 text-[18px] pl-[5px]">
                          *
                        </span>
                      </p>
                      <div className="flex items-center justify-center border-2 border-dashed p-[16px] border-[#ff6347] rounded-[10px]">
                        <div className="h-[160px] w-[160px] ">
                          <img
                            className=" h-full w-full"
                            src={preview && preview}
                            alt="preview"
                          />
                        </div>
                      </div>
                      <div className="flex items-end justify-end ">
                        <button
                          onClick={() => {
                            setPreview("");
                            setImage("");
                          }}
                          className="bg-[#ff6347] text-white mt-[16px] py-[8px] px-[20px] rounded-[8px]"
                        >
                          Canchel
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex items-end justify-end mt-[16px]">
                    <button
                      onClick={() => handleUpdateProfile()}
                      className="bg-[#ff5733] text-white py-[6px] px-[15px] rounded-[8px] "
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resate Password */}
          {resatePassword && (
            <div className="fixed inset-0 bg-[#000000d9] z-[200] flex items-center justify-center">
              <div className=" mx-[15px] p-[20px] rounded-[10px] w-full bg-white">
                <div className="flex items-end justify-end mb-[20px]">
                  <IoMdCloseCircle
                    onClick={() => setResatePassword(false)}
                    className="text-red-600 text-[30px]"
                  />
                </div>
                <div>
                  <InputField
                    title={"নতুন পাসওয়ার্ড লিখুন"}
                    value={password}
                    setValue={setPassword}
                    required={true}
                    errorMessage={errors}
                  />

                  <div className="flex items-end justify-end mt-[16px]">
                    <button
                      onClick={() => handleResatePassword()}
                      className="bg-[#ff5733] text-white py-[6px] px-[15px] rounded-[8px] "
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
