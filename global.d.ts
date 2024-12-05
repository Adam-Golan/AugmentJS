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
}

export { };