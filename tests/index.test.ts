import { setLanguage, timeAgo, timeUntil } from "../src/index";

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

    it("should format date in Spanish", () => {
      setLanguage("es");
      const date = new Date(Date.now() + 60000); // 1 minute from now
      expect(timeUntil(date)).toBe("en 1 minuto");
    });
  });
});
