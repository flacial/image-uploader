export const preloadImage = (src: string) => {
  return new Promise(function (resolve) {
    let img = new Image();
    img.onload = resolve;
    img.src = src;
  });
};
