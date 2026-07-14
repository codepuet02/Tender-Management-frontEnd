import { Pen, Trash2, Check, X } from "lucide-react";
function RowActions({
  onEdit,
  onDelete,
  id,
  saveProduct,
  cancelEdit,
  isEditing,
  isLocked,
}) {
  return (
    <div className="flex gap-2">
      <button
        disabled={isLocked ? true : false}
        className={
          isLocked
            ? "bg-secondary text-muted cursor-not-allowed px-4 py-2 rounded-md "
            : "bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark cursor-pointer"
        }
        onClick={isEditing ? () => saveProduct(id) : () => onEdit(id)}
      >
        {isEditing ? <Check size={16} /> : <Pen size={16} />}
      </button>
      <button
        disabled={isLocked ? true : false}
        className={
          isLocked
            ? "bg-secondary text-muted cursor-not-allowed px-4 py-2 rounded-md "
            : "bg-danger text-white px-4 py-2 rounded-md hover:bg-primary-dark cursor-pointer"
        }
        onClick={isEditing ? () => cancelEdit() : () => onDelete(id)}
      >
        {isEditing ? <X size={16} /> : <Trash2 size={16} />}
      </button>
    </div>
  );
}

export default RowActions;
