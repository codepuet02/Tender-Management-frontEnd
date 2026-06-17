import PageHeader from "../../components/common/PageHeader";
import Filters from "../../components/common/Filters";
import Table from "../../components/common/Table";
import { useNavigate } from "react-router-dom";
import { tenders } from "../../data/tenders";

function Tenders() {
  const navigate = useNavigate();

  const columns = [
    { header: "Numero", key: "codigo" },
    { header: "Cliente", key: "empresa" },
    { header: "Objeto contractual", key: "objeto" },
    { header: "Vencimiento", key: "fechaCierre" },
    { header: "Estado", key: "estado" },
  ];

  return (
    <div className="px-4 py-6">
      <PageHeader
        title="Licitaciones"
        subtitle="12 Licitaciones Registradas"
        btnLabel="Nueva Licitacion"
      />
      <Filters />
      <div className="mt-6">
        <Table
          tenders={tenders}
          Colums={columns}
          onRowClick={true}
          navigationToDetails={(id) => navigate(`/tenders/${id}`)}
          header={true}
        />
      </div>
    </div>
  );
}

export default Tenders;
