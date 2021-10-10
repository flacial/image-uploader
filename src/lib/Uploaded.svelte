<script>
  import Card from "./Card.svelte";
  import Party from "./Party.svelte";
  import { imageName, imageBuffer, imageUrl } from "../store/store";

  let copyLink = $imageUrl.fileUrl;

  const writeToClipboard = (clip) => {
    navigator.clipboard.writeText(clip);
  };

  const handleUserImageLink = () => {
    writeToClipboard($imageUrl.fileUrl);
    copyLink = "Copied";
  };

  const goBack = () => {
    imageName.set("");
    imageBuffer.set("");
    imageUrl.set("");
  };
</script>

<Card paddingYTop={24} paddingYBottom={24}>
  <div class="wrapper">
    <div class="back" on:click={goBack}>
      <img src="arrow_back.svg" alt="back home" />
    </div>
    <div class="heading">
      <h1><span style="color: #b6b8ff;">Uploaded</span> {$imageName}</h1>
      <Party />
    </div>
  </div>
  <div class="userImage__container">
    <img class="userImage" src={$imageBuffer} alt={$imageName} />
  </div>
  <div class="userImage__link__container">
    <button
      class="userImage__link"
      on:mouseenter={() => (copyLink = "Copy to clipboard")}
      on:mouseleave={() => (copyLink = $imageUrl.fileUrl)}
      on:click={handleUserImageLink}
    >
      <span class="userImage__link__icon">
        <!-- <img
          class="svg userImage__link__icon__svg"
          src="link.svg"
          alt="Upload icon"
        /> -->
        <img
          class="svg userImage__copy"
          alt="Copy to clipboard"
          src="copy.svg"
        />
      </span>
      <span class="userImage__link__text">{copyLink}</span>
    </button>
    <a class="userImage__open" href={$imageUrl.fileUrl} target="_blank">
      <img
        class="svg userImage__open__icon__svg"
        src="open.svg"
        alt="Upload icon"
      />
    </a>
  </div>
</Card>

<style>
  .back {
    width: 60px;
    height: 60px;
    background-color: rgba(229, 229, 229, 0.27);
    position: absolute;
    top: 0;
    left: -80px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .back:hover {
    background-color: rgb(239 239 239 / 27%);
  }

  .back img {
    width: 32px;
    pointer-events: none;
  }
  .wrapper {
    width: 100%;
    height: fit-content;
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

  .userImage {
    width: 100%;
    max-width: 67%;
    border-radius: 20px;
    box-shadow: 13px 13px 0 0 #4e50cf;
  }

  .userImage__container {
    margin-top: 26px;
    text-align: center;
  }

  .userImage__link {
    display: flex;
    align-items: center;
    width: 100%;
    height: 49px;
    max-width: 60%;
    border: 0;
    border-radius: 8px;
    background-image: linear-gradient(
      93.32deg,
      #3738b5 11.15%,
      rgba(21, 22, 162, 0.88) 97.14%
    );
    background-repeat: repeat;
    transition: background-position 0.3s ease;
    box-shadow: 0px 0px 20px rgb(21 22 162 / 60%);
    cursor: pointer;
    padding: 0 10px 0 0;
  }

  .userImage__open {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 49px;
    max-width: 49px;
    border: 0;
    border-radius: 8px;
    background-image: linear-gradient(
      93.32deg,
      #3738b5 11.15%,
      rgba(21, 22, 162, 0.88) 97.14%
    );
    box-shadow: 0px 0px 20px rgb(21 22 162 / 60%);
    cursor: pointer;
  }

  .userImage__link__container {
    display: flex;
    width: 100%;
    height: 100%;
    column-gap: 10px;
    text-align: center;
    justify-content: center;
    margin-top: 40px;
  }

  .userImage__link__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 47px;
    height: 100%;
    background-color: #1a1b93;
    border-radius: 8px 0px 0px 8px;
    margin: 0 10px 0 0;
  }

  .userImage__link__text {
    flex: 1;
    font-weight: 600;
    font-size: 13px;
    color: #adaeff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .svg {
    fill: #adaeff;
  }

  .userImage__copy {
    width: 25px;
  }

  @media screen and (max-width: 750px) {
    h1,
    .userImage__link__text {
      display: none;
    }

    h1 {
      order: 1;
    }

    .heading {
      flex-direction: column;
    }

    .userImage__link {
      width: fit-content;
      padding: 0;
    }

    .userImage__link__icon {
      margin: 0;
      border-radius: 8px;
      background-image: linear-gradient(
        93.32deg,
        #3738b5 11.15%,
        rgba(21, 22, 162, 0.88) 97.14%
      );
      background-color: transparent;
    }

    .wrapper {
      width: 100%;
      height: fit-content;
      padding: 0 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .back {
      top: auto;
      left: auto;
    }
  }

  @media screen and (max-width: 460px) {
    .heading {
      align-items: flex-end;
    }
  }
</style>
