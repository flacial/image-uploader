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

      isError.set(false);

      const reader = new FileReader();
      reader.onload = () => imageBuffer.set(reader.result as string);
      reader.readAsDataURL(firstFile);

      uploadImageFormData({ file: firstFile })
        .then((url) => imageUrl.set(url))
        .catch(() => isError.set(true));
    });

    input.click();
  };
</script>

<Card paddingYBottom={55}>
  <h1 class="card__heading">Upload Image</h1>
  <span class="card__imageTypeInfo">Any image type*</span>
  <div class="card__dragdrop__container">
    <DragDrop />
    <img class="card__dudeOnDisk" src="dudeOnDisk.png" alt="dude on disk" />
  </div>
  {#if $isError}
    <div class="error__container">
      <img src="error.svg" alt="error" />
      <span class="error">Internal Error</span>
    </div>
  {:else}
    <span class="dragInfo">Drag and drop an image</span>
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
  }

  .error__container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    column-gap: 5px;
  }

  .dragInfo {
    font-size: 14px;
    margin-top: 10px;
    color: #a5a6ffdb;
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
    margin-top: 36px;
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 30px;
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
    height: 49px;
    max-width: 187px;
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
    box-shadow: 0px 0px 20px rgb(21 22 162 / 60%);
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

  @media (max-width: 490px) {
    .card__choose-file {
      margin-top: 40px;
    }

    .card__heading {
      font-size: 30px;
    }

    .card__imageTypeInfo {
      font-size: 1rem;
    }
  }

  @media (max-width: 1024px) {
    .card__dragdrop__container,
    .card__or,
    .dragInfo {
      display: none;
    }

    .card__choose-file {
      margin-top: 40px;
    }
  }
</style>
