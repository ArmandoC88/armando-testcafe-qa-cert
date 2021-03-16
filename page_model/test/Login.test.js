//need to required the pages that we are using
// need the import word
import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'

//After i'm creating the Pages and test folders, NOTE: USE BRAKERS {} In the fields insede data folder
import {CREDENTIALS} from '../data/Constants'


//testcafe uses it's no required extra dependencies, just own dependencies for validations
//how to start use fixture('name of the test suit').page "the url in testing"
fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`

 //to no repirt functions in test
    .beforeEach(async t =>{
        await t.click(WelcomePage.loginButton)
    })   

//next step, create the test cases:test('the name of the test cases'), async t
//async testcaffe is async, and t is a testcontroler, allow to clear,send text,different elements

test.only('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME , CREDENTIALS.VALID_USER.PASSWORD)
    //await in order to framework appears
    /*await t
        
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)*/

    
    await t.expect(MyNotesPage.pageTitle.exists).ok()

})

//to execute in chrome, type the next on the terminal:
//testcafe chrome './page_model/test/Login.test.js'
//./page_model/test/Login.test.js

test('Users cant login using invalid password', async t => {
    //await in order to framework appears
    await t
        //.click(WelcomePage.loginButton)---> send to the fixture in.beforeEach

        //.typeText(LoginPage.usernameField,'testuser@example.com')
        //.typeText(LoginPage.passwordField,'test1234')
        .typeText(LoginPage.usernameField,CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql('The username or password are incorrect')

})