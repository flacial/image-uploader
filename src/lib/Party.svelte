<script lang="ts">
  import anime from "animejs/lib/anime.es.js";
  import { onMount } from "svelte";

  export let emojiWidth = 70;
  export let shotsDelayed = true;
  export let partyMode = true;

  let partyPopperBig: { offsetHeight: number; offsetWidth: number };
  let partyPoppers = [];

  const party = () => {
    partyPoppers = [
      ...partyPoppers,
      (el: { style: { display: string } }) => {
        anime({
          targets: el,
          translateX: [
            {
              value: Math.floor(Math.random() * 100 + 40),
              duration: 3000,
            },
          ],
          opacity: [{ value: 0, duation: 3000 }],
          rotate: "2turn",
          duration: 7000,
          complete: () => {
            // Not sure if many elements would affect the performance.
            // partyPoppers.shift();
            el.style.display = "none";
          },
        });
      },
    ];
  };

  const generatePartyPoppers = (ppToGen: number, ppCount = 0) => {
    if (ppCount === ppToGen) return;

    party();

    if (shotsDelayed) {
      setTimeout(() => {
        return generatePartyPoppers(ppToGen, ppCount + 1);
      }, 20);
    } else {
      return generatePartyPoppers(ppToGen, ppCount + 1);
    }
  };

  const randomDegree = (min, max) =>
    Math.floor(Math.random() * (min - max) + max);
</script>

<div class="div">
  {#each partyPoppers as pp}
    <div
      class="party-poppers"
      style="transform: rotate({randomDegree(
        10,
        -80
      )}deg); height: {partyPopperBig.offsetHeight}px; width: {partyPopperBig.offsetWidth}px"
    >
      <img
        class="partyPopper"
        src="party-popper.png"
        alt="partyPopper"
        style="left: {partyPopperBig.offsetWidth /
          3}px; top: {partyPopperBig.offsetHeight /
          3}px; height: {partyPopperBig.offsetHeight /
          3}px; width: {partyPopperBig.offsetWidth / 3}px"
        use:pp
      />
    </div>
  {/each}
  <img
    class="emoji"
    src="party-popper.png"
    alt="Party popper emoji"
    style="width: {emojiWidth}px"
    on:click={party}
    on:load={() => partyMode && generatePartyPoppers(25)}
    bind:this={partyPopperBig}
  />
</div>

<style>
  .div {
    position: relative;
  }

  .emoji {
    cursor: pointer;
    filter: drop-shadow(2px 4px 6px hsla(0, 0%, 30%, 0.5));
  }

  .emoji:active {
    transform: scale(0.9);
  }

  .partyPopper {
    position: absolute;
    transition: opacity 0.3s linear;
    user-select: none;
  }

  .party-poppers {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 20;
  }
</style>
