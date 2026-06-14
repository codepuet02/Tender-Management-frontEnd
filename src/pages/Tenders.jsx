import PageHeader from "../components/PageHeader";
import Filters from "../components/Filters";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

function Tenders() {
  const navigate = useNavigate();
  function navigationToDetails(id) {
    navigate(`/tenders/${id}`);
  }

  const Colums = [
    { header: "Numero", key: "codigo" },
    { header: "Cliente", key: "empresa" },
    { header: "Objeto contractual", key: "objeto" },
    { header: "Vencimiento", key: "fechaCierre" },
    { header: "Estado", key: "estado" },
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
      <PageHeader
        title={"Licitaciones"}
        subtitle={"12 Licitaciones Registradas"}
        btnLabel={"Nueva Licitacion"}
      />
      <Filters />
      <div className="mt-6">
        <Table
          tenders={tenders}
          Colums={Colums}
          onRowClick={true}
          navigationToDetails={navigationToDetails}
          header={true}
        />
      </div>
    </div>
  );
}

export default Tenders;
