
import {test , exact} from '@playwright/test'

test('Flipkart' , async ({browser})=> {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000)

    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("Samsung S25 ultra 256GB")
    await page.locator('(//button[@class="XFwMiH"])[1]').click()

    const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click('(//div[@class="RG5Slk"])[1]')
    ])

    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
    // await page.bringToFront()
    // await page.goForward()
    await page.waitForTimeout(5000)

})


