
import {test , expect} from '@playwright/test'

test ('Demo automation page',async({page})=> {

    await page.goto('https://demo.automationtesting.in/Register.html')

    await page.locator('(//input[@type="text"])[1]').fill('Raju')
    await page.locator('(//input[@type="text"])[2]').fill('kumar')
    await page.locator('//textarea[@ng-model="Adress"]').fill('Velachary')
    await page.locator('//input[@type="email"]').fill('Rajakumar@gmail.com')
    await page.locator('//input[@type="tel"]').fill('123456789')
    await page.locator('//input[@value="Male"]').check()
    await page.locator('//input[@id="checkbox2"]').check()
    await page.locator('//div[@id="msdd"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//a[text()="English"]').click('Enter')
    await page.locator('//select[@id="Skills"]').selectOption({label:"AutoCAD"})
    await page.locator('//span[@class="select2-selection__arrow"]').click()
    await page.locator('//li[text()="India"]').click()
    await page.locator('//select[@id="yearbox"]').selectOption({label:"2002"})
    await page.locator('//select[@placeholder="Month"]').selectOption({label:"September"})
    await page.locator('//select[@id="daybox"]').selectOption({label:"18"})
    await page.locator('//input[@id="firstpassword"]').fill('Raja@2022')
    await page.locator('//input[@id="secondpassword"]').fill('Raja@2022')
    await page.locator('//input[@id="imagesrc"]').scrollIntoViewIfNeeded()
    await page.setInputFiles('//input[@id="imagesrc"]','D:/playwrightclass/tests/Amazon.spec.js')
    await page.locator('//button[@id="submitbtn"]').click()
    await page.waitForTimeout(5000)


})