<script>
  import Card from "./Card.svelte";
  import Party from "./Party.svelte";
  import { imageName } from "../store/store";
</script>

<Card paddingY={51}>
  <div class="wrapper">
    <div class="heading">
      <h1>{$imageName} Uploaded</h1>
      <Party />
    </div>
  </div>
</Card>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    padding: 0 50px;
    align-self: flex-start;
  }

  h1 {
    font-weight: 500;
    font-size: 25px;
    color: #d0d1ff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
