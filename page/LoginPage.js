export class LoginPage{
    constructor(page){
        this.page=page;
        this.username=page.locator('//input[@id="username"]')
        this.password=page.locator('//input[@name="password"]')
        this.loginbutton=page.locator('//input[@id="login"]')
    

    }
    async gotoUrl(){
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUsername(uname){
        await this.username.fill(uname)
    }
    async enterPassword(pass){
        await this.password.fill(pass)
    }
    async clickLoginbtton(){
        await this.loginbutton.click()
    }
}