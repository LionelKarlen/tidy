import { A, RouteSectionProps } from "@solidjs/router";
import { For, Show } from "solid-js";
import "./layout.css";
import Icon from "./lib/components/Icons";
import { FiLogOut, FiMenu } from "solid-icons/fi";
import { routes } from "./routes";
import Login from "./lib/components/Login";
import { authenticated } from "./lib/services/auth";
import pb from "./lib/services/pb";

const Layout = (props: RouteSectionProps) => {
  function logout() {
    pb.authStore.clear();
  }
  return (
    <>
      <div class="drawer absolute">
        <input type="checkbox" class="drawer-toggle" id="nav-drawer" />
        <div class="drawer-content flex flex-col bg-base-100">
          <div class="navbar absolute bg-base-100 shadow-sm">
            <div class="flex-1">
              <A href="/" class="btn btn-ghost text-4xl tidy-logo">tidy</A>
            </div>

            <Show when={authenticated()}>
              <div class="flex-none lg:hidden">
                <label for="nav-drawer" class="btn btn-square btn-ghost">
                  <Icon icon={FiMenu} />
                </label>
              </div>
            </Show>

            <div class="hidden lg:block flex-none">
              <ul class="menu menu-horizontal px-1">
                <Show when={authenticated()}>
                  <For each={routes}>
                    {(route) => (
                      <li>
                        <A class="btn btn-ghost" href={route.href}>
                          <Icon icon={route.icon} />
                          {route.name}
                        </A>
                      </li>
                    )}
                  </For>
                  <li>
                    <button
                      type="button"
                      class="btn btn-ghost"
                      onclick={logout}
                    >
                      <Icon icon={FiLogOut} />Logout
                    </button>
                  </li>
                </Show>
              </ul>
            </div>
          </div>

          <div class="v-screen flex h-screen flex-row justify-center">
            <div class="flex h-full flex-col px-4 py-2 pt-20 md:w-3/4 md:px-0 md:pb-0 2xl:w-1/2">
              <Show when={authenticated()} fallback={<Login />}>
                {props.children}
              </Show>
            </div>
          </div>
        </div>
        <div class="drawer-side">
          <label
            for="nav-drawer"
            class="drawer-overlay"
            aria-label="close sidebar"
          />
          <ul class="menu min-h-full w-80 bg-base-200 p-4">
            <Show when={authenticated()}>
              <For each={routes}>
                {(route) => (
                  <li>
                    <A href={route.href}>{route.name}</A>
                  </li>
                )}
              </For>
              <li class="mt-auto">
                <button type="button" onclick={logout}>Logout</button>
              </li>
            </Show>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;
