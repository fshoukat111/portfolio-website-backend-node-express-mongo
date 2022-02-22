const mongoose = require('mongoose');
const db = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
const connectDataBase = () => {
    mongoose.connect(db , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data: any) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
}
export {
    mongoose,
    connectDataBase
}