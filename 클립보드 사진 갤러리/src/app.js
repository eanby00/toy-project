const TYPE_IMAGE = "image/png";
const image = document.querySelector("img");

class ClipboardHelper {
  static async readImage() {
    const clipboardData = await navigator.clipboard.read();
    const data = clipboardData[0];
    if (data.types[0] !== TYPE_IMAGE) {
      return;
    }
    const blobData = await data.getType(TYPE_IMAGE);
    return window.URL.createObjectURL(blobData);
  }
}

class App {
  static init() {
    // const timer = setInterval(() => {
    //   console.log("test");
    // }, 10000);
    console.log(ClipboardHelper.readImage());
  }
}

App.init();
