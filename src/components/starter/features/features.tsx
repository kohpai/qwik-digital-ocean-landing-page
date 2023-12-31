import { component$ } from "@builder.io/qwik";
import SectionTitle from "~/components/typography/section-title/section-title";
import styles from "./features.module.css";
import "./features.module.css"
import ParagraphTitle from "~/components/typography/paragraph-title/paragraph-title";

const pTitle = "text-gray-800 mb-3"

export default component$(() => (
  <section class="container mx-auto px-6 p-10">
    <SectionTitle class="text-center text-gray-800 mb-8">Features</SectionTitle>
    <div class="flex items-start flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <ParagraphTitle class={pTitle}>Exercise Metric</ParagraphTitle>
        <p class={styles.paragraph}>
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
        <ParagraphTitle class={pTitle}>Reporting</ParagraphTitle>
        <p class={styles.paragraph}>
          Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on
          your settings either daily, weekly, monthly, quarterly or yearly.
        </p>
      </div>
    </div>

    <div class="flex items-start flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <ParagraphTitle class={pTitle}>Syncing</ParagraphTitle>
        <p class={styles.paragraph}>
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
))