<script>
  import { onMount, onDestroy } from "svelte";

  import WhatsappForm from "./whatapp-form/index.svelte";

  const setViewHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  onMount(() => {
    window.addEventListener("resize", setViewHeight, { capture: true });
  });

  onDestroy(() => {
    window.removeEventListener("resize", setViewHeight, { capture: true });
  });
</script>

<WhatsappForm />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
