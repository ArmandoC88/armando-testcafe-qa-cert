//need to required the pages that we are using
// need the import word
import LoginSaucePage from '../pagesSauce/LoginSaucePage'
import ProductPage from '../pagesSauce/ProductPage'
import {roleAdmin} from '../pagesSauce/Roles'


//After i'm creating the Pages and test folders, NOTE: USE BRAKERS {} In the fields insede data folder
import {REGISTERS} from '../dataSauce/ConstantsSauce'
//my try to checkig as role
/*const role = Role('https://www.saucedemo.com/', async t =>{
    await LoginSaucePage.submitLoginSauce(REGISTERS.VALID_USER.USERNAMESAUCE, REGISTERS.VALID_USER.PASSWORDSAUCE)
    
},{preserveUrl:true})*/


//testcafe uses it's no required extra dependencies, just own dependencies for validations
//how to start use fixture('name of the test suit').page "the url in testing"
fixture('Login Sauce testing')
    .page `https://www.saucedemo.com/ ` 

 //to no repirt functions in test
.beforeEach(async t =>{
    await t.click(LoginSaucePage.loginButton)
   
    })    

//next step, create the test cases:test('the name of the test cases'), async t
//async testcaffe is async, and t is a testcontroler, allow to clear,send text,different elements

test.skip('Login with valid using and valid registers', async t => {

    //await LoginSaucePage.submitLoginSauce(REGISTERS.VALID_USER.USERNAMESAUCE, REGISTERS.VALID_USER.PASSWORDSAUCE)
    await t
        .navigateTo('https://www.saucedemo.com')
        .useRole(roleAdmin)
    
    await t.expect(ProductPage.pageHeader.exists).ok()
    await t.expect(ProductPage.pageHeader.innerText).eql('Products')
    
})

test.skip('Users cant login using invalid password', async t => {
    await t.openWindow('https://www.saucedemo.com')
    await LoginSaucePage.submitLoginSauce(REGISTERS.INVALID_USER.USERNAMESAUCE, REGISTERS.INVALID_USER.PASSWORDSAUCE)
   
    await t.expect(LoginSaucePage.errorIcon.exists).ok()
    await t.expect(LoginSaucePage.errorIcon.innerText).eql('Epic sadface: Username and password do not match any user in this service')

})