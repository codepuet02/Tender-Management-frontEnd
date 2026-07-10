import formatCOP from "../../utils/formatters";
import RowActions from "../common/RowActions";
import { useState } from "react";
function TenderProductEditableTable({ tenders, Colums }) {
  const [editId, setEditId] = useState(null);

  function editProduct(id) {
    setEditId(id);
  }
  function saveProduct(id) {}
  function cancelEdit() {}

  function deleteProduct() {}
  return (
    <div className="bg-surface ">
      <table className="w-full text-sm table-fixed">
        <thead className="bg-secondary text-subtitle uppercase text-xs sticky top-0 z-10">
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

        <tbody className="divide-y divide-border-base text-title ">
          {tenders.map((row) => {
            return (
              <tr key={row.id}>
                {Colums.map((c) => {
                  return (
                    <td key={c.key} className="px-4 py-3">
                      {editId === row.id && c.isEdit ? (
                        <input
                          className="border w-full border-border-base px-1 py-1 text-sm focus:outline-none "
                          defaultValue={row[c.key]}
                        ></input>
                      ) : c.type === "currency" ? (
                        formatCOP(row[c.key])
                      ) : c.type === "actions" ? (
                        <RowActions
                          onEdit={editProduct}
                          onDelete={deleteProduct}
                          id={row.id}
                          saveProduct={saveProduct}
                          cancelEdit={cancelEdit}
                          isEditing={editId === row.id}
                        />
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

export default TenderProductEditableTable;
