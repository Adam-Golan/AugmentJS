import { IDateTimeDiff } from "./date/index";

declare global {
    interface String {
        capitalize(): string;
        titleCase(): string;
        addSpaces(type: 'uppercase' | '-' | '_' | '/'): string;
        remove(substr): string;
        snakeCase(): string;
        kebabCase(): string;
        reverse(): string;
        superTrim(): string;
        isPalindrome(): boolean;
        count(substr: string): number;
        truncate(length: number): string;
    }

    interface Number {
        isEven(): boolean;
        isOdd(): boolean;
        isPrime(): boolean;
        toOrdinal(): string;
        factorial(): number;
        toRoman(): string | null;
        clamp(min: number, max: number): number;
        toCurrency(locale: string, currency: string): string;
        roundToNearest(multiple: number): number;
    }

    interface BigInt {
        factorial(): bigint;
        isPrime(): boolean;
        toDecimalString(): string;
    }

    interface Array<T> {
        first: T;
        last: T;
        avg(): number;
        chunk(size: number): T[][];
        unique(): T[];
        shuffle(): T[];
        remove<T>(value: T): T[];
        diff(value: any[]): any[];
        intersect(value: any[]): any[];
        rotate<T>(steps: number): T[];
        groupBy<T>(fn: (item: T) => keyof T): { [k: string]: T[] };
        countBy<T>(fn: (item: T) => keyof T): { [k: string]: number };
    }

    interface Object {
        cloneDeep(): object;
        mergeDeep(source: object): object;
        isEmpty(): boolean;
        omit<T>(...keys: (keyof ThisType<T>)[]): object;
        pick<T>(...keys: (keyof ThisType<T>)[]): object;
        getPath<T>(this: T, path: string): any;
    }

    interface Function {
        debounce(delay: number): (...args: any[]) => void;
        throttle(delay: number): (...args: any[]) => void;
        once(): (...args: any[]) => any;
    }

    interface Promise<T = any> {
        timeout(ms: number, timeoutError: string): Promise<T>;
        finallyCatch(callback: (error: any) => void): Promise<T>;
        to(): Promise<[any, T | undefined]>;
        retry(retries: number, delay: number): Promise<T>;
        series(promises: (() => Promise<T>)[]): Promise<T[]>;
    }

    interface JSON {
        safeParse<T>(jsonString: string, defaultValue: T): T;
        deepCopy<T>(toCopy: T): T;
        pretty<T>(value: T, indent: number): string;
    }

    interface Date {
        getTimeDiff(b: Date): IDateTimeDiff;
        toISODateString(): string;
        isLeapYear(): boolean;
        isSameDay(date: Date): boolean;
        daysBetween(date: Date): number;
        add(type: 'y' | 'm' | 'd', value: number): Date;
        subtract(type: 'y' | 'm' | 'd', value: number): Date;
    }
}

export { };