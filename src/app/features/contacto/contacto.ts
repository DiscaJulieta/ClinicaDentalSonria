import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduleService } from '../../core/services/schedule.service';
import { GbpCard } from '../../shared/components/gbp-card/gbp-card';
import { HoursBadge } from '../../shared/components/hours-badge/hours-badge';
import { WhatsappModal } from './whatsapp-modal';

// Contacto (PLAN.md §a.6) — Colaboradora B.
@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, GbpCard, HoursBadge, WhatsappModal],
  template: `
    <section class="container-x py-20 md:py-section" aria-labelledby="contacto-titulo">
      <p class="text-xs font-semibold uppercase tracking-widest text-accent">Contacto</p>
      <h1
        id="contacto-titulo"
        class="mt-3 max-w-2xl font-serif text-[40px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]"
      >
        Escribinos y coordinamos tu visita
      </h1>
      <p class="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
        Contanos qué necesitás y te respondemos a la brevedad. Si preferís, pedí tu turno
        directamente desde el botón de arriba.
      </p>

      <div class="mt-16 grid gap-16 lg:grid-cols-2">
        <form [formGroup]="form" (ngSubmit)="enviar()" class="space-y-6" novalidate>
          <div>
            <label for="c-nombre" class="label-campo">Nombre y apellido</label>
            <input id="c-nombre" type="text" formControlName="nombre" class="campo" />
            @if (form.controls.nombre.touched && form.controls.nombre.invalid) {
              <p class="error" role="alert">Ingresá tu nombre (mínimo 2 caracteres).</p>
            }
          </div>

          <div>
            <label for="c-email" class="label-campo">Email</label>
            <input id="c-email" type="email" formControlName="email" class="campo" />
            @if (form.controls.email.touched && form.controls.email.invalid) {
              <p class="error" role="alert">Ingresá un email válido.</p>
            }
          </div>

          <div>
            <label for="c-mensaje" class="label-campo">Mensaje</label>
            <textarea id="c-mensaje" rows="4" formControlName="mensaje" class="campo"></textarea>
            @if (form.controls.mensaje.touched && form.controls.mensaje.invalid) {
              <p class="error" role="alert">Contanos tu consulta (mínimo 10 caracteres).</p>
            }
          </div>

          <button type="submit" class="btn-cta w-full sm:w-auto">Enviar por WhatsApp</button>
          <p class="text-xs text-ink/60">
            Sitio de demostración: el mensaje se muestra en pantalla, no se envía.
          </p>
        </form>

        <div class="space-y-10">
          <div class="rounded-lg bg-alt p-6 md:p-10">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <h2 class="font-serif text-2xl font-medium tracking-tight">Horarios</h2>
              <app-hours-badge />
            </div>
            <dl class="mt-6 space-y-2 text-sm">
              @for (bloque of horario; track bloque.dia) {
                <div class="flex justify-between gap-4 border-b border-ink/10 pb-2">
                  <dt class="text-ink/70">{{ bloque.dia }}</dt>
                  <dd>{{ bloque.horas }}</dd>
                </div>
              }
            </dl>
            <address class="mt-6 text-sm not-italic leading-relaxed text-ink/70">
              Av. Belgrano 1240, Ciudad<br />
              +54 11 5555-0100 · hola&#64;sonria.demo
            </address>
          </div>

          <app-gbp-card />
        </div>
      </div>

      <h2 class="mt-16 font-serif text-2xl font-medium tracking-tight">Cómo llegar</h2>
      <iframe
        title="Mapa con la ubicación de la clínica"
        class="mt-6 h-80 w-full rounded-lg border border-ink/10"
        loading="lazy"
        src="https://www.google.com/maps?q=Av.+Belgrano+1240,+Buenos+Aires&output=embed"
      ></iframe>
    </section>

    <app-whatsapp-modal [mensaje]="chat()" (cerrado)="chat.set(null)" />
  `,
})
export class Contacto {
  private readonly fb = inject(FormBuilder);
  protected readonly horario = inject(ScheduleService).horario;
  protected readonly chat = signal<string | null>(null);

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { nombre, email, mensaje } = this.form.getRawValue();
    this.chat.set(`Hola, soy ${nombre} (${email}). ${mensaje}`);
    this.form.reset();
  }
}
