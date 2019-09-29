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
    });
  });
}

export default homePageTest;
