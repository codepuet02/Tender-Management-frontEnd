import Table from "../components/Table";
import DashboardCard from "../components/Dashboard-card";

function Dashboard() {
  const GeneralInfo = [
    { value: 12, label: "Licitaciones Activas", icon: "FileText" },
    { value: 34, label: "Productos Totales", icon: "Package" },
    { value: 8, label: "Proveedores Totales", icon: "Truck" },
    { value: 15, label: "Clientes Totales", icon: "Users" },
  ];

  const Colums = [
    { header: "Numero", key: "number" },
    { header: "Cliente", key: "client" },
    { header: "Objeto contractual", key: "object" },
    { header: "Vencimiento", key: "expiration" },
    { header: "Estado", key: "status" },
  ];

  const tenders = [
    {
      codigo: "LIC-2026-001",
      empresa: "Ecopetrol S.A.",
      objeto: "Suministro de equipos industriales",
      fechaCierre: "2023-12-31",
      estado: "Proceso",
    },
    {
      codigo: "LIC-2026-002",
      empresa: "Alcaldía de Bogotá",
      objeto: "Mantenimiento de infraestructura vial",
      fechaCierre: "2024-01-15",
      estado: "Listo",
    },
    {
      codigo: "LIC-2026-003",
      empresa: "Ministerio de Educación",
      objeto: "Dotación de equipos tecnológicos",
      fechaCierre: "2024-02-10",
      estado: "Pendiente",
    },
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

      <div className=" h-96 w-full mt-6">
        <Table tenders={tenders} />
      </div>
    </div>
  );
}

export default Dashboard;
