
const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected .....😍')
    } catch (error) {
        console.log('DB Connection failed .....😔', error);
    }

}

module.exports = {dbConnect}