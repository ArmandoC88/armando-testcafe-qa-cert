import {Selector, t} from 'testcafe'

class CheckoutPage{
    constructor(){
    //inside constructor there are the web elements: this.'webelement'=selector('url of the webelement')
    this.checkoutTextHeader = Selector('#contents_wrapper > div.subheader')
    this.finishButton = Selector('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button')
    
    //Chosen First Item
    this.firstItemAdded= Selector('#item_4_title_link > div')
    this.Item6Added= Selector('#item_3_title_link > div')
    this.overviewlistItem = Selector('#checkout_summary_container > div > div.cart_list > div.cart_item')
    //purchasen ok, review confirmation message
    this.purchasenMessage = Selector('#checkout_complete_container > h2')
    
       }
       
       async CounterOverviewItems(){
            
            await t.expect(this.overviewlistItem.count).eql(6)
            //compare first and last items name
            await t.expect(this.firstItemAdded.exists,{speed : 0.1}).ok()
            await t.expect(this.firstItemAdded.innerText).eql('Sauce Labs Backpack')
            await t.expect(this.Item6Added.exists,{speed : 0.1}).ok()
            await t.expect(this.Item6Added.innerText).eql('Test.allTheThings() T-Shirt (Red)')
        }

        async viewCheckout(){
            await t.expect(this.checkoutTextHeader.exists).ok()
            await t.expect(this.checkoutTextHeader.innerText).eql('Checkout: Overview')
            }

        
    }
    
    export default new CheckoutPage()