import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <div> Bottom Menu</div>
    </div>
  );
};

export default MainLayout;
