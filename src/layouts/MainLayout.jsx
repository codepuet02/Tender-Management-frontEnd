import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

function MainLayout() {
  const { pathname } = useLocation();

  {
    /*Mapa para identificar la seccion de la pagina*/
  }
  const titleMap = {
    "/": "Dashboard",
    "/tenders": "Licitaciones",
    "/clients": "Clientes",
    "/providers": "Proveedores",
    "/catalog": "Catalogo",
    "/products": "Productos",
  };

  const isDetails = pathname.startsWith("/tenders/") && pathname !== "/tenders";
  const title = isDetails ? "Detalle de licitacion" : titleMap[pathname];

  return (
    <div className="flex flex-row bg-page">
      {/*usamos componente Sidebar*/}
      <div>
        <Sidebar />
      </div>
      {/*seccion que identifica la seccion de la pagina*/}
      <div className="flex-1 ">
        <header className="h-16 bg-white flex items-center px-4 border border-border-base">
          <h1 className="text-2xl font-semibold text-title ">
            {/*insertamos el valor correspondiente al pathname*/}
            {title}
          </h1>
        </header>
        {/*seccion donde se insertan las paginas*/}
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
