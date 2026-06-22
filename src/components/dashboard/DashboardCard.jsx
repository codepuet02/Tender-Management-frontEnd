import {
  LayoutDashboard,
  FileText,
  Users,
  Truck,
  BookOpen,
  Package,
} from "lucide-react";

{
  /*coomponente que devulve las cards del dashboard*/
}
function DashboardCard({ card: { value, label, icon } }) {
  {
    /*objeto que contiene los respectivos iconos ah usar con sus estilos*/
  }
  const icons = {
    FileText: <FileText size={28} className="text-blue-600" />,
    Package: <Package size={28} className="text-blue-600" />,
    Truck: <Truck size={28} className="text-blue-600" />,
    Users: <Users size={28} className="text-blue-600" />,
  };

  return (
    <div className="flex flex-1 items-center gap-4 p-4 bg-surface rounded-xl shadow-md">
      <div className="bg-blue-100 p-3 rounded-lg">{icons[icon]}</div>
      <div className="div">
        <h2 className="text-2xl font-bold text-title">{value}</h2>
        <p className="text-sm text-subtitle">{label}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
