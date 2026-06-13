function Table({ tenders }) {
  const colorStatus = [
    { status: "Proceso", style: "bg-warning-light text-warning" },
    { status: "Listo", style: "bg-success-light text-success" },
    { status: "Pendiente", style: "bg-danger-light text-danger" },
  ];

  return (
    <div className="bg-surface rounded-xl shadow-md overflow-hidden">
      <div className="px-4 py-3 border-b border-border-base flex justify-between">
        <h1 className="text-lg font-semibold text-title">
          Licitaciones Recientes
        </h1>
        <button className="border border-border-base rounded-md px-4 py-1 text-sm text-title hover:bg-gray-100 cursor-pointer ">
          Ver Todas
        </button>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-secondary text-subtitle uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left">Numero</th>
            <th className="px-4 py-3 text-left">Cliente</th>
            <th className="px-4 py-3 text-left">Objeto contractual</th>
            <th className="px-4 py-3 text-left">Vencimiento</th>
            <th className="px-4 py-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-base text-title">
          {tenders.map((row) => {
            let style = colorStatus.find((c) => c.status == row.estado);

            return (
              <tr key={row.codigo}>
                <td className="px-4 py-3">{row.codigo}</td>
                <td className="px-4 py-3">{row.empresa}</td>
                <td className="px-4 py-3">{row.objeto}</td>
                <td className="px-4 py-3">{row.fechaCierre}</td>
                <td className="px-4 py-3">
                  <span
                    className={`${style.style} text-xs font-medium px-4 py-1 rounded-full`}
                  >
                    {row.estado}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
