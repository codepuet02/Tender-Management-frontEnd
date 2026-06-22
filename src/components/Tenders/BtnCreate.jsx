function BtnCreate({ openModal }) {
  return (
    <button
      onClick={openModal}
      className="my-2 px-3 bg-primary text-white cursor-pointer hover:bg-primary-hover border-collapse rounded-md font-medium"
    >
      + Crear Licitacion
    </button>
  );
}

export default BtnCreate;
