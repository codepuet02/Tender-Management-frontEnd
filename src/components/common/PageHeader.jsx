function PageHeader({ title, subtitle, btnLabel }) {
  return (
    <div className=" flex justify-between">
      <div className="div">
        <h1 className="text-3xl font-bold text-title">{title}</h1>
        <p className="text-sm text-subtitle">{subtitle}</p>
      </div>

      <button className="my-2 px-3 bg-primary text-white cursor-pointer hover:bg-primary-hover border-collapse rounded-md font-medium">
        {btnLabel}
      </button>
    </div>
  );
}

export default PageHeader;
