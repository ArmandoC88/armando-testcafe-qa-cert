//Import the dotenv dependency
import dotenv from 'dotenv'
dotenv.config()
//require("dotenv").config()
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
export const CREDENTIALS = {
    VALID_USER: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.CODE
    },
    INVALID_USER:{
    USERNAME:'testuser@example.com',
    PASSWORD: 'test1234'
    }
}