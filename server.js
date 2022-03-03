const express = require('express')
const app = express()

const mailchimp = require('@mailchimp/mailchimp_marketing')

app.listen(3000,()=>{
    console.log('on port 3000')
})