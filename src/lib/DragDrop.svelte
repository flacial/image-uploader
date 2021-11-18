<script lang="ts">
  import { uploadImageFormData } from "../utils/images.utils";
  import { imageUrl, imageName, imageBuffer, isError } from "../store/store";

  const dragStyles = {
    backgroundColor: "rgb(79 80 202 / 40%)",
    border: "2px dashed #171aff",
    initiaLbackgroundColor: "rgba(108, 109, 209, 0.4)",
    initialBorder: "2px dashed #b6b7ff",
  };

  let dragBg = dragStyles.initiaLbackgroundColor;
  let dragBorder = dragStyles.initialBorder;

  let imageInput: HTMLDivElement;

  const dropHandler = (ev: DragEvent) => {
    const files = ev.dataTransfer.items;

    if (files) {
      const [firstFile] = files;

      if (firstFile.kind === "file") {
        const isImage =
          firstFile.getAsFile().type.split("/")[0] === "image";

        if (isImage) {
          const fileAsFile = firstFile.getAsFile();
          imageName.set(fileAsFile.name);

          isError.set(false);

          const reader = new FileReader();
          reader.onload = () => imageBuffer.set(reader.result as string);
          reader.readAsDataURL(fileAsFile);

          uploadImageFormData({ file: firstFile })
            .then((url) => imageUrl.set(url))
            .catch(() => isError.set(true));
        } else {
          setInitDragStyles();
        }
      }
    } else {
      console.log(ev.dataTransfer.files);
    }
  };

  const setDragOverStyles = () => {
    dragBg = dragStyles.backgroundColor;
    dragBorder = dragStyles.border;
    return;
  };

  const setInitDragStyles = () => {
    dragBg = dragStyles.initiaLbackgroundColor;
    dragBorder = dragStyles.initialBorder;
    return;
  };
</script>

<div
  style="background-color: {dragBg}; border: {dragBorder}"
  class="imageInput"
  on:drop|preventDefault={dropHandler}
  on:dragover|preventDefault={setDragOverStyles}
  on:dragleave={setInitDragStyles}
  bind:this={imageInput}
/>

<style>
  .imageInput {
    width: 100%;
    height: 100%;
    max-width: 399px;
    padding-bottom: 251px;

    /* background-color: rgba(108, 109, 209, 0.4); */
    /* border: 2px dashed #b6b7ff; */
    box-sizing: border-box;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.13);
    border-radius: 28px;

    transition: background-color 0.2s ease-out;
  }
</style>
