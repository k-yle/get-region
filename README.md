# get-region

[![Build Status](https://github.com/k-yle/get-region/workflows/CI/badge.svg)](https://github.com/k-yle/get-region/actions)
[![npm version](https://badge.fury.io/js/get-region.svg)](https://npm.im/get-region)
[![npm](https://img.shields.io/npm/dt/get-region.svg)](https://npm.im/get-region)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/get-region)

🌐 Tiny package (<400 bytes!) to get the user's country without calling any APIs, and without hardcoding any data. Works in the browser and nodejs.

It uses the browser's native [`Intl` SDK](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) to get the user's timezone, for example `Asia/Shanghai` or `Europe/Dublin`.
A [different `Intl` SDK](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones) is used to convert the timezone to a country code, such as `CN` or `IE`.

**This is not always reliable**; there are many cases where this approach fails.
However, it can provide a quick solution.
It also only works in modern browsers that support these [`Intl` APIs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).

## Example

```js
import region from 'get-region';

console.log(region.country); // for example: 'US' if you're in the United States
```

## Install

```sh
npm install get-region
```

## Questions

This library only gives you a country code.

- _What if I need the country name?_ — use the native [`Intl.DisplayNames` class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)
- _What if I need the latitude/longitude?_ — use a library like [country-coder](https://github.com/rapideditor/country-coder).
