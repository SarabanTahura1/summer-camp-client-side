import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/NavBar/Navbar";
import Loader from "../components/Loader/Loader";

const MainLayouts = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const isNavAndFooterShow =
    location.pathname.includes("/dashboard") ||
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  return (
    <>
      {isNavAndFooterShow || <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-385px)] dark:bg-gray-800">
        {navigation.state === "loading" ? <Loader></Loader> : ""}
        <Outlet></Outlet>
      </div>
      {isNavAndFooterShow || <Footer></Footer>}
    </>
  );
};

export default MainLayouts;
