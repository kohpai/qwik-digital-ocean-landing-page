import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Features from "~/components/starter/features/features";
import Hero from "~/components/starter/hero/hero";
import Testimonials from "~/components/starter/testimonials/testimonials";

// This doesn't work with SVG images
// import ImageHealth from "~/media/health.svg?jsx";
// <ImageHealth />

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
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
