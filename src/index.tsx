/* @refresh reload */
import { For, render } from "solid-js/web";
import "./index.css";
import { Route, Router } from "@solidjs/router";
import { routes } from "./routes";
import Layout from "./layout";

const root = document.getElementById("root");

const Index = () => {
  return (
    <Router root={Layout}>
      <For each={routes}>
        {(route) => <Route path={route.href} component={route.page} />}
      </For>
    </Router>
  );
};

render(() => <Index />, root!);
