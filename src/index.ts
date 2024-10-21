/* eslint-disable unicorn/prevent-abbreviations */

let cache: { [timeZone: string]: string[] } | undefined;

const module = {
  /** The user's timezone */
  timeZone: globalThis.Intl?.DateTimeFormat()?.resolvedOptions?.()?.timeZone,

  /**
   * An object which maps every timezone to the possible countries.
   */
  get timeZoneMap() {
    try {
      // computed lazily to improve performance
      if (!cache) {
        cache = {};
        // loop through every possible 2-digit country code
        for (let i = 0; i < 26; i++) {
          for (let j = 0; j < 26; j++) {
            const countryCode =
              String.fromCodePoint(65 + i) + String.fromCodePoint(65 + j);

            // the language code is irrelevant here
            const locale = new Intl.Locale(`xx-${countryCode}`);

            // @ts-expect-error -- fallback for nodejs and samsung internet
            const timezones = locale.timeZones || locale.getTimeZones() || [];

            for (const tz of timezones) {
              cache[tz] ||= [];
              cache[tz].push(countryCode);
            }
          }
        }
      }
    } catch {
      cache = {}; // some of the Intl.* APIs are not supported
    }
    return cache;
  },

  /**
   * The user's the country. Returns an array, since there
   * could be multiple possibilities, or no results.
   */
  get country() {
    return this.timeZoneMap[this.timeZone] || [];
  },
};

export default module;
