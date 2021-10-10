import { writable } from "svelte/store";

export const imageBuffer = writable<string>("");
export const imageUrl = writable("");
export const imageName = writable<string>("");
export const isError = writable<boolean>(false);
