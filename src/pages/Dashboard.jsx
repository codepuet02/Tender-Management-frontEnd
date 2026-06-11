import DashboardCard from "../components/Dashboard-card";

function Dashboard() {
  const GeneralInfo = [
    { value: 12, label: "Licitaciones Activas", icon: "FileText" },
    { value: 34, label: "Productos Totales", icon: "Package" },
    { value: 8, label: "Proveedores Totales", icon: "Truck" },
    { value: 15, label: "Clientes Totales", icon: "Users" },
  ];

  return (
    <div className="px-4 py-6">
      <div className="div">
        <h1 className="text-3xl font-bold text-title">Bienvenido, Andres</h1>
        <p className="text-sm text-subtitle">Resumen General - Junio de 2026</p>
      </div>

      <div className="h-32 flex justify-between gap-4 mt-6">
        {GeneralInfo.map((card, index) => (
          <DashboardCard key={index} card={card} />
        ))}
      </div>

      <div className="div"></div>
    </div>
  );
}

export default Dashboard;
