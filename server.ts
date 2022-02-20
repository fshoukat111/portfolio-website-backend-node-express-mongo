import 'module-alias/register';
import { connectDataBase } from '@app/config/database';
// const app = require("./app");
import {app} from './app'

// Connecting to database
connectDataBase();

app.listen(process.env.PORT || 3000, () => {
    console.log('The application is listening on port 3000!');
})