interface renderItem {
    width: number;
    height: number;
    value: string;
}

export class Render {
    private rowSize: number = 0;
    private columnSize: number = 0;
    private clientWidth: number = 0;
    private clientHeight: number = 0;
    private renderData: Array<renderItem[]> = [];
    readonly initHeight = 20;
    readonly initWidth = 80;

    init(): void {
        this.clientWidth =
            document.body.clientWidth || document.documentElement.clientHeight;
        this.clientHeight =
            document.body.clientHeight || document.documentElement.clientHeight;
        this.rowSize = Math.floor(this.clientHeight / this.initHeight) + 1;
        this.columnSize = Math.floor(this.clientWidth / this.initWidth) + 1;
    }

    render(): void {
        this.init();

        this.renderData.length = this.rowSize;
        this.renderData.fill(
            new Array(this.columnSize).fill({
                width: this.initWidth,
                height: this.initHeight,
                value: '',
            })
        );

        this.renderData.forEach((row: renderItem[]) => {
            const rowElement: HTMLDivElement = document.createElement('div');

            row.forEach((item: renderItem) => {
                const columnElement: HTMLDivElement =
                    document.createElement('div');
            });
        });
    }
}
