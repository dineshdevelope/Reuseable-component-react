import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const GuestLayout = () => {
  return (
    <div className="bg-green-100 min-h-screen">
      <Navbar />

      <div className="bg-red-100 ">
        {/*  <Header />

        <MainPage /> */}
        <Outlet />
      </div>
    </div>
  );
};
export default GuestLayout;
