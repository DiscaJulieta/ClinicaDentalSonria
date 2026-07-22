# PLAN.md — Coordinación del sitio "Sonría" (Angular + Tailwind)

> **Fuente única de coordinación entre las dos colaboradoras.**
> Todo lo necesario para trabajar sin pisarnos está acá. Si algo no está en este
> archivo, se agrega acá antes de hacerlo.
>
> Sitio demo premium de una clínica dental **ficticia**. Datos de fantasía.
> Nada es funcional de verdad: turnos, WhatsApp y mapa son **simulados/embebidos,
> sin backend**.
>
> **Stack:** Angular 17+ (standalone components, Signals, Reactive Forms) + Tailwind CSS.
> Contrato visual: **`DESIGN.md`** (no se toca de forma unilateral).

---

## a) Estructura del sitio — 6 páginas = 6 rutas / features

Cada página es un **feature standalone** con su ruta en `app.routes.ts`.

| # | Ruta | Feature (carpeta) | Contenido |
|---|---|---|---|
| 1 | `/` | `features/home` | Héroe con CTA "Pedir turno" + badge de horario, servicios destacados (3–4), preview de equipo, preview de blog (2–3), ficha de Google Business, franja de contacto/mapa. **Integra componentes de A y B.** |
| 2 | `/servicios` | `features/servicios` | Grilla de servicios (cards): implantes, ortodoncia, estética, limpieza, urgencias… título + descripción + ícono + chip. CTA. |
| 3 | `/equipo` | `features/equipo` | Profesionales (cards: foto placeholder, nombre, especialidad, bio). Valores/filosofía. |
| 4 | `/blog` | `features/blog` | Índice: grilla de artículos (card: imagen, categoría `label-caps`, título, extracto, fecha). Enlaza a `/blog/:slug`. |
| 5 | `/blog/:slug` | `features/blog` (componente `articulo`) | **Plantilla** de artículo: héroe editorial (título, autor, fecha, lectura), cuerpo, relacionados, CTA. Lee el contenido por `slug`. |
| 6 | `/contacto` | `features/contacto` | Formulario de contacto (Reactive Form → modal estilo WhatsApp), datos, horarios, mapa iframe, ficha GBP, badge de horario. |

---

## b) División de tareas (cortada por features completos para minimizar conflictos)

### Colaboradora A — "Contenido editorial"
- [ ] `features/servicios` (componente + template)
- [ ] `features/equipo`
- [ ] `features/blog` — lista (`blog-list.component`)
- [ ] `features/blog` — plantilla de artículo (`articulo.component`, lee `:slug`)
- [ ] Redactar **2 artículos completos** (~600–900 palabras c/u) como data en
      `features/blog/blog-data.ts` (array tipado `Articulo[]`)

### Colaboradora B — "Piezas dinámicas + contacto"
- [x] `features/contacto` (componente + Reactive Form) — #6
- [x] `shared/components/gbp-card` — ficha Google Business (**componente reutilizable**) — #7
- [x] `shared/components/hours-badge` + `core/services/schedule.service` — badge de horario (**Signals**) — #8
- [x] `shared/components/appointment-modal` — modal "Pedir turno" (**Reactive Form + Signals**) — #9

### Ambas juntas al final
- [ ] `features/home` — integra componentes de las dos (héroe con badge+modal de B,
      previews de servicios/equipo/blog de A, ficha de B).
- [ ] Ajustes a `DESIGN.md` / `tailwind.config.js` (se deciden en conjunto).

> **La carga es pareja.** Las 4 vistas + 2 artículos de A equivalen al contacto +
> las 3 piezas dinámicas con Signals/Reactive Forms de B.

### Mapa de dependencias (issues #1–#10)

**A y B trabajan 100% en paralelo. Entre ramas NO hay dependencias** (no comparten
archivos). La única regla de secuencia es que **#10 (Home) va último y en conjunto**.

```
A (rama-a):  #5 ─┐            B (rama-b):  #8 ── #7 ── #9 ── #6
             #1  ├─ paralelo               (casi independientes entre sí)
             #2  │
             #3 ─┘ (tras #5)
             #4 ─┘ (tras #5)
                        └──────────┬──────────┘
                              #10 Home (juntas, al final)
```

| Issue | Depende de | Tipo |
|---|---|---|
| #1 Servicios, #2 Equipo | — | independiente |
| #5 Contenido (2 artículos) | — | independiente (hacer temprano) |
| #3 Blog índice, #4 Artículo | #5 | **blando** (se maqueta con stub `ARTICULOS`, se llena luego) |
| #7 Ficha GBP, #8 Badge, #9 Modal | — | independientes |
| #6 Contacto | #7, #8 (los embebe) | **blando**, todo dentro de B |
| #10 Home | #1–#9 | **duro** — al final, en conjunto |

- **Único bloqueo duro entre participantes:** #10.
- Dentro de A: hacer **#5 temprano** para no re-trabajar #3/#4.
- Dentro de B: #6 se puede armar con huecos para `<app-gbp-card>`/`<app-hours-badge>` y completarlos al integrar.

---

## c) Flujo de trabajo con git

- **Una rama por colaboradora:** `rama-a` y `rama-b` (salen de `main`).
- **Commits chicos y frecuentes**, Conventional Commits (`feat:`, `fix:`, `style:`…).
  Uno por pieza terminada, no un mega-commit.
- **Merge a `main` al terminar cada tarea.** Antes: `git pull origin main` y
  resolver en la propia rama.
- **Regla anti-conflictos:** cada una toca **solo su carpeta de feature / sus
  componentes shared** (ver tabla b). No se editan archivos de la otra.
- **Archivos compartidos que NADIE edita en solitario** (se definen en el Paso 0
  en conjunto, y después quedan congelados salvo aviso en Bitácora):
  `app.routes.ts`, `tailwind.config.js`, `styles.css`, `src/index.html`,
  `shared/components/nav`, `shared/components/footer`.
- **`DESIGN.md` es contrato:** no se modifica de forma unilateral.
- **`home` se hace al final, en conjunto.**

```bash
git checkout main && git pull
git checkout -b rama-a            # o rama-b
# ... trabajar, commits chicos ...
git checkout main && git pull
git merge rama-a
git push origin main
```

---

## d) Componentes / servicios compartidos (para no duplicar) — dónde viven

| Pieza | Ubicación | Dueña |
|---|---|---|
| Tokens de color/tipografía | `tailwind.config.js` (`extend`) — ver `DESIGN.md` §6 | Paso 0 (conjunto) |
| Navegación superior fija | `shared/components/nav/nav.component` | Paso 0 (conjunto) |
| Footer | `shared/components/footer/footer.component` | Paso 0 (conjunto) |
| Botón "Pedir turno" | `shared/components/cta-button/cta-button.component` (o clase `.btn-cta` en `styles.css`) — abre el modal vía servicio | B (lo usan ambas) |
| Modal "Pedir turno" | `shared/components/appointment-modal/appointment-modal.component` + `core/services/appointment.service` (signal `isOpen`) | B |
| Badge de horario | `shared/components/hours-badge/hours-badge.component` + `core/services/schedule.service` | B |
| Ficha Google Business | `shared/components/gbp-card/gbp-card.component` (`@Input()` con datos de fantasía) | B |

**Reglas Angular (de `DESIGN.md` §5 + skill):**
- **Nombres Angular 21:** el CLI genera archivos **sin sufijo** `.component`
  (ej: `servicios.ts` → clase `Servicios`, selector `app-servicios`). Usar
  `ng generate component features/<x>` para mantener la convención. Standalone es default.
- Todo **standalone**, un componente por archivo, < ~150 líneas.
- Estado con **Signals** (`signal`, `computed`); RxJS solo para streams async (acá casi no hay).
- Estilado **solo con utilidades Tailwind** en el template; nada de `style=""`.
- HTML semántico + a11y (ver checklist §e).

---

## e) Definición de "terminado" (checklist por página/componente)

- [ ] Usa tokens Tailwind de `DESIGN.md` (`bg-bg`, `text-ink`, `bg-alt`, `bg-brand`, `accent`). Cero hex sueltos en templates.
- [ ] `<app-nav>` fija + `<app-footer>` presentes (via layout/router).
- [ ] Responsive mobile-first: se ve bien a 390px y ≥1280px (`sm: md: lg:`).
- [ ] Tipografía: `font-serif` en títulos, `font-sans` (Inter) en cuerpo.
- [ ] Componente **standalone**; sin lógica en el template más allá de `@if`/`@for`.
- [ ] Todo `@for` con `track` (`@for (x of items(); track x.id)`).
- [ ] CTA "Pedir turno" donde corresponde y abre el modal.
- [ ] Textos en español (voseo, tono premium y cercano).
- [ ] a11y: `<img alt>`, tags semánticos (`<header><nav><main><section><article><footer>`),
      inputs con `<label for>`, botones ícono con `aria-label`, foco visible.
- [ ] Estados de carga/error con feedback visible en UI donde aplique (formularios).
- [ ] `RouterLink` entre páginas funciona; sin errores en consola.
- [ ] Commit (Conventional) hecho y mergeado a `main`.

---

## f) Piezas dinámicas (todas simuladas, sin backend) — dueña: B

1. **Badge de estado de horario** — `hours-badge.component` + `schedule.service`
   - `schedule.service` expone una función pura `estaAbierto(fecha, horario): boolean`
     y un `computed` de estado a partir de un objeto `horario` fijo por día.
   - El componente refleja el estado con **class binding** + `[attr.data-estado]="estado()"`
     (`'abierto' | 'cerrado'`): menta = abierto, gris/petróleo = cerrado.
   - Reutilizable en `home` y `contacto`.

2. **Modal "Pedir turno"** — `appointment-modal.component` + `appointment.service`
   - **Reactive Form**: nombre, motivo, día/hora preferidos. Validación en TS
     (`Validators.required`, etc.) + `markAllAsTouched()` en submit inválido.
   - En submit válido muestra un **resumen** "así se reservaría tu turno"
     (no envía nada; aclarar que es demo). Visibilidad por `signal isOpen`.

3. **Formulario de contacto → modal estilo WhatsApp** — en `features/contacto`
   - Reactive Form. Al enviar, abre un modal que imita un chat de WhatsApp con el
     mensaje redactado (simulado; no abre WhatsApp real).

4. **Mapa** — `<iframe>` de Google Maps a una **ubicación genérica** (embed público),
   con `title` para a11y.

5. **Ficha Google Business** — `gbp-card.component`, bloque estático que imita el
   formato real (nombre, estrellas, reseñas de fantasía, horario, botones).
   Datos por `@Input()`. Reutilizable (home + contacto).

> **Test mínimo:** `schedule.service` lleva un `schedule.service.spec.ts` (o un
> `console.assert`/`demo()`) que verifica `estaAbierto()` con horas fijas
> conocidas (abierto y cerrado). La validación del modal también se comprueba.

---

## Paso 0 — Scaffolding (EN CONJUNTO, antes de repartir ramas)

1. `ng new sonria` (standalone, routing, sin SSR salvo que se decida) + instalar Tailwind.
2. `tailwind.config.js` con los tokens de `DESIGN.md` §6.
3. `src/index.html`: cargar fuentes (Source Serif 4 + Inter).
4. `styles.css`: directivas `@tailwind` + `.btn-cta` si hace falta.
5. `shared/components/nav` y `footer` (esqueleto acordado).
6. `app.routes.ts` con las **6 rutas** ya declaradas (lazy por feature) → así nadie
   lo edita después y no hay conflictos de routing.
7. Commit inicial en `main`. Recién ahí se abren `rama-a` y `rama-b`.

---

## Bitácora de coordinación (editar acá antes de tocar archivos compartidos)

> Formato: `[fecha] [colaboradora] — qué voy a tocar / qué avisé`

- [2026-07-22] B (Juli) — toqué 4 archivos compartidos para las issues #6–#9:
  - `styles.css`: agregué `.label-campo`, `.campo`, `.error` (estilo de inputs de
    DESIGN.md §5, lo usan el modal de turno y el form de contacto).
  - `tailwind.config.js`: agregué el token `error: '#BA1A1A'` (ya estaba en DESIGN.md §1).
  - `app.html` / `app.ts`: monté `<app-appointment-modal />` una sola vez (PLAN §f.2).
  - `nav`: el CTA "Pedir turno" pasó de `<a routerLink="/contacto">` a `<button>` que
    abre el modal por `AppointmentService`. **A: si necesitás el CTA en tus vistas,
    inyectá `AppointmentService` y llamá `open()`.**
  - Revisé `rama-a` para alinear estilo (eyebrow `text-accent`, `mt-3 max-w-2xl` en h1,
    cuerpo `text-ink/70`, cards con hover `-translate-y-0.5`). **Hallazgo para A:** en
    `features/blog/articulo.ts`, `ActivatedRoute.snapshot` se lee una sola vez; al ir de
    un artículo a otro desde "Seguí leyendo" cambia la URL pero el contenido queda en el
    artículo anterior (verificado en el navegador). Se arregla leyendo el `paramMap` como
    signal/observable en vez de `snapshot`. No lo toqué: es archivo de A.

---

## Estado del plan

- [x] `DESIGN.md` extraído de Stitch, tokens corregidos y mapeados a Tailwind.
- [x] `PLAN.md` adaptado a Angular + Tailwind.
- [x] **Aprobado.**
- [x] **Paso 0 (scaffolding) — HECHO.** Angular 21 + Tailwind v3, tokens en
      `tailwind.config.js`, fuentes en `index.html`, `styles.css` con `@tailwind`
      + `.btn-cta`/`.container-x`, `nav` y `footer` compartidos, layout en `app.html`,
      6 rutas lazy en `app.routes.ts` con placeholders por feature. Build ✅ + test ✅.
- [ ] Repartir ramas (`rama-a`, `rama-b`) y arrancar. ← estamos acá.
