import LoginSaucePage from '../pagesSauce/LoginSaucePage'
import ProductPage from '../pagesSauce/ProductPage'
//import {Role} from 'testcafe'
import {roleAdmin} from '../pagesSauce/Roles'


//import {REGISTERS} from '../dataSauce/ConstantsSauce'


//
fixture('Product Sauce testing')
    //.page `https://www.saucedemo.com/ `
    .page `https://www.saucedemo.com/inventory.html`

//to no repirt functions in test
.beforeEach(async t =>{
    await t.click(LoginSaucePage.loginButton)
   
})  

test.skip('Login with valid user,password and Logout',async t => {
    //await LoginSaucePage.submitLoginSauce(REGISTERS.VALID_USER.USERNAMESAUCE, REGISTERS.VALID_USER.PASSWORDSAUCE)
    await t
    .navigateTo('https://www.saucedemo.com/inventory.html')
    .useRole(roleAdmin)

    await ProductPage.viewProductPageSauce()
    //logout from Product session
    await ProductPage.clickProductPageLogout()
   
})

