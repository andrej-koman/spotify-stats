import { writable } from "svelte/store";

export const userToken = writable(null);
export const userProfile = writable(null);