import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import GroupName from "~/components/footer/group-name";

export default component$(() => (
  <footer class="bg-gray-100">
    <div class="container mx-auto px-6 pt-10 pb-6">
      <div class="flex flex-wrap">
        <div class={styles.group}>
          <GroupName>Links</GroupName>
          <ul class="mb-4">
            <li class="mt-2"><a href="#" class={styles.anchor}>FAQ</a></li>
            <li class="mt-2"><a href="#" class={styles.anchor}>Help</a></li>
            <li class="mt-2"><a href="#" class={styles.anchor}>Support</a></li>
          </ul>
        </div>
        <div class={styles.group}>
          <GroupName>Legal</GroupName>
          <ul class="mb-4">
            <li class="mt-2"><a href="#" class={styles.anchor}>Terms</a></li>
            <li class="mt-2"><a href="#" class={styles.anchor}>Privacy</a></li>
          </ul>
        </div>
        <div class={styles.group}>
          <GroupName>Social</GroupName>
          <ul class="mb-4">
            <li class="mt-2"><a href="#" class={styles.anchor}>Facebook</a></li>
            <li class="mt-2"><a href="#" class={styles.anchor}>LinkedIn</a></li>
            <li class="mt-2"><a href="#" class={styles.anchor}>Twitter</a></li>
          </ul>
        </div>
        <div class={styles.group}>
          <GroupName>Compoany</GroupName>
          <ul class="mb-4">
            <li class="mt-2"><a href="#" class={styles.anchor}>Official Blog</a></li>
            <li class="mt-2"><a href="#" class={styles.anchor}>About Us</a></li>
            <li class="mt-2"><a href="#" class={styles.anchor}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
))
