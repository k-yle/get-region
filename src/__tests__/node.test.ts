import { describe, expect, it } from 'vitest';
import region from '..';

describe('node', () => {
  it('identifies the timezone', () => {
    expect(region.timeZone).toBe('Pacific/Apia');
  });

  it('identifies the country', () => {
    expect(region.country).toStrictEqual(['WS']);
  });

  it('populates the timeZoneMap object', () => {
    expect(Object.keys(region.timeZoneMap).length).toBeGreaterThan(200);
  });

  it('does not include deprecated codes', () => {
    expect(region.timeZoneMap['Europe/Berlin']).toStrictEqual(['DE']); // no DD
    expect(region.timeZoneMap['Europe/Moscow']).toStrictEqual(['RU']); // no SU
  });
});
