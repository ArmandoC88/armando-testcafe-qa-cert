import LoginSaucePage from '../pagesSauce/LoginSaucePage'
import ProductPage from '../pagesSauce/ProductPage'
import CartPage from '../pagesSauce/CartPage'
import {roleAdmin} from '../pagesSauce/Roles'
//import {REGISTERS} from '../dataSauce/ConstantsSauce'
//import  ITEMS  from '../dataSauce/ConstantsSauce'

fixture('Cart Page testing')
    .page `https://www.saucedemo.com/inventory.html ` 

//to no repirt functions in test
.beforeEach(async t =>{
    await t.click(LoginSaucePage.loginButton)
})   

test.skip('valid user, check his cart page, continue shopping and add 1 item', async t => {
    //await LoginSaucePage.submitLoginSauce(REGISTERS.VALID_USER.USERNAMESAUCE, REGISTERS.VALID_USER.PASSWORDSAUCE)
    
    //User rol and activities
    await t
    .openWindow('https://www.saucedemo.com/inventory.html').resizeWindow(1200, 800)
    //.navigateTo('https://www.saucedemo.com/inventory.html')
    .useRole(roleAdmin)

    await ProductPage.viewProductPageSauce()
    await CartPage.clickCartIcon()
    await t.click(CartPage.continueShoppingButton,{speed : 0.1})
    //return to the Product Page and select one item
    await ProductPage.viewProductPageSauce()
    await t.click(ProductPage.firstItemAdd, {speed : 0.1})
    await CartPage.clickCartIcon()//check the Cart Page again
    //Compare the text of the Item chosen vs Expect Item also number of  items added
    await CartPage.checkfirstItem()
    await t.expect(CartPage.listItem.count).eql(1)

    await t.click(CartPage.continueShoppingButton,{speed : 0.1})
        
   
})

test.skip('valid user, add all items, and check it in user cart page', async t => {
    
   // await LoginSaucePage.submitLoginSauce(REGISTERS.VALID_USER.USERNAMESAUCE, REGISTERS.VALID_USER.PASSWORDSAUCE)
   //await t.click(CartPage.continueShoppingButton,{speed : 0.1})

   //role and actions in this test
    await t
   .navigateTo('https://www.saucedemo.com/inventory.html')
   .useRole(roleAdmin)
    await ProductPage.viewProductPageSauce()
    //Choose all items
    await ProductPage.clickProductPageAllItems()
    //Review the chosen items and count the items added to the cart page
    await CartPage.clickCartIcon()
    await CartPage.CounterCartIcon()

})

