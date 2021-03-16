import LoginSaucePage from '../pagesSauce/LoginSaucePage'
import ProductPage from '../pagesSauce/ProductPage'
import CartPage from '../pagesSauce/CartPage'
import MailPage from '../pagesSauce/MailPage'
import CheckoutPage from '../pagesSauce/CheckoutPage'
import {roleAdmin} from '../pagesSauce/Roles'
import { MAILFORM} from '../dataSauce/ConstantsSauce'

fixture('Main Page testing')
    .page `https://www.saucedemo.com/checkout-step-one.html ` 

    .beforeEach(async t =>{
        await t.click(LoginSaucePage.loginButton)
    }) 

test('valid user, add all items, check it in user cart page, fill mail', async t => {
    
    //User rol and activities
    await t
    .openWindow('https://www.saucedemo.com/inventory.html').resizeWindow(1200, 800)
     //.navigateTo('https://www.saucedemo.com/inventory.html')
    .useRole(roleAdmin)
     
    await ProductPage.viewProductPageSauce()
    //Choose all items
    await ProductPage.clickProductPageAllItems()
    //Review the chosen items and count the items added to the cart page*/
    await CartPage.clickCartIcon()
    //await CartPage.CounterCartIcon()
    //Fill the Mail 
    await t.click(CartPage.checkoutButton)
    await MailPage.submitUserInformation(MAILFORM.VALID_MAIL.FIRSTNAME, MAILFORM.VALID_MAIL.LASTNAME, MAILFORM.VALID_MAIL.POSTALCODE)
    //Validate the user navigates to the Overview pages
    await CheckoutPage.viewCheckout()
    //validate Items in Overview Page match with added Itemss
    await CheckoutPage.CounterOverviewItems()
    await t.click(CheckoutPage.finishButton, {speed : 0.1})
    await t.expect(CheckoutPage.purchasenMessage.exists,{speed : 0.1}).ok()
    await t.expect(CheckoutPage.purchasenMessage.innerText).eql('THANK YOU FOR YOUR ORDER')
        })