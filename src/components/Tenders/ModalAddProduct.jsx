import { Search } from "lucide-react";
import { useState } from "react";
import formatCOP from "../../utils/formatters";

function ModalEdit({ closeModal }) {
  const [providerId, setProviderId] = useState(0);
  const [search, setSearch] = useState("");

  const Colums = [
    { header: "Proveedor", key: "nombre" },
    { header: "Presentacion", key: "presentacion" },
    { header: "P. Compra", key: "precioCompra", type: "currency" },
    { header: "P. Venta", key: "precioVenta", type: "currency" },
  ];
  const proveedores = [
    {
      id: 1,
      producto: "lapiz",
      nombre: "TechSolutions Ltda.",
      presentacion: "Unidad",
      precioCompra: 2500000,
      precioVenta: 3200000,
    },
    {
      id: 2,
      producto: "lapiz",
      nombre: "Electro Sur S.A.",
      presentacion: "Paquete x12",
      precioCompra: 1800000,
      precioVenta: 2300000,
    },
    {
      id: 3,
      producto: "papel",
      nombre: "Distribuidora Norte",
      presentacion: "Rollo x100m",
      precioCompra: 850000,
      precioVenta: 1100000,
    },
    {
      id: 4,
      producto: "borrador",
      nombre: "Distribuidora Norte",
      presentacion: "Rollo x100m",
      precioCompra: 850000,
      precioVenta: 1100000,
    },
    {
      id: 5,
      producto: "borrador",
      nombre: "Distribuidora Norte",
      presentacion: "Rollo x100m",
      precioCompra: 850000,
      precioVenta: 1100000,
    },
    {
      id: 6,
      producto: "borrador",
      nombre: "Distribuidora Norte",
      presentacion: "Rollo x100m",
      precioCompra: 850000,
      precioVenta: 1100000,
    },
    {
      id: 7,
      producto: "borrador",
      nombre: "Distribuidora Norte",
      presentacion: "Rollo x100m",
      precioCompra: 850000,
      precioVenta: 1100000,
    },
    {
      id: 8,
      producto: "borrador",
      nombre: "Distribuidora Norte",
      presentacion: "Rollo x100m",
      precioCompra: 850000,
      precioVenta: 1100000,
    },
  ];

  const FilterProviders = proveedores.filter((p) =>
    p.producto.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-surface rounded-xl w-full max-w-4xl p-6 shadow-lg min-h-150">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-title">Agregar Producto</h2>
          <button
            onClick={closeModal}
            className="text-muted hover:text-title cursor-pointer text-xl leading-none"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-4 justify-between ">
          <div className="flex flex-col gap-1 ">
            <label className="text-subtitle text-sm font-medium">
              Producto
            </label>
            <div className="flex items-center relative">
              <Search className="absolute ml-2 text-muted" size={17} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-border-base rounded-md pl-7 py-2 text-sm w-full text-title focus:outline-none focus:border-primary"
                placeholder="Buscar producto..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-subtitle text-sm font-medium">
              Proveedor Disponibles
            </label>
            <div className=" w-full h-100 overflow-y-auto">
              {FilterProviders.length === 0 ? (
                <div className=" flex justify-center h-full items-center">
                  <span className="text-subtitle text-sm  font-medium">
                    Sin proveedores disponibles para este producto
                  </span>
                </div>
              ) : (
                <table className="w-full text-sm table-fixed">
                  <thead className="bg-secondary text-subtitle uppercase text-xs">
                    <tr>
                      {Colums.map((header) => (
                        <th key={header.key} className="px-4 py-3 text-left">
                          {header.header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-base text-title ">
                    {FilterProviders.map((p) => {
                      return (
                        <tr
                          onClick={() => {
                            setProviderId(p.id);
                          }}
                          className={
                            p.id === providerId
                              ? "bg-secondary-hover cursor-pointer border-primary"
                              : "hover:bg-secondary-hover cursor-pointer"
                          }
                          key={p.id}
                        >
                          {Colums.map((c) => (
                            <td className="px-4 py-3" key={c.key}>
                              {c.hasOwnProperty("type")
                                ? formatCOP(p[c.key])
                                : p[c.key]}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2 ">
            <button
              onClick={closeModal}
              className="px-4 py-2 text-sm font-medium rounded-md bg-secondary hover:bg-secondary-hover text-title cursor-pointer"
            >
              Cancelar
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-primary hover:bg-primary-hover text-white cursor-pointer">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalEdit;
