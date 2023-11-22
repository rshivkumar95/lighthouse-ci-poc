const config = require('../confidential/secret.json');


const selector = {
    class(attribute, className){
        return `${attribute}[class='${className}']`
    },
    type(attribute, value){
        return `${attribute}[type='${value}']`
    },
    id(value){
        return `#${value}`
    }
}


async function doLogin(page) {
    const loginUrl = config.loginUrl;
    await page.waitForTimeout(2000)
    await page.goto(loginUrl);
    await page.waitForTimeout(2000)
    await page.type(selector.id("idp-discovery-username"), config.username);
    await page.waitForTimeout(2000)
    await page.click(selector.id("idp-discovery-submit"));
    await page.waitForSelector(selector.id("okta-signin-password"))
    await page.waitForTimeout(5000)
    await page.type(selector.id("okta-signin-password"), config.password);
    await page.waitForTimeout(2000)
    await page.click(selector.id("okta-signin-submit"));
    await page.waitForTimeout(5000)
    console.log(`Login is successful`)
}

module.exports = doLogin;