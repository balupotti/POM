import {test , expect} from '@playwright/test';

test ('Dropdown',async ({page}) =>{

    await page.goto('https://letcode.in/dropdowns/')

    const fruits = await page.locator('//select[@id="fruits"]')
    await fruits.selectOption({label:"Apple"})
    const Dropdown = await fruits.locator('option:checked').textContent()
    console.log(Dropdown)

    const  superheros=await page.locator('//select[@id="superheros"]')
    await superheros.selectOption([{label:"Aquaman"}, {value:"ta"},{index:6}])
    const Selecone=await superheros.locator('option:checked').allTextContents()
    console.log(Selecone)

     const lang=await page.locator('//select[@id="lang"]')
     await lang.selectOption({label:"JavaScript"})
     const A=await lang.locator('option:checked').textContent()
     console.log(A)

     const country= await page.locator('//select[@id="country"]')
     await country.selectOption({label:"India"})
     const BB=await country.locator('option:checked').textContent()
     console.log(BB)

    await page.waitForTimeout(3000)
})