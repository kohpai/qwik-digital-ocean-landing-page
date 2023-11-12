import { component$ } from "@builder.io/qwik";
import SectionTitle from "~/components/typography/section-title/section-title";
import styles from "./testimonials.module.css"

export default component$(() => (
  <section class="bg-gray-100">
    <div class="container mx-auto px-6 py-20">
      <SectionTitle class="text-center text-gray-800 mb-8">
        Testimonials
      </SectionTitle>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class={styles.testimonial}>
              Monitoring and tracking my health vitals anywhere I go and on any platform I use has never been easier.
            </p>
            <p class={styles.name}>John Doe</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class={styles.testimonial}>
              As an Athlete, this is the perfect product for me. I wear my Smart Health Monitoring Wristwatch everywhere
              I go, even in the bathroom since it's waterproof.
            </p>
            <p class={styles.name}>Jane Doe</p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow py-2">
            <p class={styles.testimonial}>
              I don't regret buying this wearble gadget. One of the best gadgets I own!.
            </p>
            <p class={styles.name}>James Doe</p>
          </div>
        </div>
      </div>
    </div>
  </section>
))