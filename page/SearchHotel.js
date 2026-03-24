export class SearchHotel{
    constructor(page){
        this.page=page;
        this.location=page.locator('//select[@id="location"]')

    }
    async selectLocation(){
        await this.location.selectOption({label:"London"})
        await this.page.waitForTimeout(3000)
    }
}