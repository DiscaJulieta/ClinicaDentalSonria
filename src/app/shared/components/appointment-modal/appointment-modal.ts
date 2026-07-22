import { Component, ElementRef, effect, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../../core/services/appointment.service';

// Modal "Pedir turno" (PLAN.md §f.2). <dialog> nativo: foco atrapado, Esc y backdrop gratis.
@Component({
  selector: 'app-appointment-modal',
  imports: [ReactiveFormsModule],
  template: `
    <dialog
      #dlg
      role="dialog"
      aria-modal="true"
      aria-labelledby="turno-titulo"
      class="w-[min(92vw,34rem)] rounded-lg border border-ink/10 bg-bg p-6 text-ink md:p-10"
      (close)="cerrar()"
      (click)="clickEnFondo($event)"
    >
      <header class="flex items-start justify-between gap-4">
        <h2 id="turno-titulo" class="font-serif text-2xl font-medium tracking-tight">Pedir turno</h2>
        <button type="button" aria-label="Cerrar" class="text-2xl leading-none" (click)="cerrar()">
          ×
        </button>
      </header>
      <div class="mt-2 h-px bg-accent"></div>

      @if (resumen(); as r) {
        <div class="mt-6" role="status">
          <p class="text-base">Así se reservaría tu turno:</p>
          <ul class="mt-4 space-y-2 rounded bg-alt p-4 text-sm">
            <li><strong>Nombre:</strong> {{ r.nombre }}</li>
            <li><strong>Motivo:</strong> {{ r.motivo }}</li>
            <li><strong>Día:</strong> {{ r.dia }} · <strong>Hora:</strong> {{ r.hora }}</li>
          </ul>
          <p class="mt-4 text-xs text-ink/60">
            Esto es una demo: no se envió ni se guardó nada.
          </p>
          <button type="button" class="btn-cta mt-6 w-full" (click)="cerrar()">Listo</button>
        </div>
      } @else {
        <form [formGroup]="form" (ngSubmit)="enviar()" class="mt-6 space-y-5" novalidate>
          <div>
            <label for="t-nombre" class="label-campo">Nombre y apellido</label>
            <input id="t-nombre" type="text" formControlName="nombre" class="campo" />
            @if (form.controls.nombre.touched && form.controls.nombre.invalid) {
              <p class="error" role="alert">Ingresá tu nombre (mínimo 2 caracteres).</p>
            }
          </div>

          <div>
            <label for="t-motivo" class="label-campo">Motivo</label>
            <select id="t-motivo" formControlName="motivo" class="campo">
              <option value="">Elegí una opción</option>
              @for (m of motivos; track m) {
                <option [value]="m">{{ m }}</option>
              }
            </select>
            @if (form.controls.motivo.touched && form.controls.motivo.invalid) {
              <p class="error" role="alert">Elegí un motivo de consulta.</p>
            }
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="t-dia" class="label-campo">Día preferido</label>
              <input id="t-dia" type="date" formControlName="dia" class="campo" />
              @if (form.controls.dia.touched && form.controls.dia.invalid) {
                <p class="error" role="alert">Elegí un día.</p>
              }
            </div>
            <div>
              <label for="t-hora" class="label-campo">Hora preferida</label>
              <input id="t-hora" type="time" formControlName="hora" class="campo" />
              @if (form.controls.hora.touched && form.controls.hora.invalid) {
                <p class="error" role="alert">Elegí una hora.</p>
              }
            </div>
          </div>

          <button type="submit" class="btn-cta w-full">Ver mi turno</button>
          <p class="text-xs text-ink/60">
            Sitio de demostración: el turno no se envía a ninguna clínica real.
          </p>
        </form>
      }
    </dialog>
  `,
})
export class AppointmentModal {
  private readonly fb = inject(FormBuilder);
  private readonly appointment = inject(AppointmentService);
  private readonly dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  protected readonly motivos = [
    'Primera consulta',
    'Limpieza',
    'Ortodoncia',
    'Implantes',
    'Estética dental',
    'Urgencia',
  ];
  protected readonly resumen = signal<{
    nombre: string;
    motivo: string;
    dia: string;
    hora: string;
  } | null>(null);

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    motivo: ['', Validators.required],
    dia: ['', Validators.required],
    hora: ['', Validators.required],
  });

  constructor() {
    effect(() => {
      const dialogo = this.dlg().nativeElement;
      if (this.appointment.isOpen()) {
        if (!dialogo.open) dialogo.showModal();
      } else if (dialogo.open) {
        dialogo.close();
      }
    });
  }

  protected enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.resumen.set(this.form.getRawValue());
  }

  protected cerrar() {
    this.appointment.close();
    this.form.reset();
    this.resumen.set(null);
  }

  protected clickEnFondo(evento: MouseEvent) {
    if (evento.target === this.dlg().nativeElement) this.appointment.close();
  }
}
