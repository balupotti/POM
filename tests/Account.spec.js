
import { test , expect} from '@playwright/test';

test ("Account Create", async({page}) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await  page.locator('//a[text()="Register"]').click()
  //  await  page.waitForTimeout(3000)

    const FstN=await page.locator('//input[@id="customer.firstName"]')
    await FstN.fill("           Rahul")
    const A=await FstN.inputValue()
    console.log(A)
   //  await  page.waitForTimeout(3000)

    const SndN =  await page.locator('//input[@id="customer.lastName"]')
    await SndN.fill("           Kumar")
    const B=await SndN.inputValue()
    console.log(B)
  //  await  page.waitForTimeout(3000)

    const Add = await page.locator('//input[@id="customer.address.street"]')
    await Add.fill("        20/5 - K.L Road")
    const C=await Add.inputValue()
    console.log(C) 
    //await  page.waitForTimeout(3000)

    const City = await page.locator('//input[@id="customer.address.city"]')
    await City.fill("       Tirupati")
    const D = await City.inputValue()
    console.log(D)
  //  await  page.waitForTimeout(3000)

    const ST = await page.locator('//input[@id="customer.address.state"]')
    await ST.fill("         Andhra Pradesh")
    const E = await ST.inputValue()
    console.log(E)
  //  await  page.waitForTimeout(3000)

    const PinN = await page.locator('//input[@id="customer.address.zipCode"]')
    await PinN.fill("   517501")
    const F = await PinN.inputValue()
    console.log(F)
 //   await  page.waitForTimeout(3000)

    const MB = await page.locator('//input[@id="customer.phoneNumber"]')
    await MB.fill("+91 123456789")
    const G = await MB.inputValue()
    console.log(G)
  //  await  page.waitForTimeout(3000)

    const SSN = await page.locator('//input[@id="customer.ssn"]')
    await SSN.fill('4568 15478 15420')
    const H =await SSN.inputValue()
    console.log(H)
  

    const CN =await page.locator('//input[@id="customer.username"]')
    await CN.fill("Rahul Kumar")
    const I = await CN.inputValue()
    console.log(I)
  //  await page.waitForTimeout(3000)

    const CNP = await page.locator('//input[@id="customer.password"]')
    await CNP.fill("Rahul@2003")
    const J=await CNP.inputValue()
    console.log(J)
  //  await page.waitForTimeout(3000)

    const CONP = await page.locator('//input[@id="repeatedPassword"]')
    await CONP.fill("Rahul@2003")
    const K = await CONP.inputValue()
    console.log(K)
})
