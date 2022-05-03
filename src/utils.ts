import { colIndexList } from './colIndexList';

export function getColIndex(num: number, str: string = '') {
    let maxCount: number = getMaxCount(num);

    if (num < 26) {
        return colIndexList[num];
    }

    for (let i = 0; i < maxCount; i++) {
        str = colIndexList[num % 26] + str;

        str = getColIndex(Math.floor(num / 26) - 1, str) + str;
    }

    return str;
}

function getMaxCount(num: number): number {
    let count = 1;

    while (true) {
        let temp = Math.floor(num / 26);

        if (temp > 25) {
            count++;
            num = temp;
        } else {
            break;
        }
    }

    return count;
}

export function getElementPosition(element: HTMLElement): {
    x: number;
    y: number;
} {
    const point = {
        x: 0,
        y: 0,
    };

    while (element.parentNode) {
        point.x += element.offsetLeft;
        point.y += element.offsetTop;

        element = <HTMLElement>element.parentNode;
    }

    return point;
}

export function bindEvent(
    element: any,
    eventName: string = '',
    eventFn: (ev?: any) => void
) {
    if (element.addEventListener) {
        if (/^on/.test(eventName)) eventName = eventName.substring(2);

        element.addEventListener(eventName, eventFn);
    } else {
        if (!/^on/.test(eventName)) eventName = 'on' + eventName;

        element.attachEvent(eventName, eventFn);
    }
}

export function removeEvent(
    element: any,
    eventName: string = '',
    eventFn: (ev?: any) => void
) {
    if (element.removeEventListener) {
        if (/^on/.test(eventName)) eventName = eventName.substring(2);

        element.removeEventListener(eventName, eventFn);
    } else {
        if (!/^on/.test(eventName)) eventName = 'on' + eventName;

        element.detachEvent(eventName, eventFn);
    }
}
