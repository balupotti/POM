
import{test , expect} from '@playwright/test'
import { promises } from 'node:dns'

test( "Snap Deal" , async ({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.ebay.com/')
  
    await page.locator('//input[@id="gh-ac"]').fill("Samsung S25 Ultra 256GB")
 await page.keyboard.press('Enter');
   await page.waitForTimeout(3000)
   await page.locator('(//input[@class="checkbox__control"])[3]').check()
   await page.locator('(//input[@class="checkbox__control"])[7]').check()
  // await page.locator('(//input[@class="checkbox__control"])[13]').check( { force: true })

   const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator('(//span[@class="su-styled-text primary default"])[3]').click()
   ])

   await newPage.waitForEvent()
   const title = await newPage("title")
   console.log(title)
})