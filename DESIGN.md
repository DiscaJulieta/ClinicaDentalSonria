# DESIGN.md — Sistema de diseño "Sonría"

> **Contrato compartido.** Este archivo es la fuente única de verdad visual.
> No se modifica de forma unilateral: cualquier cambio se coordina por `PLAN.md`
> y se aplica en el merge conjunto del feature `home`.
>
> **Stack:** Angular 17+ (standalone components) + **Tailwind CSS**. Los tokens
> de abajo se consumen como **utilidades Tailwind** (ver §7); nada de CSS custom
> salvo lo inevitable en `styles.css`.
>
> **Origen:** extraído del proyecto Stitch *"Sonría Premium Dental Experience"*.
> Stitch derivó un esquema Material 3 que corrió varios valores; los tokens de
> abajo ya están **corregidos** para coincidir con la paleta de marca (ver
> sección "Corrección de tokens" al final).

Concepto: **"Elegancia clínica"**. Editorial, minimalista, cálido. Serenidad y
confianza tranquila; nada de blanco "refrigerador" ni frialdad de consultorio.

---

## 1. Colores (paleta de marca — fuente de verdad)

| Token CSS | Hex | Uso |
|---|---|---|
| `--color-bg` | `#FBFCFD` | Fondo principal (blanco cálido, luminoso) |
| `--color-bg-alt` | `#EAF4F2` | Fondo alterno / cards / diferenciar secciones (menta claro) |
| `--color-text` | `#12333F` | Texto y elementos estructurales (azul petróleo) |
| `--color-brand` | `#8FCFC4` | Marca menta: headers grandes, iconos, washes suaves |
| `--color-accent` | `#C9A96A` | Dorado: **solo** detalles finos (líneas 1px, estados activos, indicadores premium) |
| `--color-white` | `#FFFFFF` | Texto sobre CTA, superficie de cards blancas |

### Reglas de color no negociables
- **CTAs:** fondo `#12333F`, texto blanco. Sin borde. En hover: fondo aclara
  levemente + sombra ambiente suave.
- **Dorado `#C9A96A`:** SOLO para detalles finos (líneas de 1px, subrayados,
  bordes, indicadores). Nunca como fondo de bloque ni de botón.
- **Menta `#8FCFC4`:** headers, íconos, washes. No usar para texto de párrafo
  (bajo contraste).
- **Contraste de texto:** todo el texto de lectura va en `#12333F` sobre fondo
  claro (`#FBFCFD` o `#EAF4F2`).

### Variantes útiles (derivadas, no de marca)
| Token | Valor | Uso |
|---|---|---|
| `--color-border` | `rgba(18,51,63,.10)` | Bordes sutiles (petróleo al 10%) |
| `--color-shadow` | `rgba(18,51,63,.05)` | Sombra ambiente única |
| `--color-error` | `#BA1A1A` | Validación de formularios |

---

## 2. Tipografía

Emparejamiento editorial de alto contraste: **Source Serif 4** (títulos) +
**Inter** (cuerpo/UI). Cargar desde Google Fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Serif+4:wght@500;600&display=swap" rel="stylesheet">
```

| Estilo | Familia | Tamaño | Peso | Line-height | Tracking |
|---|---|---|---|---|---|
| `display-lg` | Source Serif 4 | 56px (móvil 40px) | 600 | 1.1 | -0.02em |
| `headline-md` | Source Serif 4 | 32px | 500 | 1.3 | — |
| `headline-sm` | Source Serif 4 | 24px | 500 | 1.4 | — |
| `body-lg` | Inter | 18px | 400 | 1.6 | — |
| `body-md` | Inter | 16px | 400 | 1.6 | — |
| `label-caps` | Inter | 12px | 600 | 1.0 | 0.1em (MAYÚS) |
| `button` | Inter | 14px | 600 | 1.0 | 0.05em |

Tips editoriales:
- `label-caps` en mayúsculas encima de los headlines, como marcador de sección.
- `display-lg` para héroes, con padding vertical generoso.
- Line-height mínimo 1.6 en cuerpo para reforzar el aire premium.

---

## 3. Espaciado y layout

Base **8px**. Contenedor centrado en **1280px** (grid 12 col desktop / 4 col móvil).

| Token | Valor |
|---|---|
| `--space-unit` | 8px |
| `--container-max` | 1280px |
| `--gutter` | 24px |
| `--margin-desktop` | 64px |
| `--margin-mobile` | 20px |
| `--section-gap` | 120px |
| `--stack-sm` | 8px |
| `--stack-md` | 16px |
| `--stack-lg` | 32px |

- Secciones separadas por `--section-gap` (120px) para que respire.
- Padding interno de cards nunca menor a 32px (desktop) / 24px (móvil).
- Móvil: márgenes 20px, headlines escalan a tokens `-mobile`.

---

## 4. Formas, elevación y bordes

- **Radios:** botones/inputs `4px` (`--radius`); cards/modales `8px` (`--radius-lg`); pill/full `9999px`.
- **Sombras:** una sola, muy difusa, solo en hover de elementos interactivos:
  `0px 10px 30px rgba(18,51,63,.05)`.
- **Bordes:** líneas finas de 1px en dorado `#C9A96A` o petróleo al 10%.
- **Íconos:** trazo fino (1–1.5px), terminaciones suaves.

---

## 5. Componentes (referencia — implementados como componentes Angular con clases Tailwind, ver PLAN.md)

### Botones
- **Primario (CTA):** fondo `#12333F`, texto blanco, sin borde. Hover: aclara + sombra.
- **Secundario:** transparente, borde 1px `#12333F`.
- **Ghost:** solo texto, subrayado 1px dorado que se expande en hover.

### Cards
- Fondo `#EAF4F2` o blanco con borde 1px. Padding 40px desktop / 24px móvil.
- Hover: se elevan 2px (Y-offset).

### Inputs
- Solo borde inferior 1px `#12333F` (o gris muy claro).
- Focus: borde cambia a dorado `#C9A96A`.
- Label siempre `label-caps` arriba del campo.

### Chips / Badges
- Fondo menta `#8FCFC4`, texto petróleo `#12333F`. Radio nivel 1 (no pill).
- Ej: "Turnos disponibles", "Nuevo servicio", badge de estado de horario.

### "The Signature Line"
- Línea horizontal de 1px en dorado `#C9A96A` para separar logo/nav del contenido.

---

## 6. Integración con Tailwind

Los tokens de marca se registran en `tailwind.config.js` para usarlos como
utilidades (`bg-brand`, `text-ink`, `bg-alt`, etc.). Fuente de verdad = §1.

```js
// tailwind.config.js — extend.theme
extend: {
  colors: {
    bg:     '#FBFCFD',   // fondo (blanco cálido)
    alt:    '#EAF4F2',   // fondo alterno / cards
    ink:    '#12333F',   // texto y CTA (azul petróleo)
    brand:  '#8FCFC4',   // marca menta
    accent: '#C9A96A',   // dorado — solo detalles finos
  },
  fontFamily: {
    serif: ['"Source Serif 4"', 'serif'],   // títulos
    sans:  ['Inter', 'sans-serif'],         // cuerpo/UI (default)
  },
  maxWidth: { container: '1280px' },
  boxShadow: { ambient: '0 10px 30px rgba(18,51,63,.05)' },
  borderRadius: { DEFAULT: '4px', lg: '8px' },
  spacing: { section: '120px' }, // py-section entre bloques
}
```

Uso típico en templates:
- CTA: `class="bg-ink text-white rounded px-6 py-3 font-sans font-semibold tracking-wide hover:shadow-ambient"`
- Título hero: `class="font-serif text-[40px] md:text-[56px] font-semibold tracking-[-0.02em] text-ink"`
- Card: `class="bg-alt rounded-lg p-6 md:p-10 border border-ink/10"`
- Chip: `class="bg-brand text-ink rounded px-3 py-1 text-xs font-semibold tracking-widest uppercase"`
- Línea dorada: `class="h-px bg-accent"`
- Contenedor: `class="max-w-container mx-auto px-5 md:px-16"`

Fuentes: cargar Source Serif 4 + Inter (ver §2) en `src/index.html`.
`styles.css` solo lleva las directivas `@tailwind base/components/utilities` y,
si hace falta, algún `@apply` para un patrón repetido (ej. `.btn-cta`).

---

## 7. Corrección de tokens (auditoría vs. Stitch)

Stitch derivó tokens Material 3 que **corrieron** los valores de marca. Se
corrigieron así (los `override*` del tema confirman la marca real):

| Rol | Token M3 de Stitch (descartado) | Valor de marca (aplicado) |
|---|---|---|
| Fondo | `#F8F9FA` | **#FBFCFD** (= `overrideNeutralColor`) |
| Texto / CTA | `#001E28` | **#12333F** (= `overridePrimaryColor`, `primary-container`) |
| Menta | `#AEEFE3` (`secondary-container`) | **#8FCFC4** (= `overrideSecondaryColor`) |
| Dorado | sin token limpio | **#C9A96A** (= `overrideTertiaryColor`) |
| Fondo alterno | `#EDEEEF` (`surface-container`) | **#EAF4F2** (prosa) |

Tipografía y espaciado de Stitch se conservaron sin cambios (coincidían con la prosa).
