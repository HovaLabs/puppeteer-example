module.exports = {
  server: {
    command: "BROWSER=none react-scripts start",
    port: 3000,
    launchTimeout: 20000
  },
  launch: {
    headless: process.env.HEADLESS !== "false"
  },
  browserContext: "default"
};
