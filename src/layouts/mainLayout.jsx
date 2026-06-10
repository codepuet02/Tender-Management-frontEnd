import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

function MainLayout() {
  return (
    <div className="flex flex-row bg-page">
      <div>
        <Sidebar />
      </div>
      <div className="border border-black flex-1">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
