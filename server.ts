import { connectDataBase } from '@app/config/database';
import {app} from './app';

// Connecting to database
connectDataBase();

app.listen(process.env.PORT || 3000, () => {});
