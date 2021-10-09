export const uploadImageFormData = async ({
  url = "http://localhost:8124/image/api/upload",
  file,
}: {
  url?: RequestInfo;
  file: any;
}): Promise<any> => {
  const formData = new FormData();
  const fileData = file.name ? file : file.getAsFile();
  formData.append("imageFile", fileData);

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const imageUrl = res.json();

  return imageUrl;
};
