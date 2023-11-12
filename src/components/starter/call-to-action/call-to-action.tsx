import { component$ } from "@builder.io/qwik";
import SectionTitle from "~/components/typography/section-title/section-title";
import { sectionClass } from "./call-to-action.css";

export default component$(() => (
  <section class={sectionClass}>
    <div class="container mx-auto px-6 text-center py-20">
      <SectionTitle class="mb-6 text-center text-white">Limited in Stock</SectionTitle>
      <h3 class="my-4 text-2xl text-white">
        Get yourself the Smart Health Monitoring Wristwatch!
      </h3>
      <button class="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
        Pre Order
      </button>
    </div>
  </section>
))