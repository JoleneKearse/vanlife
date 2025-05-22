import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <NavBar />
      <div className="grow mb-40">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
