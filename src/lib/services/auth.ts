import { createSignal } from "solid-js";

export const [authenticated, setAuthenticated] = createSignal<boolean>(false);
