
import {test , expect } from '@playwright/test'

test('Login' , async ({page}) => {

    await page.goto('https://practice.expandtesting.com/login')

    const  username=await page.locator('//input[@id="username"]')
    await username.fill('practice')
    const US=await username.inputValue()
    console.log(US)

    const  password=await page.locator('//input[@id="password"]')
     await password.fill('SuperSecretPassword!')
     const PS=await password.inputValue()
     console.log(PS)

    await page.locator('//button[@id="submit-login"]').click()


    await page.waitForTimeout(3000)



})