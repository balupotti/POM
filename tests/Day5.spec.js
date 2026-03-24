
import{ test , expect} from '@playwright/test'

test( ' Test Case' , async ({page}) => {

await page.goto('https://demo.automationtesting.in/Register.html' )

await page.locator('(//input[@type="text"])[1]').fill("Raja")

await page.locator('(//input[@ng-model="LastName"])[1]').fill("Saab")

await page.locator('//textarea[@ng-model="Adress"]').fill("Velachary, Chennai City")

await page.locator('//input[@ng-model="EmailAdress"]').fill('Rajasaab@gmail.com')

await page.locator('//input[@ng-model="Phone"]').fill("123456789")

await page.locator('//input[@value="Male"]').check()

await page.locator('//input[@id="checkbox2"]').check()

await page.locator('#msdd').click();
await page.getByText('English', { exact: true }).click();

await page.locator('.select2-selection--single').first().click({ force: true });

await page.locator('//input[@class="select2-search__field"]').fill('India')

await page.locator('//li[text()="India"]').click()


})