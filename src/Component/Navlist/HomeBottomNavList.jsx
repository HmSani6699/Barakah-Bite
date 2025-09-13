import { Link, useLocation } from "react-router";

const HomeBottomNavList = ({ title, url, icon }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={url}
      className={` ${pathname === url ? "text-[#ff6347]" : "text-gray-500"}`}
    >
      <div className="flex flex-col items-center bg-white ">
        {icon}
        <h2 className="text-[14px] bg-white"> {title}</h2>
      </div>
    </Link>
  );
};

export default HomeBottomNavList;
