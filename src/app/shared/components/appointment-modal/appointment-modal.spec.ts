import { TestBed } from '@angular/core/testing';
import { AppointmentService } from '../../../core/services/appointment.service';
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

  it('vuelve a abrir después de un cierre nativo (Esc / botón del navegador)', () => {
    const fixture = TestBed.createComponent(AppointmentModal);
    const dialogo: HTMLDialogElement = fixture.nativeElement.querySelector('dialog');
    // jsdom no implementa showModal/close: los stubeamos con el contrato del navegador
    // (close() emite el evento `close`, que es como cierra Esc).
    dialogo.showModal = () => dialogo.setAttribute('open', '');
    dialogo.close = () => {
      dialogo.removeAttribute('open');
      dialogo.dispatchEvent(new Event('close'));
    };
    fixture.detectChanges();
    const appointment = TestBed.inject(AppointmentService);

    appointment.open();
    fixture.detectChanges();
    expect(dialogo.open).toBe(true);

    dialogo.close(); // así cierra el navegador con Esc: sin pasar por el servicio
    fixture.detectChanges();
    expect(dialogo.open).toBe(false);

    appointment.open();
    fixture.detectChanges();
    expect(dialogo.open).toBe(true);
  });

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
