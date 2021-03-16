//selector help to create web elements that i'm going to using
import {Selector, t} from 'testcafe'
//import role from '../testSauce/LoginSauce.test'

//create the class login page, iside the class i need the constructor, is no java
//is java script the constructor
class ProductPage{
constructor(){
//inside constructor there are the web elements: this.'webelement'=selector('url of the webelement')
this.pageHeader = Selector('#inventory_filter_container > div')
this.menuButton = Selector('#react-burger-menu-btn')
this.logoutButton = Selector('#logout_sidebar_link')

//items
this.firstItemAdd= Selector ('#inventory_container > div > div:nth-child(1) > div.pricebar > button')
this.Item2Add= Selector ('#inventory_container > div > div:nth-child(2) > div.pricebar > button')
this.Item3Add= Selector ('#inventory_container > div > div:nth-child(3) > div.pricebar > button')
this.Item4Add= Selector ('#inventory_container > div > div:nth-child(4) > div.pricebar > button')
this.Item5Add= Selector ('#inventory_container > div > div:nth-child(5) > div.pricebar > button')
this.Item6Add= Selector ('#inventory_container > div > div:nth-child(6) > div.pricebar > button')

   }

   async viewProductPageSauce(){
      await t.expect(this.pageHeader.exists).ok()
      await t.expect(this.pageHeader.innerText).eql('Products')
      }

   async clickProductPageLogout(){
      await t.click(this.menuButton, {speed : 0.1})
      await t.click(this.logoutButton, {speed : 0.1}) 
      }

   async clickProductPageAllItems(){
      await t.click(this.firstItemAdd, {speed : 0.1})
      await t.click(this.Item2Add, {speed : 0.1})
      await t.click(this.Item3Add, {speed : 0.1})
      await t.click(this.Item4Add, {speed : 0.1})
      await t.click(this.Item5Add, {speed : 0.1})
      await t.click(this.Item6Add, {speed : 0.1})
      }
}

export default new ProductPage()