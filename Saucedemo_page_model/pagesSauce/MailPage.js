import {Selector, t} from 'testcafe'

class MailPage{
    constructor(){
    //inside constructor there are the web elements: this.'webelement'=selector('url of the webelement')
    this.usermail = Selector('#first-name')
    this.lastname = Selector('#last-name')
    this.postal = Selector('#postal-code')
    this.continueButton = Selector('#checkout_info_container > div > form > div.checkout_buttons > input')
    this.errorIconMessage = Selector('#checkout_info_container > div > form > h3')
    
        }
       
    async submitUserInformation(firstname,lastname, postal){
        await t.typeText(this.usermail,firstname)
        await t.typeText(this.lastname,lastname)
        await t.typeText(this.postal,postal)
        await t.click(this.continueButton, {speed: 0.1})
        }
    
    async checkMailErrorFirstname(){
        await t.expect(this.errorIconMessage.exists).ok()
        await t.expect(this.errorIconMessage.innerText).eql('Error: First Name is required')
        }
    async checkMailErrorLastname(){
        await t.expect(this.errorIconMessage.exists).ok()
        await t.expect(this.errorIconMessage.innerText).eql('Error: Last Name is required')
        }   

    async checkMailErrorPostal(){
        await t.expect(this.errorIconMessage.exists).ok()
        await t.expect(this.errorIconMessage.innerText).eql('Error: Postal Code is required')
        }   
    }
    
    export default new MailPage()