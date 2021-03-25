// import { TextureCanvas } from "skinview-utils";
import { SkinViewer2D } from "./skinview2d";

class SkinObject2D {
	private skinview: SkinViewer2D;

	constructor(skinview: SkinViewer2D) {
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
