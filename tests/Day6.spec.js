
import {test , expect} from '@playwright/test'

test ('awb application' , async ({browser}) => {

    const context = await browser.newContext()
    const page  = await context.newPage()

     await page.goto('https://www.amazon.in/')
     await page.waitForTimeout(3000)

    //  await page.locator('//input[@id="twotabsearchtextbox"]').fill("samsung S25 Ultra 256GB")
    //  await page.locator('//input[@id="nav-search-submit-button"]').click()

    //  const [newPage] = await Promise.all([
    // context.waitForEvent("page"),
    // page.click('(//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"])[1]')
    // ])

    // await newPage.waitForLoadState()
    // const title = await newPage.title()
    // console.log(title)

})