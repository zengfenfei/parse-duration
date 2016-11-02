
# parse-duration

The typescript version of [npm parse-duration](https://github.com/jkroso/parse-duration).

Convert a human readable duration to ms.

## Installation

`npm install parse-duration.ts`

then in your app:

```typescript
import parse from 'parse-duration.ts';
```

## API

### parse(str)

  convert `str` to ms

```typescript
let ns = parse('1ns') // => 1 / 1e6
let μs = parse('1μs') // => 1 / 1000
let ms = parse('1ms') // => 1
let s = parse('1s')   // => ms * 1000
let m = parse('1m')   // => s * 60
let h = parse('1h')   // => m * 60
let d = parse('1d')   // => h * 24
let w = parse('1w')   // => d * 7
let y = parse('1y')   // => d * 365.25
```

It can also handle basic compound expressions

```js
parse('1hr 20mins') // => 1 * h + 20 * m
```

whitespace

```js
parse('1 hr 20 mins') // => 1 * h + 20 * m
```

comma seperated numbers

```js
parse('27,681 ns') // => 27681 * ns
```

And most other types of noise

```js
parse('running length: 1hour:20mins') // => 1* h + 20 * m
```

You can even use negatives

```js
parse('2hr -40mins') // => 1 * h + 20 * m
```

And exponents

```js
parse('2e3s') // => 2000 * s
```

Available unit types are:

- nanoseconds (ns)
- microseconds (μs)
- milliseconds (ms)
- seconds (s, sec)
- minutes (m, min)
- hours (h, hr)
- days (d)
- weeks (w, wk)
- months
- years (y, yr)

And its easy to add more