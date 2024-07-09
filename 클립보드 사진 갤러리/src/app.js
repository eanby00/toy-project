const TYPE_IMAGE = "image/png";
const image = document.querySelector("img");

class Image {}

class ImageList {
  imageList = [];

  constructor() {}

  push(imageSrc) {
    this.imageList.push(imageSrc);
  }
}

class ClipboardHelper {
  lastBlob;

  static async readImage() {
    const clipboardData = await navigator.clipboard.read();
    const data = clipboardData[0];
    if (data.types[0] !== TYPE_IMAGE) {
      return;
    }
    const blobData = await data.getType(TYPE_IMAGE);

    if (blobData === this.lastBlob) {
      return;
    }
    this.lastBlob = blobData;
    return window.URL.createObjectURL(blobData);
  }
}

class App {
  static init() {
    const imageList = new ImageList();
    const timer = setInterval(() => {
      imageList.push(ClipboardHelper.readImage());
      console.log(imageList.imageList);
    }, 10000);
  }
}

App.init();
