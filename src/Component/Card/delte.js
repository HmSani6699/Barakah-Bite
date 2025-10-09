<div className="mb-[16px] ">
  <div className="relative h-[130px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-sm">
    {/* Cover Image */}
    <img
      src={
        userData?.coverImage
          ? `${baseImageUrl}/${userData.coverImage}`
          : noImage
      }
      alt="cover"
      className="h-full w-full object-cover"
    />

    {/* Cover Image Edit Button */}
    <button
      onClick={() => setOpenProfileForm(true)}
      className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
      title="Change Cover Photo"
    >
      <IoIosCamera className="text-xl" />
    </button>

    {/* Logo Section */}
    <div className="absolute bottom-[-45px] left-6 flex flex-col items-center">
      <div className="relative h-[100px] w-[100px] rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
        <img
          src={userData?.logo ? `${baseImageUrl}/${userData.logo}` : noImage}
          alt="logo"
          className="h-full w-full object-cover rounded-full"
        />

        {/* Logo Edit Button */}
        <button
          onClick={() => setOpenProfileForm(true)}
          className="absolute bottom-1 right-1 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-1 shadow-md transition-all"
          title="Change Profile Picture"
        >
          <IoIosCamera className="text-lg" />
        </button>
      </div>
    </div>
  </div>

  <div className="mt-[30px] text-center">
    <h2 className="text-[20px] font-bold">{userData?.name}</h2>

    {userData?.role === "customer" ? (
      <p className="text-gray-500">{userData?.phone}</p>
    ) : userData?.role === "rider" ? (
      <div>
        <div className="flex items-center justify-center my-[6px]">
          <FaStar className="text-yellow-400 text-[25px] mr-[5px]" />
          <h2 className="font-semibold">
            4.8
            <span className="font-normal text-gray-500">(1247 ডেলিভারি)</span>
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
</div>;
