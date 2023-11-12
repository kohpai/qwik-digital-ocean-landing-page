import { component$, Slot } from "@builder.io/qwik";

export default component$(() => (
  <h5 class="uppercase mb-6 font-bold"><Slot /></h5>
))