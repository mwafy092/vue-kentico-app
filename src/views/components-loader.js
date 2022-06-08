import { load as loadAlpha } from "./alpha/alpha-loader";
import { load as loadDelta } from "./delta/delta-loader";
export function loadComponents() {
  loadAlpha();
  loadDelta();
}
