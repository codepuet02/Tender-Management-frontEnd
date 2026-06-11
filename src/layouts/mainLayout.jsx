import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useLocation } from "react-router-dom";

function MainLayout() {
  const { pathname } = useLocation();

  const titleMap = {
    "/": "Dashboard",
    "/tenders": "Licitaciones",
    "/clients": "Clientes",
    "/providers": "Proveedores",
    "/catalog": "Catalogo",
    "/products": "Productos",
  };

  return (
    <div className="flex flex-row bg-page">
      <div>
        <Sidebar />
      </div>
      <div className="border border-black flex-1 ">
        <header className="h-16 bg-white flex items-center px-4">
          <h1 className="text-2xl font-semibold text-title">
            {titleMap[pathname]}
          </h1>
        </header>
        <Outlet className="p-4 border border-black" />
      </div>
    </div>
  );
}
export default MainLayout;
