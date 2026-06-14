import { Search } from "lucide-react";
function Filters() {
  return (
    <div className="mt-4 flex gap-4">
      <div className="flex items-center gap-1 relative">
        <Search className="absolute ml-2" size={17} />
        <input
          className="border border-border-base rounded-md pl-7 py-1 text-sm w-80 "
          placeholder={`Buscar por numero o cliente`}
        ></input>
      </div>

      <select
        className="border border-border-base rounded-md text-sm px-3 py-1 "
        defaultValue="todas"
      >
        <option value="todas">todas las categorias</option>
        <option value="Papeleria">Papeleria</option>
      </select>
    </div>
  );
}
export default Filters;
