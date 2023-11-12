import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// This doesn't work with SVG images
// import ImageHealth from "~/media/health.svg?jsx";
// <ImageHealth />

export default component$(() => {
  return (
    <>
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

      <section class="container mx-auto px-6 p-10">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div class="flex items-start flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
            <p class="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you vitals while you
              exercise. You can create different category of exercises and can track your vitals on the go.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img src="/images/health.svg" alt="Monitoring" />
          </div>
        </div>

        <div class="flex items-start flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img src="/images/report.svg" alt="Reporting" />
          </div>
          <div class="w-full md:w-1/2 md:pl-10">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p class="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on
              your settings either daily, weekly, monthly, quarterly or yearly.
            </p>
          </div>
        </div>

        <div class="flex items-start flex-wrap mb-20">
          <div class="w-full md:w-1/2">
            <h4 class="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
            <p class="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS,
              Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img src="/images/sync.svg" alt="Syncing" />
          </div>
        </div>
      </section>
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
