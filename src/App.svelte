<script>
  import Upload from "./lib/Upload.svelte";
  import Uploading from "./lib/Uploading.svelte";
  import Uploaded from "./lib/Uploaded.svelte";
  import LoadingCircles from "./lib/LoadingCircles.svelte";
  import { imageBuffer, imageUrl, isError } from "./store/store";

  let loaded;

  window.onload = () => (loaded = true);
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
  {#if loaded}
    <div class="card__container">
      {#if $isError || !$imageBuffer}
        <Upload />
      {:else if $imageUrl}
        <Uploaded />
      {:else if $imageBuffer}
        <Uploading />
      {/if}
    </div>
  {:else}
    <div class="loading">
      <LoadingCircles />
    </div>
  {/if}
</div>

<style>
  .loading {
    display: grid;
    align-items: center;
  }
  .wrapper {
    display: grid;
    min-height: 100%;
    background: linear-gradient(180deg, #5d5fef 0%, #3637bd 100%);
  }
  .card__container {
    display: grid;
    place-items: center;
    height: 100%;
    padding: 0 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 360px) {
    .card__container {
      padding: 0 5px;
    }
  }
</style>
