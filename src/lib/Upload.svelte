<script lang="ts">
  import Card from "./Card.svelte";
  import DragDrop from "./DragDrop.svelte";
  import { uploadImageFormData } from "../utils/images.utils";
  import { imageUrl, imageName, imageBuffer, isError } from "../store/store";

  const handleChooseFile = () => {
    const input: HTMLInputElement = document.createElement("input");
    input.type = "file";

    input.addEventListener("change", (ev) => {
      const [firstFile] = ev.target.files;
      imageName.set(firstFile.name);

      const reader = new FileReader();

      reader.onload = () => {
        imageBuffer.set(reader.result);
      };

      reader.readAsText(firstFile);

      uploadImageFormData({ file: firstFile })
        .then((url) => {
          console.log(url);
          imageUrl.set(url);
        })
        .catch(() => isError.set(true));
    });

    input.click();
  };
</script>

<Card>
  <h1 class="card__heading">Upload Image</h1>
  <span class="card__imageTypeInfo">Any image type*</span>
  <div class="card__dragdrop__container">
    <DragDrop />
    <img class="card__dudeOnDisk" src="dudeOnDisk.svg" alt="dude on disk" />
  </div>
  {#if $isError}
    <span class="error">Internal Error</span>
  {/if}
  <div style="margin-top: {$isError && 32}px" class="card__or">
    <hr class="lineLeft" />
    <span class="card__or__word">OR</span>
    <hr class="lineRight" />
  </div>
  <div class="card__choose-file__container">
    <button class="card__choose-file" on:click={handleChooseFile}>
      <span class="card__choose-file__icon">
        <img
          class="card__choose-file__icon__svg"
          src="upload.svg"
          alt="Upload icon"
        />
      </span>
      <span class="card__choose-file__text">Select Image</span>
    </button>
  </div>
</Card>

<style>
  .error {
    font-weight: 500;
    font-size: 18px;
    color: #0d0d5b;
    margin-top: 20px;
  }

  .card__heading {
    font-weight: 500;
    font-size: 36px;
    color: #d0d1ff;
    margin: 0;
  }

  .card__imageTypeInfo {
    font-weight: 500;
    font-size: 18px;
    color: #adaeff;
    margin-top: 10px;
  }

  .card__dragdrop__container {
    margin-top: 46px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .card__dudeOnDisk {
    top: -130px;
    position: absolute;
    pointer-events: none;
  }

  .card__or {
    margin-top: 55px;
    display: flex;
    width: 100%;
    align-items: center;
  }

  .lineLeft {
    width: 100%;
    max-width: 246px;
    height: 0px;
    margin: 0 auto 0 0;

    border: 2px solid #4345cf;
  }

  .lineRight {
    width: 100%;
    max-width: 246px;
    height: 0px;
    margin: 0 0 0 auto;

    border: 2px solid #4345cf;
  }

  .card__or__word {
    font-weight: 500;
    font-size: 14px;
    color: #adaeff;
  }

  .card__choose-file {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 187px;
    max-height: 49px;

    /* background: */
    border: 0;
    border-radius: 8px;
    padding: 0;
    background-image: linear-gradient(
      93.32deg,
      #3738b5 11.15%,
      rgba(21, 22, 162, 0.88) 97.14%
    );
    background-repeat: repeat;
    transition: background-position 0.3s ease;
    cursor: pointer;
  }

  .card__choose-file:hover {
    background-position: 207px;
  }

  .card__choose-file__container {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .card__choose-file__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 47px;
    height: 100%;
    background-color: #1a1b93;
    border-radius: 8px 0px 0px 8px;
    margin: 0 auto 0 0;
  }

  .card__choose-file__text {
    flex: 1;
    font-weight: 600;
    font-size: 18px;
    color: #adaeff;
  }

  .card__choose-file__icon__svg {
    fill: #adaeff;
  }
</style>
