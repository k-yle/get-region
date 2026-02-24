import { describe, expect, it } from 'vitest';
import { page, server } from '@vitest/browser/context';
import region from '..';

describe('browser', () => {
  it("sanity check that we're running in a browser, not nodejs", async () => {
    await expect.element(page.getByText('')).toBeInTheDocument();
  });

  it('identifies the timezone', () => {
    expect(region.timeZone).toBe('Pacific/Apia');
  });

  if (server.browser === 'firefox') {
    it(`cannot identify the country in ${server.browser}`, () => {
      expect(region.country).toStrictEqual([]);
    });
  } else {
    it('identifies the country', () => {
      expect(region.country).toStrictEqual(['WS']);
    });
  }

  it('populates the timeZoneMap object', () => {
    expect(Object.keys(region.timeZoneMap).length).toBeGreaterThan(200);
  });

  it('does not include deprecated codes', () => {
    expect(region.timeZoneMap['Europe/Berlin']).toStrictEqual(['DE']); // no DD
    expect(region.timeZoneMap['Europe/Moscow']).toStrictEqual(['RU']); // no SU
  });
});
