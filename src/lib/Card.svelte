<script lang="ts">
  import { scale, fade } from "svelte/transition";

  export let maxHeight: number = 625;
  export let maxWidth: number = 525;
  export let center: boolean = true;
  export let paddingY: number = 55;

  const centerStyles: string =
    "display: flex; flex-direction: column; align-items: center;";
</script>

<div
  class="card"
  style="max-width: {maxWidth}px; max-height: {maxHeight}px; {center
    ? centerStyles
    : ''} padding-block: {paddingY}px 0"
  in:fade={{ delay: 100, duration: 300 }}
>
  <slot />
</div>

<style>
  .card {
    width: 525px;
    height: 625px;

    background-color: rgba(230, 230, 230, 0.27);
    box-shadow: 20px 10px 42px rgba(0, 0, 0, 0.25);
    border-radius: 28px;
  }
</style>
