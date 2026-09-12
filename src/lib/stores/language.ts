import { writable } from "svelte/store";

export type Language = "en" | "fr";

export const language = writable<Language>("en");