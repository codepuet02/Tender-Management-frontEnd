function Badge({ label }) {
  const colorStatus = [
    { status: "Proceso", style: "bg-warning-light text-warning" },
    { status: "Listo", style: "bg-success-light text-success" },
    { status: "Pendiente", style: "bg-danger-light text-danger" },
  ];
  let style = colorStatus.find((C) => C.status === label);

  return (
    <div
      className={`${style.style} text-xs font-medium px-4 py-1 rounded-full inline`}
    >
      {label}
    </div>
  );
}
export default Badge;
