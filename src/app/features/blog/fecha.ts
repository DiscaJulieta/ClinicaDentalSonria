// Formatea una fecha ISO ("2026-06-18") a español largo ("18 de junio de 2026").
// Se ancla a mediodía para evitar corrimientos de día por zona horaria.
const FMT = new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });

export function fechaLarga(iso: string): string {
  return FMT.format(new Date(iso + 'T12:00:00'));
}
