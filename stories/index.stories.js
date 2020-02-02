/* eslint-disable */
import { SkinvViewer2D } from '../libs/skinview2d';

export default {
  title: 'Skinview',
};

export const ViewerFront = () => {
  const element = document.createElement('div');
  const viewer = new SkinvViewer2D({
		domElement: element,
		skinUrl: 'texture/1_8_texturemap_redux.png',
		width: 400,
		height: 400,
		toRender: 'HEAD_FRONT'
	});

  // console.log(viewer);
  element.style.width = '400px';
  element.style.height = '400px';

  return element;
};

export const SmallViewerFront = () => {
  const element = document.createElement('div');
  const viewer = new SkinvViewer2D({
		domElement: element,
		skinUrl: 'texture/1_8_texturemap_redux.png',
		width: 200,
		height: 200,
		toRender: 'HEAD_FRONT'
	});

  console.log(viewer);
  element.style.width = '400px';
  element.style.height = '400px';

  return element;
};

export const ViewerBack = () => {
  const element = document.createElement('div');
  const viewer = new SkinvViewer2D({
		domElement: element,
		skinUrl: 'texture/1_8_texturemap_redux.png',
		width: 400,
		height: 400,
		toRender: 'HEAD_BACK'
	});

  console.log(viewer);
  element.style.width = '400px';
  element.style.height = '400px';

  return element;
};

