import { writable } from "svelte/store";

export const imageBuffer = writable<string | ArrayBuffer>("");
export const imageUrl = writable<string>("");
export const imageName = writable<string>("");
export const isError = writable<boolean>(false);
