// Convierte "texto con **negrita**" en nodos React con <strong>.
export function bold(str) {
  return str.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}
