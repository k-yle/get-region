import { describe, expect, it } from 'vitest';
import region from '..';

describe('node', () => {
  it('identifies the timezone', () => {
    expect(region.timeZone).toBe('Pacific/Apia');
  });

  it('identifies the country', () => {
    expect(region.country).toStrictEqual(['WS']);
  });
});
