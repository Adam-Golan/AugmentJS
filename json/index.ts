JSON.safeParse = function <T>(jsonString: string, defaultValue: T): T {
    try {
        return JSON.parse(jsonString);
    } catch {
        return defaultValue;
    }
};

JSON.deepCopy = function <T>(toCopy: T): T {
    return JSON.parse(JSON.stringify(toCopy));
};

JSON.pretty = function (value: any, indent: number = 2): string {
    return JSON.stringify(value, null, indent);
};