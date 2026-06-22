import BtnCreate from "../Tenders/BtnCreate";
function PageHeader({ title, subtitle, openModal }) {
  return (
    <div className=" flex justify-between">
      <div className="div">
        <h1 className="text-3xl font-bold text-title">{title}</h1>
        <p className="text-sm text-subtitle">{subtitle}</p>
      </div>

      <BtnCreate openModal={openModal} />
    </div>
  );
}

export default PageHeader;
