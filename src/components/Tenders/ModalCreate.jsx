import { useState } from "react";

function ModalCreate({ closeModal }) {
  const [clientId, setClientId] = useState(0);
  const [objet, setObjet] = useState("");
  const [date, setDate] = useState("");

  function submit(data) {
    console.log(data);
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-surface rounded-xl w-full max-w-md p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={closeModal}
            className="text-muted hover:text-title cursor-pointer text-xl leading-none"
          >
            ✕
          </button>
          <h2 className="text-lg font-semibold text-title">Nueva Licitación</h2>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit({ clientId, objet, date });
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="clients"
              className="text-sm font-medium text-subtitle"
            >
              Cliente
            </label>
            <select
              required
              onChange={(e) => {
                setClientId(e.target.value);
              }}
              id="clients"
              className="border border-border-base rounded-md px-3 py-2 text-sm text-title bg-surface focus:outline-none focus:border-primary"
            >
              <option defaultValue value="">
                Seleccionar cliente...
              </option>
              <option value="1">IE. Luis Carlos Galan Sarmiento</option>
              <option value="2">IE. Maria Fernanda Cabal</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="objet"
              className="text-sm font-medium text-subtitle"
            >
              Objeto Contractual
            </label>
            <textarea
              id="objet"
              onChange={(e) => {
                setObjet(e.target.value);
              }}
              rows={3}
              placeholder="Describe el objeto del contrato..."
              className="border border-border-base rounded-md px-3 py-2 text-sm text-title resize-none focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-sm font-medium text-subtitle">
              Fecha de Vencimiento
            </label>
            <input
              onChange={(e) => {
                setDate(e.target.value);
              }}
              id="date"
              type="date"
              className="border border-border-base rounded-md px-3 py-2 text-sm text-title focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 text-sm font-medium rounded-md bg-secondary hover:bg-secondary-hover text-title cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium rounded-md bg-primary hover:bg-primary-hover text-white cursor-pointer"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalCreate;
