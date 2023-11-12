import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="py-20 hero">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">
          Smart Health Monitoring Wristwatch
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200">
          Monitor your health vitals smartly anywhere you go.
        </h3>

        <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Pre Order
        </button>
      </div>
    </div>
  );
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
