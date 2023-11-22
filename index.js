/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */

let counter = 1;

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


async function setup(browser, context) {
    // launch browser for LHCI
    const page = await browser.newPage();
    await page.setCacheEnabled(true)

    if(counter === 1){
        await doLogin(page)
    }
    else {
        await page.goto(context.url);
    }
    
    // close session for next run
    await page.close();
    counter++
}

module.exports = setup