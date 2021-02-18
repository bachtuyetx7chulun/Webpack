const express = require("express");
const app = express();

app.get('/', (req ,res, next) => {
    res.json({
        message: 'Hello !, Wellcome to API',
        success: true
    })
})

module.exports = app;
