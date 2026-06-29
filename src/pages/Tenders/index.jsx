import PageHeader from "../../components/common/PageHeader";
import Filters from "../../components/common/Filters";
import Table from "../../components/common/Table";
import { useNavigate } from "react-router-dom";
import { tenders } from "../../data/tenders";
import { useState } from "react";
import ModalCreate from "../../components/Tenders/ModalCreate";

function Tenders() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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
        openModal={openModal}
      />
      <Filters />
      {isOpen && <ModalCreate closeModal={closeModal} />}
      <div className="mt-6 bg-white shadow-md">
        <div className="px-4 py-3 border-b border-border-base flex justify-betwee">
          <h1 className="text-lg font-semibold text-title">
            Licitaciones Recientes
          </h1>
        </div>
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
