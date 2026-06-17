import Table from "../../components/common/Table";
import DashboardCard from "../../components/dashboard/DashboardCard";
import PageHeader from "../../components/common/PageHeader";
import { useNavigate } from "react-router-dom";
import { tenders } from "../../data/tenders";

function Dashboard() {
  const navigate = useNavigate();

  function RedirectTenders() {
    navigate("/tenders");
  }

  const infoHeader = {
    title: "Bienvenido,Andres",
    subtitle: "Resumen General - Junio de 2026",
    btnLabel: " + Nueva Licitacion",
  };
  const GeneralInfo = [
    { value: 12, label: "Licitaciones Activas", icon: "FileText" },
    { value: 34, label: "Productos Totales", icon: "Package" },
    { value: 8, label: "Proveedores Totales", icon: "Truck" },
    { value: 15, label: "Clientes Totales", icon: "Users" },
  ];

  const Colums = [
    { header: "Numero", key: "codigo" },
    { header: "Cliente", key: "empresa" },
    { header: "Objeto contractual", key: "objeto" },
    { header: "Vencimiento", key: "fechaCierre" },
    { header: "Estado", key: "estado" },
  ];

  return (
    <div className="px-4 py-6">
      {/*seccion donnde mostramos el usuario logueado*/}
      <PageHeader
        title={infoHeader.title}
        subtitle={infoHeader.subtitle}
        btnLabel={infoHeader.btnLabel}
      />
      {/*seccion donde usamos el componente dashboardcard para renderizar las cards con sus respectivos datos*/}
      <div className="h-32 flex justify-between gap-4 mt-6">
        {GeneralInfo.map((card, index) => (
          <DashboardCard key={index} card={card} />
        ))}
      </div>
      {/*usamos el componente Table para renderizar la respectiva tabla*/}
      <div className=" h-96 w-full mt-6">
        <Table
          tenders={tenders}
          Colums={Colums}
          btnHeader={true}
          onRowClick={false}
          header={true}
          redirecTender={RedirectTenders}
        />
      </div>
    </div>
  );
}

export default Dashboard;
