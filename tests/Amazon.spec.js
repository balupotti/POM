
import {test , expect} from '@playwright/test'

test ('Amazon ',async({browser}) =>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/')
  // await page.waitForTimeout(2000)

   await page.locator('#twotabsearchtextbox').fill("Samsung S25 Ultra 256GB")
   await page.locator('//input[@id="nav-search-submit-button"]').click();
   //await page.waitForTimeout(5000)

   const product = page.locator('(//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"])[1]');
  
   await page.waitForTimeout(3000)
   await product.evaluate(el => el.removeAttribute('target'));

   await page.waitForLoadState()
   await product.click()
   await page.waitForTimeout(3000)

   const buyNow = page.locator('(//input[@id="add-to-cart-button"])[2]')
   await buyNow.click()
   await page.waitForTimeout(3000)
    
   const title = await page.title()
   console.log(title)
})