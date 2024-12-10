import { formatDate, setLanguage } from "../src/index";

describe("formatDate", () => {
  beforeAll(() => {
    setLanguage("en");
  });

  it('should format date as "just now" for dates less than a minute ago', () => {
    const date = new Date(Date.now() - 30000); // 30 seconds ago
    expect(formatDate(date)).toBe("just now");
  });

  it('should format date as "1 minute ago" for dates one minute ago', () => {
    const date = new Date(Date.now() - 60000); // 1 minute ago
    expect(formatDate(date)).toBe("1 minute ago");
  });

  it("should format date in Spanish", () => {
    setLanguage("es");
    const date = new Date(Date.now() - 60000); // 1 minute ago
    expect(formatDate(date)).toBe("hace 1 minutos");
  });
});
