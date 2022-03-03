const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path: path.join(__dirname, '.env')})

const mailchimp = require('@mailchimp/mailchimp_marketing')
mailchimp.setConfig({
    apiKey: process.env.APIKEY,
    server: process.env.SERVER,
})
// console.log(mailchimp.lists.addListMember)


// console.log(process.env.APIKEY , process.env.SERVER)

// async function callPing(){
//     const response = await mailchimp.ping.get()
//     console.log(response)
// }

// callPing()

async function run(){
    // const response = await mailchimp.lists.addListMember("e5b9698a8c", {
    //     email_address: "test@musit.com",
    //     status: "pending",
    //   });
    //   console.log(response);
    const response = await mailchimp.lists.getListMembersInfo("e5b9698a8c")
    console.log(response)
}


run();
app.listen(3001,()=>{
    console.log('on port 3001')
})