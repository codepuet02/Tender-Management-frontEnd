import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import TenderProductEditableTable from "../../components/Tenders/TenderProductEditableTable";
import { useNavigate } from "react-router-dom";
import formatCOP from "../../utils/formatters";
import ModalEdit from "../../components/Tenders/ModalAddProduct";

function TenderDetail() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [productMarketStudy, setProductMarketStudy] = useState([]);
  const [productProposal, setProductProposal] = useState([]);
  const [stepCurrent, setStepCurrent] = useState("marketStudy");
  const steps = ["marketStudy", "proposal", "documents"];
  const [activeTab, setActiveTab] = useState("marketStudy");

  function closeModal() {
    setIsOpen(false);
  }

  function saveEditProductProposal(id, amount, price) {
    setProductProposal((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, cantidad: amount, precioVenta: price }
          : product,
      ),
    );
  }

  function deletedRowProductProposal(id) {
    setProductProposal((prev) => prev.filter((product) => product.id !== id));
  }
  function addProduct(product) {
    setProductMarketStudy((prev) => [...prev, product]);
    setIsOpen(false);
  }

  function deletedRowProduct(id) {
    setProductMarketStudy((prev) =>
      prev.filter((product) => product.id !== id),
    );
  }

  function saveEditedProduct(id, amount, price) {
    setProductMarketStudy((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, cantidad: amount, precioVenta: price }
          : product,
      ),
    );
  }

  const marketStudyColumns = [
    { header: "Producto", key: "producto" },
    { header: "Proveedor", key: "nombre" },
    { header: "Cantidad", key: "cantidad", isEdit: true },
    { header: "P. Compra", key: "precioCompra", type: "currency" },
    { header: "P. Venta", key: "precioVenta", type: "currency", isEdit: true },
    { header: "Ganancia", key: "ganancia", type: "currency" },
    { header: "Acciones", key: "acciones", type: "actions" },
  ];

  // estilos reutilizables para las pestañas
  const tabStyle = (tab) =>
    `px-6 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
      activeTab === tab
        ? "border-primary text-primary"
        : "border-transparent text-subtitle hover:text-title"
    }`;

  function contentPerCurrentStep(step) {
    let caluledPerTab =
      step === "marketStudy" ? productMarketStudy : productProposal;
    const subtotal = caluledPerTab.reduce(
      (sum, item) => sum + item.precioVenta * item.cantidad,
      0,
    );
    const iva = subtotal * 0.19;
    const total = subtotal + iva;
    let isLocked = activeTab != stepCurrent;

    return (
      <div className="flex flex-col  px-2 py-0  min-h-0 flex-1">
        {step !== "documents" && (
          <div className=" flex gap-4 justify-end py-2">
            {step === "marketStudy" && (
              <button
                disabled={isLocked ? true : false}
                onClick={() => setIsOpen(true)}
                className={
                  isLocked
                    ? "px-4 py-1 rounded-md text-sm bg-secondary cursor-not-allowed text-muted font-medium "
                    : " border border-primary px-4 py-1 rounded-md text-sm hover:bg-primary-hover bg-primary cursor-pointer text-white font-medium "
                }
              >
                Agregar Producto
              </button>
            )}
            <button className="px-4 py-1 border border-success bg-success text-white rounded-md text-sm hover:bg-green-700 cursor-pointer font-medium">
              Exportar PDF
            </button>
          </div>
        )}
        {step !== "documents" && (
          <div className=" flex h-full min-h-0 gap-1">
            <div className="overflow-auto flex-3 ">
              <TenderProductEditableTable
                tenders={
                  step === "marketStudy" ? productMarketStudy : productProposal
                }
                Colums={marketStudyColumns}
                saveEditedProduct={
                  step === "marketStudy"
                    ? saveEditedProduct
                    : saveEditProductProposal
                }
                deletedRowProduct={
                  step === "marketStudy"
                    ? deletedRowProduct
                    : deletedRowProductProposal
                }
                isLocked={isLocked}
              />
            </div>

            <div className=" flex  flex-col justify-between  flex-1   ">
              <div className="border border-border-base px-4 py-4 flex-1 ">
                <h2 className="text-base font-semibold mb-3">Resumen</h2>
                <div className="flex justify-between text-sm py-1">
                  <span className="text-subtitle">Items</span>
                  <span className="text-title font-medium">
                    {caluledPerTab.length}
                  </span>
                </div>
                <div className="flex justify-between text-sm py-1">
                  <span className="text-subtitle">Subtotal</span>
                  <span className="text-title font-medium">
                    {formatCOP(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sm py-1">
                  <span className="text-subtitle">IVA (19%)</span>
                  <span className="text-title font-medium">
                    {formatCOP(iva)}
                  </span>
                </div>
                <div className="flex justify-between text-base pt-2 mt-2 border-t border-border-base">
                  <span className="font-semibold text-title">Total</span>
                  <span className="font-bold text-primary">
                    {formatCOP(total)}
                  </span>
                </div>
              </div>
              <div className="flex gap-4  justify-center py-4 ">
                <button
                  disabled={isLocked ? true : false}
                  onClick={() => {
                    if (caluledPerTab.length <= 0) {
                      alert("Debes seleccionar productos");
                      return;
                    }
                    if (activeTab === "marketStudy") {
                      setProductProposal(
                        productMarketStudy.map((p) => ({ ...p })),
                      );
                      setActiveTab("proposal");
                      setStepCurrent("proposal");
                    } else if (activeTab === "proposal") {
                      setActiveTab("documents");
                      setStepCurrent("documents");
                    }
                  }}
                  className={
                    isLocked
                      ? "flex items-center gap-2 px-4 py-2 rounded-md text-sm bg-secondary   text-muted cursor-not-allowed font-medium"
                      : "flex items-center gap-2 border border-danger  px-4 py-2 rounded-md text-sm bg-danger-light hover:bg-red-100 cursor-pointer text-danger font-medium"
                  }
                >
                  Cerrar Cotizacion
                  <MoveRight size={17} />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "documents" && <div className="border h-full"></div>}
      </div>
    );
  }

  // contenido de tabla + resumen, igual para ambas pestañas por ahora

  return (
    <div className="px-2 py-2 flex flex-col  h-[calc(100vh-64px)] ">
      {isOpen && <ModalEdit closeModal={closeModal} addProduct={addProduct} />}
      {/* header: botón atrás + título + acciones */}
      <div className="flex  justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-white border border-border-base rounded-md px-4 py-1 text-sm text-title hover:bg-gray-100 cursor-pointer font-semibold flex items-center gap-2"
          >
            <MoveLeft size={17} />
            Atras
          </button>
          <div>
            <h1 className="font-bold text-3xl">LIC-2026-001</h1>
            <p className="text-subtitle text-sm">
              Ecopetrol S.A - Contrato CONT-001-2026
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="border border-border-base px-4 py-1 rounded-md text-sm hover:bg-gray-100 bg-white cursor-pointer">
            Editar
          </button>
          <button className="px-4 py-1 border border-danger bg-danger text-white rounded-md text-sm hover:bg-red-700 cursor-pointer">
            Eliminar
          </button>
        </div>
      </div>

      {/* información de la licitación */}
      <div className="flex bg-white mt-4 px-4 py-4 rounded-lg border border-border-base">
        <div className="flex flex-3 flex-col gap-2">
          <h2 className="font-semibold text-lg">Informacion de Licitacion</h2>
          <div className="flex justify-between">
            <div>
              <p className="text-subtitle font-medium text-sm">Numero</p>
              <p className="font-medium text-title text-sm">LIC-2026-001</p>
            </div>
            <div>
              <p className="text-subtitle font-medium text-sm">Cliente</p>
              <p className="font-medium text-title text-sm">Ecopetrol S.A</p>
            </div>
            <div>
              <p className="text-subtitle font-medium text-sm">
                Numero de contrato
              </p>
              <p className="font-medium text-title text-sm">CONT-2026-001</p>
            </div>
            <div>
              <p className="text-subtitle font-medium text-sm">Vencimiento</p>
              <p className="font-medium text-title text-sm">
                30 de junio de 2026
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-subtitle font-medium text-sm">
              Objeto Contractual
            </h2>
            <p className="text-title text-sm">
              Suministro de equipos industriales para la planta de producción
              Barrancabermeja, incluyendo transformadores, cables y sistemas
              UPS.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <p className="text-title text-sm">Proceso</p>
        </div>
      </div>

      {/* contenedor de pestañas */}
      <div className="mt-4 border border-border-base rounded-lg bg-white flex flex-col flex-1 min-h-0">
        {/* pestañas + botones de acción en la misma barra */}
        <div className="flex justify-between items-center border-b border-border-base px-4">
          <div className="flex">
            <button
              className={tabStyle("marketStudy")}
              onClick={() => setActiveTab("marketStudy")}
            >
              Estudio de Mercado
            </button>
            <button
              disabled={steps.indexOf(stepCurrent) <= 0 ? true : false}
              className={tabStyle("proposal")}
              onClick={() => setActiveTab("proposal")}
            >
              Propuesta
            </button>
            <button
              disabled={steps.indexOf(stepCurrent) <= 1 ? true : false}
              className={tabStyle("documents")}
              onClick={() => setActiveTab("documents")}
            >
              Documentos
            </button>
          </div>
        </div>

        {/* contenido de la pestaña activa */}
        {contentPerCurrentStep(activeTab)}
      </div>
    </div>
  );
}

export default TenderDetail;
