<script>
  import Upload from "./lib/Upload.svelte";
  import Uploading from "./lib/Uploading.svelte";
  import Uploaded from "./lib/Uploaded.svelte";
  import { imageBuffer, imageUrl, isError } from "./store/store";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="use-credentials"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="wrapper">
  <div class="card__container">
    {#if $isError || !$imageBuffer}
      <Upload />
    {:else if $imageUrl}
      <Uploaded />
    {:else if $imageBuffer}
      <Uploading />
    {/if}
  </div>
</div>

<style>
  .wrapper {
    height: 100%;
    background: linear-gradient(180deg, #5d5fef 0%, #3637bd 100%);
  }

  .card__container {
    display: grid;
    place-items: center;
    height: 100%;
    padding: 0 20px;
  }
</style>
