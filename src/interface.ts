export interface Point {
    x: number;
    y: number;
}

export interface DragEvent {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    targetElement: HTMLElement;
    dragRectElement: HTMLDivElement;
}

export interface DragElement extends HTMLElement {
    selectElementList: Array<HTMLElement>;
}

export interface SelectedRect {
    top: number;
    left: number;
    width: number;
    height: number;
}

export interface RenderItem {
    width: number;
    height: number;
    value: string;
    element?: HTMLDivElement;
}
