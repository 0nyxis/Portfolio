import { language, type Language } from "$lib/stores/language";
import { derived } from "svelte/store";

import en from "./en";
import fr from "./fr";

export const translations = {
    en,
    fr
};

export const translate = derived(
    language,
    ($language) => translations[$language]
);