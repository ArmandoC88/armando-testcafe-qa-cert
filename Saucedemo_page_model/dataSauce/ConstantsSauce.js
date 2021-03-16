//Import the dotenv dependency
import dotenv from 'dotenv'
dotenv.config()

//create variables to export
//javascrip no use debugs, use const and end
/*export const CREDENTIALS = {
    VALID_USER: {
    USERNAME:'testuser@example.com',
    PASSWORD: 'test123'
    },
    INVALID_USER:{
    USERNAME:'testuser@example.com',
    PASSWORD: 'test123'
    }
}*/
//reemplacing credencials with dotenv
export const REGISTERS = {
    VALID_USER: {
    USERNAMESAUCE: process.env.USERNAMESAUCEV,
    PASSWORDSAUCE: process.env.CODESAUCEV
    },
    INVALID_USER:{
    USERNAMESAUCE: process.env.USERNAMESAUCEI,
    PASSWORDSAUCE: process.env.CODESAUCEI
    }
}

export const MAILFORM = {
    VALID_MAIL: {
    FIRSTNAME: process.env.CFIRSTNAME,
    LASTNAME: process.env.CLASTNAME,
    POSTALCODE: process.env.CPOSTAL
    },
    INVALID_MAIL:{
    FIRSTNAME:'\n',
    LASTNAME: '\n',
    POSTALCODE:'\n'
    }
}