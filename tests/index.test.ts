import { fromTime, setLanguage, timeAgo, timeUntil } from "../src/index";

describe("timeAgo", () => {
  beforeAll(() => {
    setLanguage("en");
  });

  it('should format date as "just now" for dates less than a minute ago', () => {
    const date = new Date(Date.now() - 30000); // 30 seconds ago
    expect(timeAgo(date)).toBe("just now");
  });

  it('should format date as "1 minute ago" for dates one minute ago', () => {
    const date = new Date(Date.now() - 60000); // 1 minute ago
    expect(timeAgo(date)).toBe("1 minute ago");
  });

  /* tests in Spanish */

  it("should format date in Spanish", () => {
    setLanguage("es");
    const date = new Date(Date.now() - 60000); // 1 minute ago
    expect(timeAgo(date)).toBe("hace 1 minuto");
  });
});

describe("timeUntil", () => {
  beforeAll(() => {
    setLanguage("en");
  });

  it('should format date as "just now" for dates less than a minute from now', () => {
    const date = new Date(Date.now() + 30000); // 30 seconds from now
    expect(timeUntil(date)).toBe("just now");
  });

  it('should format date as "in 1 minute" for dates one minute from now', () => {
    const date = new Date(Date.now() + 60000); // 1 minute from now
    expect(timeUntil(date)).toBe("in 1 minute");
  });

  it('should format date as "in 2 minutes" for dates two minutes from now', () => {
    const date = new Date(Date.now() + 2 * 60000); // 2 minutes from now
    expect(timeUntil(date)).toBe("in 2 minutes");
  });

  /* tests in Spanish */

  it("should format date in Spanish", () => {
    setLanguage("es");
    const date = new Date(Date.now() + 60000); // 1 minute from now
    expect(timeUntil(date)).toBe("en 1 minuto");
  });
});

describe("fromTime", () => {
  beforeAll(() => {
    setLanguage("en");
  });

  it('should format past date as "just now" for dates less than a minute ago', () => {
    const date = new Date(Date.now() - 30000); // 30 seconds ago
    expect(fromTime(date)).toBe("just now");
  });

  it('should format future date as "just now" for no input', () => {
    expect(fromTime()).toBe("just now");
  });

  it('should format past date as "1 minute ago" for dates one minute ago', () => {
    const date = new Date(Date.now() - 60000); // 1 minute ago
    expect(fromTime(date)).toBe("1 minute ago");
  });

  it('should format future date as "in 1 millennia" for dates in two millennia', () => {
    const date = new Date(Date.now() + 365000 * 24 * 60 * 60 * 1000); // 1 millennia from now
    expect(fromTime(date)).toBe("in 1 millennia");
  });

  it('should format future date as "in 2 millennia" for dates in two millennia', () => {
    const date = new Date(Date.now() + 2 * 365000 * 24 * 60 * 60 * 1000); // 2 millennia from now
    expect(fromTime(date)).toBe("in 2 millennia");
  });

  it('should format future date as "in 1 minute" for dates one minute from now', () => {
    const date = new Date(Date.now() + 60000); // 1 minute from now
    expect(fromTime(date)).toBe("in 1 minute");
  });

  /* tests in Spanish */

  it("should format past date in Spanish", () => {
    setLanguage("es");
    const date = new Date(Date.now() - 60000); // 1 minute ago
    expect(fromTime(date)).toBe("hace 1 minuto");
  });

  it("should format future date in Spanish", () => {
    setLanguage("es");
    const date = new Date(Date.now() + 60000); // 1 minute from now
    expect(fromTime(date)).toBe("en 1 minuto");
  });
});
