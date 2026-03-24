export class Singpage{

    constructor(page){
        this.page=page
        this.UserName=page.locator('//input[@name="username"]')
        this.UserPassword=page.locator('//input[@id="password"]')
        this.ClickButton=page.locator('//input[@id="login"]')
    }
    async VisitUrl(){
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async HolderName(Uname){
        await this.UserName.fill(Uname)
    }
    async Password(Pw){
        await this.UserPassword.fill(Pw)
    }
    async LoginButton(){
        await this.ClickButton.click()
    }

}