import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  Truck,
  BookOpen,
  Package,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="w-60 bg-sidebar h-screen flex flex-col p-4 ">
      {/*Logo */}
      <div className="flex flex-col border border-white/20 p-4 rounded">
        <h1 className="text-2xl font-semibold text-white ">Jialicita</h1>
        <p className="text-sm text-white ">Gestion de Licitaciones</p>
      </div>

      {/*Menu */}

      <div className="flex flex-col gap-2 mt-4">
        <p className="text-sidebar-muted p-2 text-sm font-medium">PRINCIPAL</p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-1 text-white bg-sidebar-active p-2 flex "
              : "text-sidebar-text hover:bg-sidebar-active text-base font-medium p-2 flex items-center gap-1"
          }
        >
          <LayoutDashboard size={17} />
          Dashboard
        </NavLink>
        <NavLink
          to="/tenders"
          className={({ isActive }) =>
            isActive
              ? " flex items-center gap-1 text-white bg-sidebar-active p-2"
              : "text-sidebar-text hover:bg-sidebar-active text-base font-medium p-2 flex items-center gap-1"
          }
        >
          <FileText size={17} />
          Licitaciones
        </NavLink>
        <p className="text-sidebar-muted p-2 text-sm font-medium">GESTION</p>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? " flex items-center gap-1 text-white bg-sidebar-active p-2"
              : "text-sidebar-text hover:bg-sidebar-active text-base font-medium p-2 flex items-center gap-1"
          }
        >
          <Package size={17} />
          Productos
        </NavLink>
        <NavLink
          to="/providers"
          className={({ isActive }) =>
            isActive
              ? " flex items-center gap-1 text-white bg-sidebar-active p-2"
              : "text-sidebar-text hover:bg-sidebar-active text-base font-medium p-2 flex items-center gap-1"
          }
        >
          <Truck size={17} />
          Proveedores
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive
              ? " flex items-center gap-1 text-white bg-sidebar-active p-2"
              : "text-sidebar-text hover:bg-sidebar-active text-base font-medium p-2 flex items-center gap-1"
          }
        >
          <Users size={17} />
          Clientes
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive
              ? " flex items-center gap-1 text-white bg-sidebar-active p-2"
              : "text-sidebar-text hover:bg-sidebar-active text-base font-medium p-2 flex items-center gap-1"
          }
        >
          <BookOpen size={17} />
          Catálogo
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
