import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../../core/services/appointment.service';
import { GbpCard } from '../../shared/components/gbp-card/gbp-card';
import { HoursBadge } from '../../shared/components/hours-badge/hours-badge';
import { ARTICULOS } from '../blog/blog-data';
import { fechaLarga } from '../blog/fecha';
import { EQUIPO } from '../equipo/equipo-data';
import { SERVICIOS } from '../servicios/servicios-data';

// Home (#10) — integra las piezas de A (servicios, equipo, blog) y de B (badge, modal, ficha).
@Component({
  selector: 'app-home',
  imports: [RouterLink, GbpCard, HoursBadge],
  template: `
    <section class="container-x grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-20">
      <div>
        <app-hours-badge />
        <h1 class="mt-6 font-serif text-[40px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
          Una clínica dental donde el tiempo alcanza
        </h1>
        <p class="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
          Turnos largos, diagnóstico claro y un equipo en el que siempre te atiende la misma
          persona. Así entendemos nosotros la odontología.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-6">
          <button type="button" class="btn-cta" (click)="pedirTurno()">Pedir turno</button>
          <a routerLink="/servicios" class="inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent underline-offset-8">
            Ver servicios
          </a>
        </div>
      </div>
      <img
        src="/assets/blog/mitos-del-blanqueamiento.jpg"
        alt="Paciente sonriendo después de un tratamiento en la clínica"
        class="aspect-[4/3] w-full rounded-lg border border-ink/10 object-cover lg:aspect-[4/5]"
      />
    </section>

    <section class="bg-alt">
      <div class="container-x py-16 md:py-20">
        <p class="text-xs font-semibold uppercase tracking-widest text-accent">Qué hacemos</p>
        <h2 class="mt-3 max-w-2xl text-balance font-serif text-[32px] font-medium leading-tight tracking-tight md:text-[40px]">
          Tratamientos que resolvemos todos los días
        </h2>
        <ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (s of servicios; track s.titulo) {
            <li class="rounded-lg border border-ink/10 bg-bg p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-ambient md:p-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-9 w-9 text-brand"
                aria-hidden="true"
              >
                <path [attr.d]="s.icon" />
              </svg>
              <h3 class="mt-5 font-serif text-xl font-medium tracking-tight">{{ s.titulo }}</h3>
              <p class="mt-3 leading-relaxed text-ink/70">{{ s.descripcion }}</p>
            </li>
          }
        </ul>
        <a routerLink="/servicios" class="mt-8 inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent underline-offset-8">
          Ver todos los servicios
        </a>
      </div>
    </section>

    <section class="container-x py-16 md:py-20">
      <p class="text-xs font-semibold uppercase tracking-widest text-accent">Quiénes somos</p>
      <h2 class="mt-3 max-w-2xl text-balance font-serif text-[32px] font-medium leading-tight tracking-tight md:text-[40px]">
        El equipo que te va a atender
      </h2>
      <ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        @for (p of equipo; track p.nombre) {
          <li class="overflow-hidden rounded-lg border border-ink/10 bg-alt">
            <img
              [src]="p.foto"
              [alt]="'Retrato de ' + p.nombre + ', ' + p.especialidad"
              class="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div class="p-6">
              <h3 class="font-serif text-xl font-medium tracking-tight">{{ p.nombre }}</h3>
              <p class="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                {{ p.especialidad }}
              </p>
            </div>
          </li>
        }
      </ul>
      <a routerLink="/equipo" class="mt-8 inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent underline-offset-8">
        Conocé al equipo completo
      </a>
    </section>

    <section class="bg-alt">
      <div class="container-x py-16 md:py-20">
        <p class="text-xs font-semibold uppercase tracking-widest text-accent">Del blog</p>
        <h2 class="mt-3 max-w-2xl text-balance font-serif text-[32px] font-medium leading-tight tracking-tight md:text-[40px]">
          Para leer antes de tu próxima visita
        </h2>
        <ul class="mt-10 grid gap-8 sm:grid-cols-2">
          @for (a of articulos; track a.slug) {
            <li class="group">
              <a [routerLink]="['/blog', a.slug]" class="block">
                <div class="overflow-hidden rounded-lg border border-ink/10">
                  <img
                    [src]="a.imagen"
                    [alt]="'Ilustración del artículo: ' + a.titulo"
                    class="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p class="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">
                  {{ a.categoria }}
                </p>
                <h3 class="mt-2 font-serif text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-accent">
                  {{ a.titulo }}
                </h3>
                <p class="mt-2 leading-relaxed text-ink/70">{{ a.extracto }}</p>
                <p class="mt-3 text-sm text-ink/50">
                  {{ fecha(a.fecha) }} · {{ a.minutosLectura }} min de lectura
                </p>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>

    <section class="container-x py-16 md:py-20">
      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-accent">Dónde estamos</p>
          <h2 class="mt-3 max-w-2xl text-balance font-serif text-[32px] font-medium leading-tight tracking-tight md:text-[40px]">
            Te esperamos en el centro
          </h2>
          <address class="mt-6 not-italic leading-relaxed text-ink/70">
            Av. Belgrano 1240, Ciudad<br />
            +54 11 5555-0100 · hola&#64;sonria.demo
          </address>
          <a routerLink="/contacto" class="btn-cta mt-8">Escribinos</a>
          <iframe
            title="Mapa con la ubicación de la clínica"
            class="mt-10 h-64 w-full rounded-lg border border-ink/10"
            loading="lazy"
            src="https://www.google.com/maps?q=Av.+Belgrano+1240,+Buenos+Aires&output=embed"
          ></iframe>
        </div>
        <app-gbp-card />
      </div>
    </section>
  `,
})
export class Home {
  private readonly appointment = inject(AppointmentService);

  protected readonly servicios = SERVICIOS.slice(0, 3);
  protected readonly equipo = EQUIPO.slice(0, 3);
  protected readonly articulos = ARTICULOS.slice(0, 2);
  protected readonly fecha = fechaLarga;

  protected pedirTurno() {
    this.appointment.open();
  }
}
