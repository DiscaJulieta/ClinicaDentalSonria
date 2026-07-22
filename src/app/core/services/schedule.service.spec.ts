import { estaAbierto } from './schedule.service';

describe('estaAbierto', () => {
  it('está abierto un martes a las 10:00', () => {
    expect(estaAbierto(new Date(2026, 6, 21, 10, 0))).toBe(true);
  });

  it('está cerrado un martes a las 13:30 (pausa del mediodía)', () => {
    expect(estaAbierto(new Date(2026, 6, 21, 13, 30))).toBe(false);
  });

  it('está cerrado el domingo', () => {
    expect(estaAbierto(new Date(2026, 6, 19, 10, 0))).toBe(false);
  });

  it('el sábado a la tarde está cerrado', () => {
    expect(estaAbierto(new Date(2026, 6, 25, 16, 0))).toBe(false);
  });
});
