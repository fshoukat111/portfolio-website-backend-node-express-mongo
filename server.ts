import express from 'express';
import 'module-alias/register';
import { connectDataBase } from '@app/config/database';
const app = require("./app")
// app.get('/', (req, res) => {
//     res.send('Well done!');
// })


// Connecting to database
connectDataBase();

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})