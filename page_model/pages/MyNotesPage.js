//selector help to create web elements that i'm going to using
import {Selector} from 'testcafe'

//create the class login page, iside the class i need the constructor, is no java
//is java script the constructor
class MyNotesPage{
constructor(){
//inside constructor there are the web elements: this.'webelement'=selector('url of the webelement')
this.pageTitle = Selector('#my-notes-page h2')
this.addNoteItemButton = Selector('.btn.btn-primary')
this.noteItem = Selector('.list-group-item')
   }
}

export default new MyNotesPage()