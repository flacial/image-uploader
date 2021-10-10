<script>
  import Card from "./Card.svelte";
  import LoadingCircles from "./LoadingCircles.svelte";
</script>

<Card maxWidth={367} maxHeight={214} paddingYTop={35} paddingYBottom={65}>
  <div class="wrapper">
    <h1>Uploading...</h1>
    <div class="loading__container">
      <LoadingCircles />
    </div>
  </div>
</Card>

<style>
  h1 {
    font-weight: 500;
    font-size: 24px;
    color: #d0d1ff;
    margin: 0;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    padding: 0 49px;
  }

  .loading__container {
    margin-top: 51px;
  }
</style>
