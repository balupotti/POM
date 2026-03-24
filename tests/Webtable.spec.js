
import {test , expect} from '@playwright/test'

test("Table" , async({page}) => {

    await page.goto('https://qavbox.github.io/demo/webtable/')

    const T1 = await page.locator('//table[@id="table02"]//tbody//tr[2]').textContent()
    console.log(T1)
    expect(T1).toContain('Garrett Winters')

    const T2 = await page.locator('//table[@id="table02"]//tbody//tr[1]//td[3]').textContent()
    console.log(T2)

    const T3 = await page.locator('//table[@id="table02"]//tbody//td[4]').allTextContents()
    console.log(T3)
    expect(T3).toContain('33')

    const T4 = await page.locator('//table[@id="table02"]//tbody//tr[2]//td[3]').textContent()
    console.log(T4) 

    const T5 = await page.locator('//table[@id="table02"]//tbody//tr[5]').textContent()
    console.log(T5)
    expect(T5).toContain('Airi Satou')

    



    
})