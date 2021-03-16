//selector help to create web elements that i'm going to using
import {Selector, t, Role} from 'testcafe'
import {REGISTERS} from '../dataSauce/ConstantsSauce'
//Declare the rol specification


//create the class login page, iside the class i need the constructor, is no java
//is java script the constructor
class LoginSaucePage{
constructor(){
//inside constructor there are the web elements: this.'webelement'=selector('url of the webelement')
this.usernameLog = Selector('#user-name')
this.passwordLog = Selector('#password')
this.loginButton = Selector('#login-button')
this.errorIcon = Selector('#login_button_container h3')
//this.errorIcon = Selector('.error-button')
   }


   //functions
   async submitLoginSauce(username, password){
   await t.typeText(this.usernameLog,username)
   await t.typeText(this.passwordLog,password)
   await t.click(this.loginButton, {speed: 0.1})
   
      }


}

export default new LoginSaucePage()
//export the role specification
/*export const roleAdmin =  Role('https://www.saucedemo.com/', async t =>{
   await loginAdmin('standard_user', 'secret_sauce')
   //await loginAdmin('REGISTERS.VALID_USER.USERNAMESAUCE', 'REGISTERS.VALID_USER.PASSWORDSAUCE')
   
},{preserveUrl:true})*/