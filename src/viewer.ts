import { SkinObject2D } from "./model";
// import { TextureCanvas } from "skinview-utils";
// TODO: create config for class

enum RenderPart {
	HEAD_FRONT = 0,
	HEAD_BACK = 1,
	BODY_FRONT = 2,
	BODY_BACK = 3
}

interface SkinvViewer2DOptions {
	domElement: HTMLElement;
	skinUrl: string;
	width?: number;
	height?: number;
	toRender?: string;
}

class SkinvViewer2D {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D | null;
	private domElement: HTMLElement;
	private skinUrl: string;
	private skinImage: HTMLImageElement;
	private skinObject: SkinObject2D;
	private toRender: number;

	constructor(options: SkinvViewer2DOptions) {
		this.domElement = options.domElement;
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.skinUrl = options.skinUrl;

		if (options.width !== undefined) {
			this.canvas.width = options.width;
		}

		if (options.height !== undefined) {
			this.canvas.height = options.height;
		}

		if (options.toRender !== undefined) {
			const groupIndex = Object(RenderPart)[options.toRender];
			this.toRender = groupIndex;
		} else {
			this.toRender = 0;
		}

		// add canvas to dom
		this.domElement.appendChild(this.canvas);

		this.skinImage = new Image();
		this.skinImage.src = options.skinUrl;

		this.skinObject = new SkinObject2D(this);

		// texture loading
		this.skinImage.crossOrigin = "anonymous";
		this.skinImage.onerror = (): void => console.error("Failed loading " + this.skinImage.src);
		this.skinImage.onload = (): void => this.render();
	}

	getCanvas(): HTMLCanvasElement {
		return this.canvas;
	}

	render(): void {
		if (this.ctx === null) {
			return;
		}
		const { skinImage, skinObject, ctx, toRender } = this;
		ctx.imageSmoothingEnabled = false;

		switch(toRender) {
			case RenderPart.HEAD_FRONT:
				return skinObject.drawHeadFront(ctx, skinImage);
			case RenderPart.HEAD_BACK:
				return skinObject.drawHeadBack(ctx, skinImage);
			default:
				break;
		}
	}
}

export { SkinvViewer2D };
