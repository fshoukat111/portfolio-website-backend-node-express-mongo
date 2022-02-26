import 'module-alias/register';
import { connectDataBase } from '@app/config/database';
import {app} from './app'

// Connecting to database
connectDataBase();

app.listen(process.env.PORT || 3000, () => {
    console.log(`The application is listening on port ${process.env.PORT}!`);
});
