
export class SearchHo{
    constructor(page){
        this.page=page
        this.Hotelsearching=page.locator('//select[@id="location"]')
        this.HotelSelect=page.locator('//select[@id="hotels"]')
        this.Typeofroom=page.locator('//select[@id="room_type"]')
        this.numberOFroom=page.locator('//select[@id="room_nos"]')
        this.inDate=page.locator('//input[@id="datepick_in"]')
        this.EndDate=page.locator('//input[@id="datepick_out"]')
        this.About=page.locator('//select[@id="adult_room"]')
        this.Child=page.locator('//select[@id="child_room"]')
        this.button=page.locator('//input[@id="Submit"]')

}

    async Hotel(){
        await this.Hotelsearching.selectOption({label:"Sydney"})
    }
    async Hotelaname(){
        await this.HotelSelect.selectOption({label:"Hotel Cornice"})
    }
    async Room(){
        await this.Typeofroom.selectOption({label:"Super Deluxe"})
    }
    async Countofroom(){
        await this.numberOFroom.selectOption({label:"2 - Two"})
    }
    async Checkin(){
        await this.inDate.fill("26-03-2026")
    }
    async Checkout(){
        await this.EndDate.fill("28-03-2026")
    }
    async Tenage(){
        await this.About.selectOption({label:"2 - Two"})
    }
    async kids(){
        await this.Child.selectOption({label:"2 - Two"})
    }
    async Submit(){
        await this.button.click()
    }

}