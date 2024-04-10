import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <h1 className="py-4 text-center text-[32px] font-bold text-blue-600">
        Admin Panel
      </h1>
      <Outlet />
    </>
  );
};

export default AdminLayout;
