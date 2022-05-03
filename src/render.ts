import { colIndexList } from './colIndexList';
import { RenderItem, DragEvent, DragElement, SelectedRect } from './interface';
import { getColIndex } from './utils';

export class Render {
    rowSize: number = 0;
    columnSize: number = 0;
    renderData: Array<RenderItem[]> = [];
    private clientWidth: number = 0;
    private clientHeight: number = 0;
    readonly initHeight = 20;
    readonly initWidth = 80;

    constructor(containerElement: HTMLElement) {
        this.appendRenderElements(containerElement);
    }

    public init(): void {
        this.clientWidth =
            document.body.clientWidth || document.documentElement.clientHeight;
        this.clientHeight =
            document.body.clientHeight || document.documentElement.clientHeight;
        this.rowSize = Math.floor(this.clientHeight / this.initHeight) + 1;
        this.columnSize = Math.floor(this.clientWidth / this.initWidth) + 1;
    }

    private createInputElement(
        columnElement: HTMLDivElement,
        rowIndex: number,
        colIndex: number
    ): HTMLInputElement {
        const inputElement: HTMLInputElement = document.createElement('input');

        inputElement.setAttribute('readonly', 'readonly');

        inputElement.onchange = () => {
            this.renderData[rowIndex][colIndex].value = inputElement.value;
        };

        inputElement.onfocus = function () {
            columnElement.className = 'column is-focus';
        };

        inputElement.onblur = function () {
            columnElement.className = 'column';
        };

        return inputElement;
    }

    public appendRenderElements(parentElement: HTMLElement): void {
        const that = this;
        this.init();

        this.renderData.length = this.rowSize;
        this.renderData.fill(
            new Array(this.columnSize).fill({
                width: this.initWidth,
                height: this.initHeight,
                value: '',
            })
        );

        this.renderData.forEach((row: RenderItem[], rowIndex: number) => {
            const rowElement: HTMLDivElement = document.createElement('div');
            let rowWidth = 0;

            rowElement.className = 'row';

            row.forEach((item: RenderItem, colIndex: number) => {
                const columnElement = (item.element = <any>(
                    document.createElement('div')
                ));

                columnElement.className = 'column';
                columnElement.style.width = item.width + 'px';
                columnElement.style.height = item.height + 'px';
                rowWidth += item.width;

                if (rowIndex === 0 && colIndex !== 0) {
                    this.columnSize / 26;
                    columnElement.innerText = getColIndex(colIndex - 1);
                } else if (rowIndex !== 0 && colIndex === 0) {
                    columnElement.innerText = rowIndex.toString();
                } else if (rowIndex !== 0 && colIndex !== 0) {
                    const inputElement: HTMLInputElement =
                        this.createInputElement(
                            columnElement,
                            rowIndex,
                            colIndex
                        );

                    columnElement.appendChild(inputElement);
                }

                rowElement.appendChild(columnElement);
            });

            rowElement.style.width = rowWidth + 'px';

            parentElement.appendChild(rowElement);
        });
    }
}
