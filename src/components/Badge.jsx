export default function Badge({ children, color = "#d9b26f" }) {
  return (
    <span
      className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-lg shadow-md"
      style={{ backgroundColor: color, color: "#000" }}
    >
      {children}
    </span>
  );
}
