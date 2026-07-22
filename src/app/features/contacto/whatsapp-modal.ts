import {
  Component,
  ElementRef,
  effect,
  input,
  output,
  viewChild,
} from '@angular/core';

// Modal que imita un chat de WhatsApp (PLAN.md §f.3). Simulado: no abre WhatsApp real.
@Component({
  selector: 'app-whatsapp-modal',
  template: `
    <dialog
      #dlg
      role="dialog"
      aria-modal="true"
      aria-labelledby="wsp-titulo"
      class="w-[min(92vw,26rem)] overflow-hidden rounded-lg border border-ink/10 bg-alt p-0 text-ink"
      (close)="cerrado.emit()"
      (click)="clickEnFondo($event)"
    >
      <header class="flex items-center justify-between gap-3 bg-ink px-4 py-3 text-white">
        <p id="wsp-titulo" class="text-sm font-semibold">Sonría · Recepción</p>
        <button type="button" aria-label="Cerrar" class="text-xl leading-none" (click)="cerrar()">
          ×
        </button>
      </header>

      <div class="space-y-3 px-4 py-6">
        <p class="ml-auto max-w-[85%] rounded-lg bg-brand px-4 py-3 text-sm leading-relaxed">
          {{ mensaje() }}
        </p>
        <p class="max-w-[85%] rounded-lg bg-white px-4 py-3 text-sm leading-relaxed">
          ¡Gracias por escribirnos! Te respondemos dentro del horario de atención.
        </p>
      </div>

      <footer class="border-t border-ink/10 px-4 py-3">
        <p class="text-xs text-ink/60">
          Vista de demostración: el mensaje no se envía a ningún WhatsApp real.
        </p>
      </footer>
    </dialog>
  `,
})
export class WhatsappModal {
  /** Mensaje redactado; `null` cierra el modal. */
  readonly mensaje = input<string | null>(null);
  readonly cerrado = output<void>();

  private readonly dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  constructor() {
    effect(() => {
      const dialogo = this.dlg().nativeElement;
      if (this.mensaje()) {
        if (!dialogo.open) dialogo.showModal();
      } else if (dialogo.open) {
        dialogo.close();
      }
    });
  }

  protected cerrar() {
    this.dlg().nativeElement.close();
  }

  protected clickEnFondo(evento: MouseEvent) {
    if (evento.target === this.dlg().nativeElement) this.cerrar();
  }
}
