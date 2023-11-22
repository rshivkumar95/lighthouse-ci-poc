
# Run lighthouse CI for DB - POC

This is POC to check if we can run lighthouse in CI mode using puppeteer tool


As part of this POC following things are happening

1. Use puppeteer to open https://web.demandbase.com will enter the username and password
2. Once login is successful, lighthouse will run for the URL mentioned in the lighthouse config file.
3. Once done report are generate it will be put into reports folder


