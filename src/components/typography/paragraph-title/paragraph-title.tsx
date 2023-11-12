import { component$ } from "@builder.io/qwik";

interface Props {
  text: string
  class?: string
}

export default component$<Props>((props) => (
  <h4 class={`text-3xl font-bold ${props.class}`}>{props.text}</h4>
))