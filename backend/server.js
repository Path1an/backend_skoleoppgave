const app = require('./app');
require('dotenv').config();
const connectDB = require('./functions/dbConnect')

const port = process.env.PORT || 3000


const dbConnect = connectDB()

if (dbConnect) {
    console.log('Connected to databse!')
    app.listen(port, () => {
        console.log('Server running on port 3000')
    })
} else {
    console.log('Database connection failed!')
}