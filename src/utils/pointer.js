/**
 * Guarda la posición del puntero dentro del elemento como variables CSS
 * (--px / --py). El CSS las usa para anclar el halo radial y el resalte
 * del borde al cursor.
 */
export function trackPointer(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--px", `${e.clientX - rect.left}px`);
  el.style.setProperty("--py", `${e.clientY - rect.top}px`);
}
