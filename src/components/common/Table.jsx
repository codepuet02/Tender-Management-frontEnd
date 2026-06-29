import formatCOP from "../../utils/formatters";
import Badge from "./Badge";

// Componente de tabla reutilizable para mostrar licitaciones
// Props:
//   tenders: array de licitaciones a mostrar
//   Colums: array de columnas con { header: string, key: string }
function Table({ tenders, Colums, onRowClick, navigationToDetails, isEdit }) {
  return (
    <div className="bg-surface overflow-hidden">
      {/* Encabezado de la tarjeta */}

      <table className="w-full text-sm">
        {/* Encabezados de columna dinámicos */}
        <thead className="bg-secondary text-subtitle uppercase text-xs">
          <tr>
            {Colums.map((c) => {
              return (
                <th key={c.key} className="px-4 py-3 text-left">
                  {c.header}
                </th>
              );
            })}
          </tr>
        </thead>
        {/* Filas de licitaciones */}
        <tbody className="divide-y divide-border-base text-title ">
          {tenders.map((row) => {
            return (
              <tr
                key={row.codigo}
                className={
                  onRowClick ? "hover:bg-secondary-hover cursor-pointer" : ""
                }
                onClick={
                  onRowClick ? () => navigationToDetails(row.codigo) : null
                }
              >
                {Colums.map((c) => {
                  return (
                    <td key={c.key} className="px-4 py-3">
                      {c.key === "estado" ? (
                        <Badge label={row[c.key]} />
                      ) : c.hasOwnProperty("type") ? (
                        formatCOP(row[c.key])
                      ) : (
                        row[c.key]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
