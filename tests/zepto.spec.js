
import {test , expect} from '@playwright/test'

test ('zepto', async({page}) => {

    await page.goto('https://www.zepto.com/')
  

   await page.locator('//span[text()="Mobiles"]').click()
   await page.locator('(//span[@class="c2zll"])[7]').click()
   await page.locator('//a[@aria-label="go to Tablet"]').click()
   await page.waitForTimeout(30000)
   await page.goBack()
   await page.waitForTimeout(3000)
   await page.goForward()
   await page.waitForTimeout(3000)
   await page.locator('(//button[@class="ciE0m4 c2lTrV cuPUm6 cnCei3"])[1]').click()
   await page.locator('//button[@class="ciE0m4 c2lTrV cuPUm6 cnCei3"]').click()
   await page.waitForTimeout(3000)
   await page.locator('//span[text()="Cart"]').click()
   await page.waitForTimeout(3000)
   await page.goBack()
   await page.waitForTimeout(3000)
   await page.locator('//img[@class="relative overflow-hidden __4LaMe"]').click()
   await page.locator('//img[@alt="38047553-95f3-47c6-a1ff-4794e1227d3a.png"]').click()
await page.locator('(//button[@class="ciE0m4 ceUl7T cuPUm6 cnCei3"])[1]').click()
await page.locator('(//button[@class="ciE0m4 ceUl7T cuPUm6 cnCei3"])[19]').click()
await page.locator('(//button[@class="ciE0m4 ceUl7T cuPUm6 cnCei3"])[10]').click()
await page.locator('(//button[@class="ciE0m4 ceUl7T cuPUm6 cnCei3"])[25]').click()
await page.locator('//img[@title="Mosambi"]').scrollIntoViewIfNeeded()
await page.waitForTimeout(3000)


})