import { Render } from './render';
import { DragSelectElement } from './dragSelectElements';
import './assets/styles/index.less';

window.onload = function () {
    const containerElement: HTMLDivElement = <HTMLDivElement>(
        document.getElementById('container')
    );
    const renderer = new Render(containerElement);

    new DragSelectElement(
        renderer.renderData,
        renderer.rowSize,
        renderer.columnSize
    );
};
