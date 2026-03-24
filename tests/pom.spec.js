import{test}from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchHotel } from '../page/SearchHotel'
test('Page Object Model',async({page})=>{
    const login=new LoginPage(page)
    await login.gotoUrl()
    await login.enterUsername('BalajiYadav')
    await login.enterPassword('Balaji@5192')
    await login.clickLoginbtton()
    const search=new SearchHotel(page)
    await search.selectLocation()
})