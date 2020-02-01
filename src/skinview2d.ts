// import { loadSkinToCanvas } from "skinview-utils";

class SkinvViewer {

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D|null;
  private domElement: HTMLElement;
  private imagePath: string;
  private skinImage: HTMLImageElement;

  constructor(domELement: HTMLElement, imagePath: string) {
   
    this.domElement = domELement;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.imagePath = imagePath;

    this.canvas.width = 400;
    this.canvas.height = 400;

    // add canvas to dom
    this.domElement.appendChild(this.canvas);

    this.skinImage = new Image();
    this.skinImage.src = imagePath;

    // texture loading
    this.skinImage.crossOrigin = "anonymous";
    this.skinImage.onerror = (): void => console.error("Failed loading " + this.skinImage.src);
    this.skinImage.onload = (): void => {
      // Not 100% sure I understand the benifit of this, right now it will just render the image
      // directly to the canvas, which in the 2d skin viewer case is not what we want?
      // loadSkinToCanvas(this.canvas, this.skinImage);
    };

    window.requestAnimationFrame(() => this.render()); 
  }

  render(): void {
    if (this.ctx === null) {
      return;
    }
    const { skinImage, ctx } = this;
    const { width, height } = this.canvas;

    this.ctx.imageSmoothingEnabled = false;

    // test drawing head with hard coded values for now
    ctx.drawImage(skinImage, 40, 8, 8, 8, 0, 0, (width/8) * 8, (height/8) * 8);

    window.requestAnimationFrame(() => this.render());
  }

}

export { SkinvViewer };