import { component$ } from "@builder.io/qwik";

interface Props {
  text: string
  class?: string,
}

export default component$<Props>((props) => (
  <h2 class={`text-4xl font-bold ${props.class}`}>{props.text}</h2>
))