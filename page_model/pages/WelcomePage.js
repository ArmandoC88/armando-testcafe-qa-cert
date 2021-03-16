//selector help to create web elements that i'm going to using
import {Selector} from 'testcafe'

//create the class welcome page, iside the class i need the constructor, is no java
//is javascript the constructor
class WelcomePage{
constructor(){
//inside constructor there are the web elements: this.'webelement'=selector('url of the webelement')
this.loginButton = Selector('.btn.btn-lg')
   }
}

//we need to create a export the object to use
export default new WelcomePage()