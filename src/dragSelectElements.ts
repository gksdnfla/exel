import { Point, RenderItem, DragElement, SelectedRect } from './interface';
import { bindEvent, removeEvent } from './utils';

export class DragSelectElement {
    startPoint: Point = { x: 0, y: 0 };
    warpperElement: HTMLDivElement;
    dragRectElement: HTMLDivElement | undefined;
    targetElement: HTMLDivElement | undefined;
    renderData: Array<RenderItem[]>;
    rowSize: number;
    columnSize: number;

    constructor(
        renderData: Array<RenderItem[]>,
        rowSize: number,
        columnSize: number
    ) {
        this.warpperElement = <HTMLDivElement>(
            document.getElementById('warpper')
        );
        this.renderData = renderData;
        this.rowSize = rowSize;
        this.columnSize = columnSize;
        const mousemove = (ev: MouseEvent) => {
            this.mousemove(ev);
        };

        bindEvent(
            document.getElementsByTagName('body')[0],
            'mousedown',
            (ev: MouseEvent) => {
                this.startPoint.x = ev.pageX;
                this.startPoint.y = ev.pageY;

                this.targetElement = this.getTargetElement(
                    this.renderData,
                    this.startPoint
                );

                this.dragRectElement = document.createElement('div');
                this.dragRectElement.className = 'drag-rect';

                this.removeAllSelectedRectElements();

                this.warpperElement.appendChild(this.dragRectElement);

                bindEvent(document, 'mousemove', this.mousemove.bind(this));
                bindEvent(document, 'mouseup', this.mouseup.bind(this));
            }
        );
    }

    removeAllSelectedRectElements(): void {
        for (
            let i = 0;
            i < document.querySelectorAll('#warpper .selected-rect').length;
            i++
        ) {
            const itemElement: HTMLElement = <HTMLElement>(
                this.warpperElement.children[i]
            );

            if (itemElement.className === 'selected-rect') {
                this.warpperElement.removeChild(itemElement);
            }
        }
    }

    mousemove(ev: MouseEvent): void {
        if (!this.dragRectElement) return;

        const endPoint: Point = {
            x: ev.pageX,
            y: ev.pageY,
        };
        this.dragRectElement = <HTMLDivElement>this.dragRectElement;

        if (this.startPoint.x < endPoint.x) {
            this.dragRectElement.style.left = this.startPoint.x + 'px';
        } else {
            this.dragRectElement.style.left = endPoint.x + 'px';
        }

        if (this.startPoint.y < endPoint.y) {
            this.dragRectElement.style.top = this.startPoint.y + 'px';
        } else {
            this.dragRectElement.style.top = endPoint.y + 'px';
        }

        this.dragRectElement.style.width =
            Math.abs(this.startPoint.x - endPoint.x) + 'px';
        this.dragRectElement.style.height =
            Math.abs(this.startPoint.y - endPoint.y) + 'px';
    }

    mouseup(ev: MouseEvent): void {
        const endPoint: Point = {
            x: ev.pageX,
            y: ev.pageY,
        };
        const startX: number = this.startPoint.x;
        const startY: number = this.startPoint.y;
        const endX: number = endPoint.x;
        const endY: number = endPoint.y;

        const { leftTopPoint, rightBottomPoint } =
            this.getLeftTopPointAndRightBottomPoint({
                startX,
                startY,
                endX,
                endY,
            });
        const selectedRect = this.getSelectedRect({
            renderData: this.renderData,
            leftTopPoint,
            rightBottomPoint,
        });

        const selectedRectElement: HTMLDivElement =
            document.createElement('div');

        selectedRectElement.className = 'selected-rect';
        selectedRectElement.style.left = selectedRect.left - 2 + 'px';
        selectedRectElement.style.top = selectedRect.top - 2 + 'px';
        selectedRectElement.style.width = selectedRect.width - 1 + 'px';
        selectedRectElement.style.height = selectedRect.height - 1 + 'px';

        if (startX < endX) {
            if (startY < endY) {
                var cloneElement: DragElement = <DragElement>(
                    this.renderData[0][0].element?.cloneNode(true)
                );
                cloneElement.style.left = '0px';
                cloneElement.style.top = '0px';
                cloneElement.setAttribute('row-index', '0');
                cloneElement.setAttribute('col-index', '0');
            } else {
                let colLastIndex: number = this.columnSize - 1;
                var cloneElement: DragElement = <DragElement>(
                    this.renderData[0][colLastIndex].element?.cloneNode(true)
                );
                cloneElement.style.left = '0px';
                cloneElement.style.bottom = '0px';
                cloneElement.setAttribute('row-index', '0');
                cloneElement.setAttribute('col-index', colLastIndex.toString());
            }
        } else {
            if (startY < endY) {
                let rowLastIndex: number = this.rowSize - 1;
                var cloneElement: DragElement = <DragElement>(
                    this.renderData[rowLastIndex][0].element?.cloneNode(true)
                );
                cloneElement.style.right = '0px';
                cloneElement.style.top = '0px';
                cloneElement.setAttribute('row-index', rowLastIndex.toString());
                cloneElement.setAttribute('col-index', '0');
            } else {
                let rowLastIndex: number = this.rowSize - 1;
                let colLastIndex: number = this.columnSize - 1;
                var cloneElement: DragElement = <DragElement>(
                    this.renderData[rowLastIndex][
                        colLastIndex
                    ].element?.cloneNode(true)
                );
                cloneElement.style.right = '0px';
                cloneElement.style.bottom = '0px';
                cloneElement.setAttribute('row-index', rowLastIndex.toString());
                cloneElement.setAttribute('col-index', colLastIndex.toString());
            }
        }

        cloneElement.style.width =
            parseInt(cloneElement.style.width) - 1 + 'px';
        cloneElement.style.height =
            parseInt(cloneElement.style.height) - 1 + 'px';

        selectedRectElement.appendChild(cloneElement);

        (<HTMLElement>document.getElementById('warpper')).appendChild(
            selectedRectElement
        );

        if (this.dragRectElement) {
            this.warpperElement.removeChild(
                <HTMLDivElement>this.dragRectElement
            );
            this.dragRectElement = undefined;
        }

        removeEvent(
            document.getElementsByTagName('body')[0],
            'mousemove',
            this.mousemove.bind(this)
        );
        removeEvent(
            document.getElementsByTagName('body')[0],
            'mouseup',
            this.mouseup.bind(this)
        );
    }

    private getTargetElement(
        renderData: Array<RenderItem[]>,
        startPoint: Point
    ): HTMLDivElement | undefined {
        let top: number = 0;
        let curRowIndex: number = -1;
        let curColIndex: number = -1;

        for (
            let rowIndex: number = 0;
            rowIndex < renderData.length;
            rowIndex++
        ) {
            const row: RenderItem[] = renderData[rowIndex];
            let left: number = 0;

            for (let colIndex: number = 0; colIndex < row.length; colIndex++) {
                const col: RenderItem = row[colIndex];

                if (startPoint.x > left && startPoint.x < left + col.width) {
                    curColIndex = colIndex;
                }

                if (startPoint.y > top && startPoint.y < top + col.height) {
                    curRowIndex = rowIndex;
                }

                if (curRowIndex >= 0 && curColIndex >= 0) {
                    break;
                }

                left += col.width;
                if (colIndex === 0) top += col.height;
            }
        }

        return renderData[curRowIndex][curColIndex]
            ? renderData[curRowIndex][curColIndex].element
            : undefined;
    }

    private getSeletedElements(
        renderData: Array<RenderItem[]>,
        leftTopPoint: Point,
        rightBottomPoint: Point
    ) {
        const selectedRect = { left: 0, top: 0, width: 0, height: 0 };
        let isBreak: boolean = false;
        let top: number = 0;

        for (
            let rowIndex: number = 0;
            rowIndex < renderData.length;
            rowIndex++
        ) {
            const row: RenderItem[] = renderData[rowIndex];
            let left = 0;

            for (let colIndex: number = 0; colIndex < row.length; colIndex++) {
                const col: RenderItem = row[colIndex];

                if (leftTopPoint.x < left && selectedRect.left === 0) {
                    selectedRect.left = left - col.width;
                }
                if (leftTopPoint.y < top && selectedRect.top === 0) {
                    selectedRect.top = top - col.height;
                }
                if (rightBottomPoint.x < left && selectedRect.width === 0) {
                    selectedRect.width = left - selectedRect.left;
                }
                if (rightBottomPoint.y < top && selectedRect.height === 0) {
                    selectedRect.height = top - selectedRect.top;
                }

                if (
                    selectedRect.left !== 0 &&
                    selectedRect.top !== 0 &&
                    selectedRect.width !== 0 &&
                    selectedRect.height !== 0
                ) {
                    isBreak = true;
                    break;
                }

                left += col.width;
                if (colIndex === 0) top += col.height;
            }

            if (isBreak === true) break;
        }
    }

    private getSelectedRect({
        renderData,
        leftTopPoint,
        rightBottomPoint,
    }: {
        renderData: Array<RenderItem[]>;
        leftTopPoint: { x: number; y: number };
        rightBottomPoint: { x: number; y: number };
    }): SelectedRect {
        const selectedRect = { left: 0, top: 0, width: 0, height: 0 };
        let isBreak: boolean = false;
        let top: number = 0;

        for (
            let rowIndex: number = 0;
            rowIndex < renderData.length;
            rowIndex++
        ) {
            const row: RenderItem[] = renderData[rowIndex];
            let left = 0;

            for (let colIndex: number = 0; colIndex < row.length; colIndex++) {
                const col: RenderItem = row[colIndex];

                if (leftTopPoint.x < left && selectedRect.left === 0) {
                    selectedRect.left = left - col.width;
                }
                if (leftTopPoint.y < top && selectedRect.top === 0) {
                    selectedRect.top = top - col.height;
                }
                if (rightBottomPoint.x < left && selectedRect.width === 0) {
                    selectedRect.width = left - selectedRect.left;
                }
                if (rightBottomPoint.y < top && selectedRect.height === 0) {
                    selectedRect.height = top - selectedRect.top;
                }

                if (
                    selectedRect.left !== 0 &&
                    selectedRect.top !== 0 &&
                    selectedRect.width !== 0 &&
                    selectedRect.height !== 0
                ) {
                    isBreak = true;
                    break;
                }

                left += col.width;
                if (colIndex === 0) top += col.height;
            }

            if (isBreak === true) break;
        }

        return selectedRect;
    }

    private getLeftTopPointAndRightBottomPoint({
        startX,
        startY,
        endX,
        endY,
    }: {
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    }) {
        const obj = {
            leftTopPoint: { x: 0, y: 0 },
            rightBottomPoint: { x: 0, y: 0 },
        };

        if (startX > endX) {
            obj.leftTopPoint.x = endX;
            obj.rightBottomPoint.x = startX;
        } else {
            obj.leftTopPoint.x = startX;
            obj.rightBottomPoint.x = endX;
        }

        if (startY > endY) {
            obj.leftTopPoint.y = endY;
            obj.rightBottomPoint.y = startY;
        } else {
            obj.leftTopPoint.y = startY;
            obj.rightBottomPoint.y = endY;
        }

        return obj;
    }
}
