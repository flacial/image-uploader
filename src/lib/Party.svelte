<script>
  import anime from "animejs/lib/anime.es.js";
  import { onMount } from "svelte";

  export let emojiWidth = 70;

  let partyPopperBig;
  let partyPoppers = [];

  const party = (i) => {
    partyPoppers = [
      ...partyPoppers,
      (el) => {
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
          },
        });
      },
    ];
  };

  const generatePartyPoppers = (ppToGen, ppCount = 0) => {
    if (ppCount === ppToGen) return;

    party(ppCount);

    setTimeout(() => {
      return generatePartyPoppers(ppToGen, ppCount + 1);
    }, 20);
  };

  onMount(() => {
    setTimeout(() => {
      generatePartyPoppers(25);
    }, 300);
  });
</script>

<div class="div">
  {#each partyPoppers as pp}
    <div
      class="party-poppers"
      style="transform: rotate({Math.floor(
        Math.random() * (10 - -80) + -80
      )}deg); height: {partyPopperBig.offsetHeight}px; width: {partyPopperBig.offsetWidth}px"
    >
      <img
        class="partyPopper"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/mozilla/36/party-popper_1f389.png"
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
    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/mozilla/36/party-popper_1f389.png"
    alt="Party popper emoji"
    on:click={party}
    bind:this={partyPopperBig}
    style="width: {emojiWidth}px"
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
