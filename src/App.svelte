<script>
  import WhatsappForm from "./whatsapp-form.svelte";
</script>

<WhatsappForm />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :global(::-webkit-scrollbar) {
    width: 2px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #f1f1f1;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #888;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #555;
  }

  :global(body) {
    overflow-y: hidden;
  }
</style>
