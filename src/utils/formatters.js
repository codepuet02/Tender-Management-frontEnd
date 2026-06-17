const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});

export default function formatCOP(value) {
  return formatter.format(value);
}
