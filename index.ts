const duration = /(-?\d*\.?\d+(?:e[-+]?\d+)?)\s*([a-zμ]*)/ig;

/**
 * conversion ratios
 */
export let units = {};

let nanosecond = units['nanosecond'] = 1 / 1e6;
units['ns'] = nanosecond;

let microsecond = units['microsecond'] = 1 / 1e3;
units['μs'] = microsecond;

let millisecond = units['millisecond'] = 1;
units['ms'] = millisecond;

let second = units['second'] = millisecond * 1000;
units['sec'] = second;
units['s'] = second;

let minute = units['minute'] = second * 60;
units['min'] = minute;
units['m'] = minute;

let hour = units['hour'] = minute * 60
units['hr'] = hour;
units['h'] = hour;

let day = units['day'] = hour * 24;
units['d'] = day;

let week = units['week'] = day * 7;
units['wk'] = week;
units['w'] = week;

units['month'] = day * (365.25 / 12)

let year = units['year'] = day * 365.25;
units['yr'] = year;
units['y'] = year;

/**
 * convert `str` to ms
 *
 */
export default function parse(str: string): number {
    let result = 0;
    // ignore commas
    str = str.replace(/(\d),(\d)/g, '$1$2')
    str.replace(duration, (substring: string, n: string, unit: string) => {
        let ms = units[unit]
            || units[unit.toLowerCase().replace(/s$/, '')]
            || 1;
        result += parseFloat(n) * ms;
        return "";
    });
    return result;
}