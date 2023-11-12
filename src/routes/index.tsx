import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "Smart Health Monitoring Wristwatch",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    }
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700"
    }
  ]
};
