<script lang="ts">
  import { fade } from "svelte/transition";

  export let maxHeight: number = 625;
  export let maxWidth: number = 525;
  export let center: boolean = true;
  export let paddingYTop: number = 55;
  export let paddingYBottom: number = 0;
  export let backgroundColor: string = "rgba(230, 230, 230, 0.27)";
  export let transition = fade;

  const centerStyles: string =
    "display: flex; flex-direction: column; align-items: center;";
</script>

<div
  class="card"
  style="max-width: {maxWidth}px; max-height: {maxHeight}px; {center
    ? centerStyles
    : ''} padding-block: {paddingYTop}px {paddingYBottom}px; background-color: {backgroundColor}"
  in:transition={{ delay: 100, duration: 300 }}
>
  <slot />
</div>

<style>
  .card {
    width: 100%;
    height: fit-content;
    position: relative;

    box-shadow: 20px 10px 42px rgba(0, 0, 0, 0.25);
    border-radius: 28px;
  }
</style>
