import { createApp } from "vue";

import AlphaPage from "./AlphaPage.vue";

export function load() {
  const selector = "sandbox-alpha";
  if (!document.querySelector(selector)) {
    return;
  }

  createApp(AlphaPage, {
    props: { ...window[selector] },
  }).mount(selector);
}
