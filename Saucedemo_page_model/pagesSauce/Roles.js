import { Selector, t, Role } from 'testcafe'
const appUrl = 'https://www.saucedemo.com/'

export const roleAdmin =  Role('https://www.saucedemo.com/', async t =>{
   await loginAdmin('standard_user', 'secret_sauce')
   //await loginAdmin('REGISTERS.VALID_USER.USERNAMESAUCE', 'REGISTERS.VALID_USER.PASSWORDSAUCE')
   
},{preserveUrl:true})

async function loginAdmin(userName, password) {
    await t
          .typeText(Selector('#user-name'),userName)
          .typeText(Selector('#password'),password)
          .click(Selector('#login-button'))
}