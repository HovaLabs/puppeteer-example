import urlParser from "url";

function homePageTest() {
  const url = process.env.TEST_PROD
    ? "https://hovalabs.github.io/puppeteer-example"
    : "http://localhost:3000";

  describe("Puppeteer Example", () => {
    beforeAll(async () => {
      page = await browser.newPage();
      await page.goto(url);
    });

    it('should be titled "React App"', async () => {
      await expect(page.title()).resolves.toMatch("React App");
      await expect(page).toClick("a", {
        text: "12th St. Oakland City Center"
      });
      const currentUrl = urlParser.parse(page.url());
      expect(currentUrl.path).toEqual("/12TH");
    });
  });
}

export default homePageTest;
