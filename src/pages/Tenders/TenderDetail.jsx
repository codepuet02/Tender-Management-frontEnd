import { useState } from "react";
import { MoveLeft } from "lucide-react";
import Table from "../../components/common/Table";
import { useNavigate } from "react-router-dom";
import formatCOP from "../../utils/formatters";
import ModalEdit from "../../components/Tenders/ModalAddProduct";

function TenderDetail() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  // pestaña activa: "estudio" o "propuesta"
  const [activeTab, setActiveTab] = useState("estudio");

  function closeModal() {
    setIsOpen(false);
  }

  function addProduct(product) {
    setProducts((prev) => [...prev, product]);
    setIsOpen(false);
  }
  const marketStudyColumns = [
    { header: "Producto", key: "producto" },
    { header: "Proveedor", key: "nombre" },
    { header: "Cantidad", key: "cantidad" },
    { header: "P. Compra", key: "precioCompra", type: "currency" },
    { header: "P. Venta", key: "precioVenta", type: "currency", isEdit: true },
    { header: "Ganancia", key: "ganancia", type: "currency" },
  ];

  const subtotal = products.reduce(
    (sum, item) => sum + item.precioVenta * item.cantidad,
    0,
  );
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  // estilos reutilizables para las pestañas
  const tabStyle = (tab) =>
    `px-6 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
      activeTab === tab
        ? "border-primary text-primary"
        : "border-transparent text-subtitle hover:text-title"
    }`;

  // contenido de tabla + resumen, igual para ambas pestañas por ahora
  const tabContent = (
    <div className="flex flex-1 px-4 py-4 gap-4">
      <div className="flex-3 overflow-x-auto">
        <Table tenders={products} Colums={marketStudyColumns} />
      </div>

      <div className=" flex flex-col justify-between flex-1  gap-8">
        <div className="border border-border-base px-4 py-4 flex-1 ">
          <h2 className="text-base font-semibold mb-3">Resumen</h2>
          <div className="flex justify-between text-sm py-1">
            <span className="text-subtitle">Items</span>
            <span className="text-title font-medium">{products.length}</span>
          </div>
          <div className="flex justify-between text-sm py-1">
            <span className="text-subtitle">Subtotal</span>
            <span className="text-title font-medium">
              {formatCOP(subtotal)}
            </span>
          </div>
          <div className="flex justify-between text-sm py-1">
            <span className="text-subtitle">IVA (19%)</span>
            <span className="text-title font-medium">{formatCOP(iva)}</span>
          </div>
          <div className="flex justify-between text-base pt-2 mt-2 border-t border-border-base">
            <span className="font-semibold text-title">Total</span>
            <span className="font-bold text-primary">{formatCOP(total)}</span>
          </div>
        </div>
        <div className="flex gap-4  justify-between">
          <button
            onClick={() => setIsOpen(true)}
            className="border border-border-base px-4 py-2 rounded-md text-sm hover:bg-gray-100 bg-white cursor-pointer text-title"
          >
            Agregar Producto
          </button>
          <button className="px-4 py-2 border border-success bg-success-light text-success rounded-md text-sm hover:bg-green-100 cursor-pointer">
            PDF
          </button>
          <button className="border border-border-base px-4 py-2 rounded-md text-sm hover:bg-gray-100 bg-white cursor-pointer text-title">
            Cerrar Licitacion
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="px-4 py-6 flex flex-col  min-h-[calc(100vh-64px)] ">
      {isOpen && <ModalEdit closeModal={closeModal} addProduct={addProduct} />}
      {/* header: botón atrás + título + acciones */}
      <div className="flex justify-between items-center">
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
          <button className="px-4 py-1 border border-danger bg-danger-light text-danger rounded-md text-sm hover:bg-red-100 cursor-pointer">
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
      <div className="mt-4 border border-border-base rounded-lg bg-white flex flex-col flex-1">
        {/* pestañas + botones de acción en la misma barra */}
        <div className="flex justify-between items-center border-b border-border-base px-4">
          <div className="flex">
            <button
              className={tabStyle("estudio")}
              onClick={() => setActiveTab("estudio")}
            >
              Estudio de Mercado
            </button>
            <button
              className={tabStyle("propuesta")}
              onClick={() => setActiveTab("propuesta")}
            >
              Propuesta
            </button>
          </div>
        </div>

        {/* contenido de la pestaña activa */}
        {tabContent}
      </div>

      {/* botones de documentos — fuera del contenedor de pestañas */}
      <div className="flex gap-4 mt-4 justify-start">
        <button className="border border-border-base px-4 py-2 rounded-md text-sm hover:bg-gray-100 bg-white cursor-pointer text-title font-medium">
          Generar Cartas
        </button>
        <button className="border border-border-base px-4 py-2 rounded-md text-sm hover:bg-gray-100 bg-white cursor-pointer text-title font-medium">
          Generar Remision
        </button>
        <button className="border border-border-base px-4 py-2 rounded-md text-sm hover:bg-gray-100 bg-white cursor-pointer text-title font-medium">
          Generar Factura
        </button>
      </div>
    </div>
  );
}

export default TenderDetail;
