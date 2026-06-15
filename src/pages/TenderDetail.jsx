import { MoveLeft } from "lucide-react";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

function TenderDetail() {
  const navigate = useNavigate();
  function previusPage() {
    navigate(-1);
  }
  const marketStudyColumns = [
    { header: "Producto", key: "producto" },
    { header: "Proveedor", key: "proveedor" },
    { header: "Cantidad", key: "cantidad" },
    { header: "P. Compra", key: "precioCompra", type: "currency" },
    { header: "P. Venta", key: "precioVenta", type: "currency" },
    { header: "Ganancia", key: "ganancia", type: "currency" },
  ];
  const marketStudyItems = [
    {
      id: 1,
      producto: "Transformador 25 kVA",
      proveedor: "TechSolutions Ltda.",
      cantidad: 5,
      precioCompra: 2500000,
      precioVenta: 3000000,
      ganancia: 2500000,
    },
    {
      id: 2,
      producto: "Cable THHN Cal. 12",
      proveedor: "Grupo Electrónico",
      cantidad: 200,
      precioCompra: 8500,
      precioVenta: 12000,
      ganancia: 700000,
    },
    {
      id: 3,
      producto: "UPS 3000 VA",
      proveedor: "Equipos Industriales S.A.",
      cantidad: 2,
      precioCompra: 4200000,
      precioVenta: 5100000,
      ganancia: 1800000,
    },
  ];

  return (
    <div className="px-4 py-6 flex flex-col ">
      {/* header informacion */}
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <div className="div">
            <button
              onClick={previusPage}
              className="bg-white border border-border-base rounded-md px-4 py-1 text-sm text-title hover:bg-gray-100 cursor-pointer font-semibold flex items-center gap-2"
            >
              <MoveLeft size={17} />
              Atras
            </button>
          </div>
          <div className="">
            <h1 className="font-bold text-3xl ">LIC-2026-001</h1>
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

      {/* informacion */}

      <div className="flex bg-white mt-4 px-4 py-4 rounded-lg border border-border-base">
        <div className="flex flex-3 flex-col gap-2">
          <h2 className="font-semibold text-lg">Informacion de Licitacion</h2>
          <div className="flex justify-between">
            <div className="div">
              <p className="text-subtitle font-medium text-sm">Numero</p>
              <p className="font-medium text-title text-sm">LIC-2026-001</p>
            </div>
            <div>
              <p className="text-subtitle font-medium text-sm">Cliente</p>
              <p className="font-medium text-title text-sm">Ecopetro S.A</p>
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

          <div className="div">
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
      {/* creacion de licitaciones etc */}
      <div className="flex flex-col mt-4">
        <div className="flex gap-4 min-h-100">
          <div className="flex flex-col items-center">
            <div className=" w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-1 flex-1 bg-primary"></div>
          </div>
          <div className="border border-border-base  rounded-lg w-full bg-white">
            <div className="flex justify-between items-center border-b border-gray-300 px-4 py-3">
              <h2 className="text-base font-semibold">Estudio de Mercado</h2>
              <div className="flex gap-4 ">
                <button className="border border-border-base px-4 py-1 rounded-md text-sm hover:bg-gray-100 bg-white cursor-pointer text-title ">
                  Editar
                </button>
                <button className="px-4 py-1 border border-success bg-success-light text-success rounded-md text-sm hover:bg-green-100 cursor-pointer">
                  Descargar PDF
                </button>
              </div>
            </div>
            {/*tabla*/}

            <Table tenders={marketStudyItems} Colums={marketStudyColumns} />
          </div>
        </div>

        {/* seccion 2 */}

        <div className="flex gap-4 min-h-90 ">
          <div className="flex flex-col items-center">
            <div className=" w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-1 flex-1 bg-primary"></div>
          </div>
          <div className="div">seccion 2</div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className=" w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-1 flex-1 bg-primary"></div>
          </div>
          <div className="div">seccion 3</div>
        </div>
      </div>
    </div>
  );
}

export default TenderDetail;
