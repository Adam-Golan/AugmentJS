RegExp.prototype.testAsync = function (substr: string): Promise<boolean> {
    return new Promise(res => res(this.test(substr)));
};
