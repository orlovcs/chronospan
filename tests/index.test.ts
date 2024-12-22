import { setLanguage, timeAgo } from "../src/index";

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
