const doLogin = require('./utils/login');

let counter = 1;

async function setup(browser, context) {
    // launch browser for LHCI
    const page = await browser.newPage();
    await page.setCacheEnabled(true)

    if(counter === 1){
        await doLogin(page)
    }
    else{
        await page.goto(context.url);
    }
    // close session for next run
    await page.close();
    counter++
}

module.exports = setup