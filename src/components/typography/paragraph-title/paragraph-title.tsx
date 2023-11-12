import { component$, Slot } from "@builder.io/qwik";

interface Props {
  class?: string
}

export default component$<Props>((props) => (
  <h4 class={`text-3xl font-bold ${props.class}`}><Slot /></h4>
))