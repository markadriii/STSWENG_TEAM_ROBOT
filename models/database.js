const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Account = require('./account.js')
const Bookings = require('./bookings.js')
const Dates = require('./dates.js')

dotenv.config()
const DB_URL = process.env.DB_URL


// additional connection options
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const database = {

    connect: function() {
        mongoose.connect(DB_URL, options, async function(error) {
            if(error) throw error
            console.log('Connected to database')
        })
    },

    // mongoose account model
    Account,

    Bookings,

    Dates

}

module.exports = database