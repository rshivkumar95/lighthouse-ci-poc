module.exports = {
  ci: {
    collect: {
      //headful: true, // Uncomment if you want to see the browser window
      puppeteerScript: "./src/index.js",
      puppeteerLaunchOptions: {
        args: [
          "--allow-no-sandbox-job",
          "--allow-sandbox-debugging",
          "--no-sandbox",
          "--disable-gpu",
          "--disable-gpu-sandbox",
          "--display",
        ],
      }, //https://www.puppeteersharp.com/api/PuppeteerSharp.LaunchOptions.html
      numberOfRuns: 1,
      disableStorageReset: true,
      settings: {
        // Don't clear localStorage/IndexedDB/etc before loading the page.
        disableStorageReset: true,
        // Wait up to 60s for the page to load
        maxWaitForLoad: 60000,
        // Use applied throttling instead of simulated throttling
        throttlingMethod: "devtools",
        preset : "desktop",
      },
      url: [
        "https://web.demandbase.com/sales/abx/dashboard",
        "https://web.demandbase.com/sales/company/726263/account"
      ],
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci_reports_headless_new",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
      // token: '',
      // serverBaseUrl: ''
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 1 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
  },
};
