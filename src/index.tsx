/* @refresh reload */
import { For, render } from "solid-js/web";
import "./index.css";
import { Route, Router } from "@solidjs/router";
import { routes } from "./routes";
import Layout from "./layout";
import { setAuthenticated } from "./lib/services/auth";
import { onMount } from "solid-js";
import pb from "./lib/services/pb";

const root = document.getElementById("root");

const Index = () => {
  onMount(() => {
    setAuthenticated(pb.authStore.isValid);
  });

  pb.authStore.onChange((v) => {
    setAuthenticated(!!v);
  });
  return (
    <Router root={Layout}>
      <Route path="/" />
      <For each={routes}>
        {(route) => (
          <Route
            path={route.href}
            component={route.page}
            preload={route.preload}
          />
        )}
      </For>
    </Router>
  );
};

render(() => <Index />, root!);
