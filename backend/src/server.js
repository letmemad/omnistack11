const express = require('express')
const cors = require('cors')

// App Configuration's
const app = express()
app.use(express.json()) // To accepts json body
app.use(cors())

// Main Route
app.use('/api', require('./routes'))

// Initialize the app
app.listen(process.env.PORT || 3333, () => {
    console.log('SERVER STARTED.')
})