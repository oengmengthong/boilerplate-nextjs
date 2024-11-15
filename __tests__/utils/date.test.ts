import { formatDate, formatDateTime, isValidDate } from '@/lib/utils/date';

describe('Date Utils', () => {
  const testDate = new Date('2024-03-20T12:00:00Z');

  it('formats date correctly', () => {
    expect(formatDate(testDate)).toBe('March 20, 2024');
  });

  it('formats date time correctly', () => {
    const formatted = formatDateTime(testDate);
    expect(formatted).toMatch(/March 20, 2024/);
    expect(formatted).toMatch(/\d{1,2}:\d{2} [AP]M/);
  });

  it('validates dates correctly', () => {
    expect(isValidDate(testDate)).toBe(true);
    expect(isValidDate(new Date('invalid'))).toBe(false);
    expect(isValidDate('2024-03-20')).toBe(false);
  });
});