import formatCOP from "../../utils/formatters";
import RowActions from "../common/RowActions";
import { useState } from "react";
function TenderProductEditableTable({
  tenders,
  Colums,
  saveEditedProduct,
  deletedRowProduct,
  isLocked,
}) {
  const [editId, setEditId] = useState(null);
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);

  function calculateProfit(price, cost) {
    return price - cost;
  }

  function editProduct(id) {
    setEditId(id);
    let product = tenders.find((p) => p.id === id);
    setAmount(product.cantidad);
    setPrice(product.precioVenta);
  }
  function cancelEdit() {
    setEditId(null);
  }
  function saveProduct(id) {
    if (amount === "" || price === "") {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    }
    saveEditedProduct(id, amount, price);
    setEditId(null);
    setAmount(1);
    setPrice(0);
  }

  function deleteProduct(id) {
    deletedRowProduct(id);
  }

  function renderCellContent(row, columns) {
    if (editId === row.id && columns.isEdit) {
      if (columns.type === "currency") {
        return (
          <input
            className="border w-full border-border-base px-1 py-1 text-sm focus:outline-none "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            min="0"
            max="99999999999"
          ></input>
        );
      } else {
        return (
          <input
            type="number"
            min="1"
            step="1"
            max="100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border w-full border-border-base px-1 py-1 text-sm focus:outline-none "
          ></input>
        );
      }
    }

    switch (columns.type) {
      case "currency":
        if (columns.key === "ganancia") {
          return formatCOP(calculateProfit(row.precioVenta, row.precioCompra));
        }
        return formatCOP(row[columns.key]);

      case "actions":
        return (
          <RowActions
            onEdit={editProduct}
            onDelete={deleteProduct}
            id={row.id}
            saveProduct={saveProduct}
            cancelEdit={cancelEdit}
            isEditing={editId === row.id}
            isLocked={isLocked}
          />
        );

      default:
        return row[columns.key];
    }
  }

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
                      {renderCellContent(row, c)}
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
