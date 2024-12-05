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
}

export { };