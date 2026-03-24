import { test, expect } from '@playwright/test';

test('web application', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.amazon.in/');

    // search mobile
    await page.locator('#twotabsearchtextbox').fill('Mobile');
    await page.locator('#nav-search-submit-button').click();

    // click first product (same tab)
    const product = page.locator('(//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"])[1]');

    // remove target so it won't open new tab
    await product.evaluate(el => el.removeAttribute('target'));

    await page.waitForLoadState();
    await product.click();
    await page.waitForTimeout(2000)

    // get title
    const title = await page.title();
    console.log(title);

});