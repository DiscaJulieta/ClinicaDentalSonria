// Datos del blog — Colaboradora A completa los 2 artículos (PLAN.md §b).
export interface Articulo {
  slug: string;
  titulo: string;
  categoria: string;
  extracto: string;
  fecha: string; // ISO
  autor: string;
  minutosLectura: number;
  imagen: string;
  cuerpo: string[]; // párrafos
}

// STUB — A reemplaza con los 2 artículos completos.
export const ARTICULOS: Articulo[] = [];
