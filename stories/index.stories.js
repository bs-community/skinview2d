/* eslint-disable */

import { SkinvViewer } from '../libs/skinview2d';

export default {
  title: 'Skinview',
};

export const Viewer = () => {
  // console.log(SkinvViewer);
  const element = document.createElement('div');
  const viewer = new SkinvViewer(element, 'texture/1_8_texturemap_redux.png');

  console.log(viewer);
  element.style.background = '#c1c1c1';
  element.style.width = '400px';
  element.style.height = '400px';

  return element;
};

