import { Injectable, computed, signal } from '@angular/core';

export type Estado = 'abierto' | 'cerrado';
/** Franja horaria en minutos desde las 00:00, `[desde, hasta)`. */
export type Franja = readonly [number, number];
/** Horario por día de la semana (0 = domingo, como `Date.getDay()`). */
export type Horario = Readonly<Record<number, readonly Franja[]>>;

const h = (hora: number, min = 0) => hora * 60 + min;

/** Horario de la clínica (datos de fantasía). */
export const HORARIO: Horario = {
  0: [], // domingo cerrado
  1: [[h(9), h(13)], [h(14), h(19)]],
  2: [[h(9), h(13)], [h(14), h(19)]],
  3: [[h(9), h(13)], [h(14), h(19)]],
  4: [[h(9), h(13)], [h(14), h(19)]],
  5: [[h(9), h(13)], [h(14), h(18)]],
  6: [[h(9), h(13)]], // sábado solo mañana
};

/** Texto para mostrar en pantalla (mismo orden que `HORARIO`). */
export const HORARIO_TEXTO = [
  { dia: 'Lunes a jueves', horas: '9:00–13:00 · 14:00–19:00' },
  { dia: 'Viernes', horas: '9:00–13:00 · 14:00–18:00' },
  { dia: 'Sábados', horas: '9:00–13:00' },
  { dia: 'Domingos', horas: 'Cerrado' },
] as const;

/** Función pura: ¿la clínica está abierta en ese instante? */
export function estaAbierto(fecha: Date, horario: Horario = HORARIO): boolean {
  const minutos = fecha.getHours() * 60 + fecha.getMinutes();
  return (horario[fecha.getDay()] ?? []).some(
    ([desde, hasta]) => minutos >= desde && minutos < hasta,
  );
}

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  // ponytail: se evalúa al cargar la página; si hiciera falta refresco en vivo,
  // actualizar `ahora` con un setInterval de 60s.
  private readonly ahora = signal(new Date());

  readonly horario = HORARIO_TEXTO;
  readonly estado = computed<Estado>(() =>
    estaAbierto(this.ahora()) ? 'abierto' : 'cerrado',
  );
}
