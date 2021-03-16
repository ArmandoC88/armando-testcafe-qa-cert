import LoginSaucePage from '../pagesSauce/LoginSaucePage'
import ProductPage from '../pagesSauce/ProductPage'
import CartPage from '../pagesSauce/CartPage'
import MailPage from '../pagesSauce/MailPage'
import CheckoutPage from '../pagesSauce/CheckoutPage'
import {roleAdmin} from '../pagesSauce/Roles'
import { MAILFORM} from '../dataSauce/ConstantsSauce'

fixture('Main Page testing is the User Information to fill')
    .page `https://www.saucedemo.com/checkout-step-one.html ` 

    .beforeEach(async t =>{
        await t.click(LoginSaucePage.loginButton)
    }) 

test.skip('valid user, add all items, check it in user cart page, fill mail', async t => {
    //await LoginSaucePage.submitLoginSauce(REGISTERS.VALID_USER.USERNAMESAUCE, REGISTERS.VALID_USER.PASSWORDSAUCE)

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
    await CartPage.CounterCartIcon()
    //Fill the Mail 
    await t.click(CartPage.checkoutButton)
    await MailPage.submitUserInformation(MAILFORM.VALID_MAIL.FIRSTNAME, MAILFORM.VALID_MAIL.LASTNAME, MAILFORM.VALID_MAIL.POSTALCODE)
    //Validate the user navigates to the Overview pages
    await CheckoutPage.viewCheckout()
    })

test.skip('valid user, add all items, check it in user cart page, leave empty fill mail', async t => {
    //await LoginSaucePage.submitLoginSauce(REGISTERS.VALID_USER.USERNAMESAUCE, REGISTERS.VALID_USER.PASSWORDSAUCE)

    //User rol and activities
    await t
      //.openWindow('https://www.saucedemo.com/inventory.html').resizeWindow(1200, 800)
        .navigateTo('https://www.saucedemo.com/checkout-step-one.html')
        .useRole(roleAdmin)
    await ProductPage.viewProductPageSauce()
    //Choose all items
    //await ProductPage.clickProductPageAllItems()
    //Review the chosen items and count the items added to the cart page
    await CartPage.clickCartIcon()
    //await CartPage.CounterCartIcon()
    //Fill the mail 
    await t.click(CartPage.checkoutButton)
    await MailPage.submitUserInformation( MAILFORM.INVALID_MAIL.FIRSTNAME,MAILFORM.INVALID_MAIL.LASTNAME, MAILFORM.INVALID_MAIL.POSTALCODE)
    await MailPage.checkMailErrorFirstname()
    await MailPage.submitUserInformation( MAILFORM.VALID_MAIL.FIRSTNAME,MAILFORM.INVALID_MAIL.LASTNAME, MAILFORM.INVALID_MAIL.POSTALCODE)
    await MailPage.checkMailErrorLastname()
    await MailPage.submitUserInformation( MAILFORM.INVALID_MAIL.FIRSTNAME,MAILFORM.VALID_MAIL.LASTNAME, MAILFORM.INVALID_MAIL.POSTALCODE)
    await MailPage.checkMailErrorPostal()
    
     })