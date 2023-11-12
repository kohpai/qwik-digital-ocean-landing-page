import { component$, Slot } from "@builder.io/qwik";

interface Props {
  class?: string,
}

export default component$<Props>((props) => (
  <h2 class={`text-4xl font-bold ${props.class}`}><Slot /></h2>
))