import {test} from '@playwright/test'
import { Singpage } from '../page/Singpage'
import { SearchHo } from '../page/SearchHo'

test('Sing Page',async({page}) => {

    //Login Page
    const UserLogin = new Singpage(page)
    await UserLogin.VisitUrl()
    await UserLogin.HolderName("BalajiYadav")
    await UserLogin.Password("Balaji@5192")
    await UserLogin.LoginButton()
    
    // Searching Page
    const SA = new SearchHo(page)
    await SA.Hotel()
    await SA.Hotelaname()
    await SA.Room()
    await SA.Countofroom()
    await SA.Checkin()
    await SA.Checkin()
    await SA.Tenage()
    await SA.kids()
    await SA.Submit()



})