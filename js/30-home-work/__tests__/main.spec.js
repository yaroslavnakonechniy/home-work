const {
    isValidEmail,
    isValidUrl
} = require('../main');

describe('isValidEmail', () => {
  test('should return true if email is valid (.com)', () => {
    expect(isValidEmail('example@example.com')).toBe(true);
  });

  test('should return true if email is valid (.ua)', () => {
    expect(isValidEmail('example@example.ua')).toBe(true);
  });

  test('should return false if email does not contain .com or .ua', () => {
    expect(isValidEmail('example@example')).toBe(false);
  });

  test('should return false if email does not contain @', () => {
    expect(isValidEmail('example.example.com')).toBe(false);
  });

  test('should return false if email is empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });
});

describe('isValidUrl', () => {
  test('should return true for https://www.example.com', () => {
    expect(isValidUrl('https://www.example.com')).toBe(true);
  });

  test('should return true for https://www.example.ua', () => {
    expect(isValidUrl('https://www.example.ua')).toBe(true);
  });

  test('should return true for http://www.example.com', () => {
    expect(isValidUrl('http://www.example.com')).toBe(true);
  });

  test('should return true for http://www.example.ua', () => {
    expect(isValidUrl('http://www.example.ua')).toBe(true);
  });

  test('should return false if URL is empty string', () => {
    expect(isValidUrl('')).toBe(false);
  });

  test('should return false if URL does not contain ://', () => {
    expect(isValidUrl('https.www.example.com')).toBe(false);
  });

  test('should return false if URL does not contain valid domain', () => {
    expect(isValidUrl('https://www.example')).toBe(false);
  });

  test('should return false if URL does not contain www', () => {
    expect(isValidUrl('https://example.com')).toBe(false);
  });
});