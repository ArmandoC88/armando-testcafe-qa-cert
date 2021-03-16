//selector help to create web elements that i'm going to using
import {Selector, t} from 'testcafe'

//create the class login page, iside the class i need the constructor, is no java
//is java script the constructor
class CartPage{
constructor(){
//inside constructor there are the web elements: this.'webelement'=selector('url of the webelement')
this.cartIcon = Selector('#shopping_cart_container > a > svg')
this.cartTextHeader = Selector('#contents_wrapper > div.subheader')
this.continueShoppingButton = Selector('#cart_contents_container > div > div.cart_footer > a.btn_secondary')

//Chosen First Item
this.firstItemAdded= Selector('#item_4_title_link > div')
/*this.Item2Added= Selector('#item_0_title_link > div')
this.Item3Added= Selector('#item_1_title_link > div')
this.Item4Added= Selector('#item_5_title_link > div')
this.Item5Added= Selector('#item_2_title_link > div')
this.Item6Added= Selector('#item_3_title_link > div')*/
this.counterItem= Selector('#shopping_cart_container > a > span')
this.listItem = Selector('#cart_contents_container > div > div.cart_list > div.cart_item')
this.checkoutButton = Selector('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button')

   }
   
    async clickCartIcon(){
        await t.click(this.cartIcon, {speed : 0.1})
        await t.expect(this.cartTextHeader.exists,{speed : 0.1}).ok()
        await t.expect(this.cartTextHeader.innerText).eql('Your Cart')
        }

    async CounterCartIcon(){
        await t.expect(this.counterItem.exists, {speed : 0.1}).ok()
        await t.expect(this.counterItem.innerText).eql('6')
        await t.expect(this.listItem.count).eql(6)
        }
        
    async checkfirstItem(){
        await t.expect(this.firstItemAdded.exists,{speed : 0.1}).ok()
        await t.expect(this.firstItemAdded.innerText).eql('Sauce Labs Backpack')
        }
    
}

export default new CartPage()