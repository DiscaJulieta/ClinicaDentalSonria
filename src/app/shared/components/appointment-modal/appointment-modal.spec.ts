import { TestBed } from '@angular/core/testing';
import { AppointmentModal } from './appointment-modal';

describe('AppointmentModal', () => {
  // `form` y `resumen` son protected: se accede vía índice para testear la validación.
  const crear = () => {
    const fixture = TestBed.createComponent(AppointmentModal);
    fixture.detectChanges();
    return fixture.componentInstance as unknown as {
      form: { patchValue: (v: unknown) => void; touched: boolean };
      resumen: { (): unknown };
      enviar: () => void;
    };
  };

  it('no genera resumen si el formulario es inválido y marca los campos', () => {
    const modal = crear();
    modal.enviar();
    expect(modal.resumen()).toBeNull();
    expect(modal.form.touched).toBe(true);
  });

  it('genera el resumen con datos válidos', () => {
    const modal = crear();
    modal.form.patchValue({
      nombre: 'Juli',
      motivo: 'Limpieza',
      dia: '2026-08-03',
      hora: '10:30',
    });
    modal.enviar();
    expect(modal.resumen()).toEqual({
      nombre: 'Juli',
      motivo: 'Limpieza',
      dia: '2026-08-03',
      hora: '10:30',
    });
  });
});
