

import{test , expect} from '@playwright/test'

test( "Demo Site" , async({page}) => {

    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.waitForTimeout(2000)

    await page.once('dialog',async(dialog)=>{
        await console.log("Simple Alert :- " , dialog.message())
        await dialog.accept()
    })

    await page.locator('(//a[@class="analystic"])[1]').click()
    

    await page.locator('//button[@class="btn btn-danger"]').click()
     await page.waitForTimeout(4000)

      await page.once('dialog',async(dialog)=>{
        await console.log("Conform Alert :- " , dialog.message())
        await dialog.dismiss()
    })

    await page.locator('(//a[@class="analystic"])[2]').click()
    await page.waitForTimeout(4000)

    await page.locator('//button[@class="btn btn-primary"]').click()
       await page.waitForTimeout(4000)

         await page.once('dialog',async(dialog)=>{
        await console.log("Conform Alert :- " , dialog.message())
        await dialog.accept("Balu")

            await page.locator('(//a[@class="analystic"])[3]').click()
    await page.waitForTimeout(4000)

    await page.locator('//button[@class="btn btn-info"]').click()
    await page.waitForTimeout(4000)
    })
})