import { connectDataBase } from '@app/config/database';
import {app} from './app'

// Connecting to database
connectDataBase();

app.listen(process.env.PORT, () => {
    console.log(`The application is listening on port ${process.env.PORT}!`);
});
