import {test,expect} from '@playwright/test'
import { promises } from 'node:dns'

test("online shopping",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.bigbasket.com/")
    await page.locator('//h3[text()="Capsicum - Green"]').click()

   const [newpage] = await Promise.all([
    context.waitForEvent('page'),
    // Using a more resilient locator strategy
    page.locator('div.flex-col').filter({ hasText: 'Capsicum' }).nth(0).click() 
    
]);

await newpage.waitForLoadState();
console.log("New Page Title: ", await newpage.title());
    await page.waitForTimeout(3000)
})