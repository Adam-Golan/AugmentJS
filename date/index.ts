export interface IDateTimeDiff {
    timeDiff: number;
    seconds: number;
    minutes: number;
    hours: number;
    duration: string;
}

/**
 * Computes the difference between the current date and the given date and returns a new IDateTimeDiff object with the results.
 * @param {Date} date The date to compute the difference with.
 * @returns {IDateTimeDiff} A new IDateTimeDiff object with the time difference in seconds, minutes, hours, and a formatted string.
 * @example
 * const date = new Date('2020-01-01');
 * const diff = new Date('2020-01-01T01:00:00.000Z').getTimeDiff(date);
 * console.log(diff);
 * // {
 * //     timeDiff: 3600,
 * //     seconds: 0,
 * //     minutes: 0,
 * //     hours: 1,
 * //     duration: "01:00:00"
 * // }
 */
Date.prototype.getTimeDiff = function (date: Date): IDateTimeDiff {
    const timeDiff = Math.floor((this.getTime() - date.getTime()) / 1000);
    const hours = Math.floor(timeDiff / 3600);
    const minutes = Math.floor((timeDiff % 3600) / 60);
    const seconds = timeDiff % 60;
    const duration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return { timeDiff, seconds, minutes, hours, duration };
};

/**
 * Returns a boolean indicating whether the current year is a leap year.
 *
 * @returns {boolean} `true` if the year is a leap year, `false` otherwise.
 * @example
 *
 * (new Date('2020-01-01')).isLeapYear(); // true
 * (new Date('2021-01-01')).isLeapYear(); // false
 */
Date.prototype.isLeapYear = function (): boolean {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * Adds the specified value to the current date, using the specified unit.
 *
 * @param {('y'|'m'|'d')} type The unit of the value to add ('y' for years, 'm' for months, 'd' for days).
 * @param {number} value The value to add to the current date.
 * @returns {Date} A new Date object with the result of the addition.
 */
Date.prototype.add = function (type: 'y' | 'm' | 'd', value: number): Date {
    const result = new Date(this);
    const key = type === 'y' ? 'FullYear' : type === 'm' ? 'Month' : 'Date';
    result[`set${key}`](result[`get${key}`]() + value);
    return result;
}

/**
 * Subtracts the given value from the current date in the given unit.
 *
 * This is just a convenience wrapper around {@link Date.prototype.add}, which
 * can be used to add a negative value to the current date.
 *
 * @param {('y'|'m'|'d')} type The unit of the value to subtract.
 * @param {number} value The value to subtract.
 * @returns {Date} A new Date object with the result of the subtraction.
 * @see Date.prototype.add
 */
Date.prototype.subtract = function (type: 'y' | 'm' | 'd', value: number): Date {
    return this.add(type, -value);
};

/**
 * Checks if the current date and the given date are in the same day, i.e. they have the same year, month, and day.
 *
 * @param {Date} date The date to compare with.
 * @returns {boolean} `true` if the dates are in the same day, `false` otherwise.
 * @example
 *
 * const date1 = new Date('2020-01-01T12:00:00Z');
 * const date2 = new Date('2020-01-01T13:00:00Z');
 * date1.isSameDay(date2); // true
 */
Date.prototype.isSameDay = function (date: Date): boolean {
    return (
        this.getFullYear() === date.getFullYear() &&
        this.getMonth() === date.getMonth() &&
        this.getDate() === date.getDate()
    );
};

/**
 * Computes the absolute difference in days between the current date and the given date.
 *
 * @param {Date} date The date to compute the difference with.
 * @returns {number} The absolute difference in days.
 * @example
 *
 * const date = new Date('2020-01-01T12:00:00Z');
 * const later = new Date('2020-01-15T12:00:00Z');
 * date.daysBetween(later) // 14
 */
Date.prototype.daysBetween = function (date: Date): number {
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.floor(Math.abs(this.getTime() - date.getTime()) / msPerDay);
};

/**
 * Returns the ISO date string representation of the date, e.g. '2019-01-01'.
 *
 * @returns {string}
 * @example
 *
 * const date = new Date('2019-01-01T12:00:00Z');
 * date.toISODateString() // '2019-01-01'
 */

Date.prototype.toISODateString = function (): string {
    return this.toISOString().split('T')[0];
};
