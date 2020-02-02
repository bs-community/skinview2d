// import { TextureCanvas } from "skinview-utils";
import { SkinvViewer2D } from "./skinview2d";

class SkinObject2D {
	private skinview: SkinvViewer2D;

	constructor(skinview: SkinvViewer2D) {
		this.skinview = skinview;
	}

	drawHeadFront(ctx: CanvasRenderingContext2D, skinTexture: HTMLImageElement): void {
		const { width, height } = this.skinview.getCanvas();
		ctx.drawImage(skinTexture, 8, 8, 8, 8, 0, 0, (width/8) * 8, (height/8) * 8);
	}

	drawHeadBack(ctx: CanvasRenderingContext2D, skinTexture: HTMLImageElement): void {
		const { width, height } = this.skinview.getCanvas();
		ctx.drawImage(skinTexture, 24, 8, 8, 8, 4, 0, (width/8) * 8, (height/8) * 8);
	}
}

export { SkinObject2D };
