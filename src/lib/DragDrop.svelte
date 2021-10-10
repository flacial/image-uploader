<script lang="ts">
  import { uploadImageFormData } from "../utils/images.utils";
  import { imageUrl, imageName, imageBuffer, isError } from "../store/store";

  const dragStyles = {
    backgroundColor: "rgb(79 80 202 / 40%)",
    border: "2px dashed #171aff",
    initiaLbackgroundColor: "rgba(108, 109, 209, 0.4)",
    initialBorder: "2px dashed #b6b7ff",
  };

  let imageInput: HTMLDivElement;

  const dropHandler = (ev: DragEvent) => {
    const files = ev.dataTransfer.items;

    if (files) {
      const [firstFile]: DataTransferItemList = files;

      if (firstFile.kind === "file") {
        const isImage: Boolean =
          firstFile.getAsFile().type.split("/")[0] === "image";

        if (isImage) {
          const reader = new FileReader();
          const fileAsFile = firstFile.getAsFile();

          imageName.set(fileAsFile.name);

          reader.onload = () => {
            imageBuffer.set(reader.result as string);
          };

          reader.readAsDataURL(fileAsFile);

          uploadImageFormData({ file: firstFile })
            .then((url) => {
              imageUrl.set(url);
            })
            .catch(() => isError.set(true));
        }
      }
    } else {
      console.log(ev.dataTransfer.files);
    }
  };

  const dragOverHandler = () => {
    imageInput.style.backgroundColor = dragStyles.backgroundColor;
    imageInput.style.border = dragStyles.border;
    return;
  };

  const dragLeaveHandler = () => {
    imageInput.style.backgroundColor = dragStyles.initiaLbackgroundColor;
    imageInput.style.border = dragStyles.initialBorder;
    return;
  };
</script>

<div
  class="imageInput"
  on:drop|preventDefault={dropHandler}
  on:dragover|preventDefault={dragOverHandler}
  on:dragleave={dragLeaveHandler}
  bind:this={imageInput}
/>

<style>
  .imageInput {
    width: 100%;
    height: 100%;
    max-width: 399px;
    padding-bottom: 251px;

    background-color: rgba(108, 109, 209, 0.4);
    border: 2px dashed #b6b7ff;
    box-sizing: border-box;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.13);
    border-radius: 28px;

    transition: background-color 0.2s ease-out;
  }
</style>
