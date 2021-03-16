//selector help to create web elements that i'm going to using
import {Selector, t} from 'testcafe'

//create the class login page, iside the class i need the constructor, is no java
//is java script the constructor
class LoginPage{
constructor(){
//inside constructor there are the web elements: this.'webelement'=selector('url of the webelement')
this.usernameField = Selector('input[name="login.username"]')
this.passwordField = Selector('input[name="login.password"]')
this.loginButton = Selector('.btn-lg.btn-primary')
this.errorMessage = Selector('#login-error-message')
   }
//functions
async submitLoginForm(username, password){
   await t.typeText(this.usernameField,username)
   await t.typeText(this.passwordField,password)
   await t.click(this.loginButton)
   }

}

export default new LoginPage()
