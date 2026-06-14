// Componente de tabla reutilizable para mostrar licitaciones
// Props:
//   tenders: array de licitaciones a mostrar
//   Colums: array de columnas con { header: string, key: string }
function Table({
  tenders,
  Colums,
  btnHeader,
  onRowClick,
  navigationToDetails,
  header,
  redirecTender,
}) {
  // Estilos de color según el estado de la licitación
  const colorStatus = [
    { status: "Proceso", style: "bg-warning-light text-warning" },
    { status: "Listo", style: "bg-success-light text-success" },
    { status: "Pendiente", style: "bg-danger-light text-danger" },
  ];

  return (
    <div className="bg-surface rounded-xl shadow-md overflow-hidden">
      {/* Encabezado de la tarjeta */}
      {header && (
        <div className="px-4 py-3 border-b border-border-base flex justify-between">
          <h1 className="text-lg font-semibold text-title">
            Licitaciones Recientes
          </h1>
          {btnHeader && (
            <button
              onClick={redirecTender}
              className="border border-border-base rounded-md px-4 py-1 text-sm text-title hover:bg-gray-100 cursor-pointer "
            >
              Ver Todas
            </button>
          )}
        </div>
      )}

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
            // Busca el estilo de color según el estado de la fila

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
                  let style = colorStatus.find((c) => c.status == row.estado);
                  return (
                    <td key={c.key} className="px-4 py-3">
                      {c.key === "estado" ? (
                        <span
                          className={`${style?.style} text-xs font-medium px-4 py-1 rounded-full`}
                        >
                          {row[c.key]}
                        </span>
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
