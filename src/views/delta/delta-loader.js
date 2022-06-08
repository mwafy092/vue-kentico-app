import { createApp } from "vue";

import DeltaPage from "./DeltaPage.vue";

export function load() {
  const selector = "sandbox-delta";

  if (!document.querySelector(selector)) {
    return;
  }
  createApp(DeltaPage).mount(selector);
}
