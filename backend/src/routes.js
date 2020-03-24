const router = require('express').Router()

// Controller's
const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController')
const ProfileOngController = require('./Controllers/ProfileOngController')
const SessionController = require('./Controllers/SessionController')

// Middleware's
const isAuthenticated = require('./Middlewares/isAuthenticated')

// Routes
    router.post('/session', SessionController.create) // Sign in with the ID

    router.get('/ongs', OngController.index)
    router.post('/ongs', OngController.create)
    // List incidents of a specific Ong
    router.get('/profile', isAuthenticated, ProfileOngController.index)

    // Inicidents routes
    router.get('/incidents', IncidentController.index)
    router.get('/incident/:id', IncidentController.show)
    router.post('/incidents', isAuthenticated, IncidentController.create)
    router.delete('/incident/:id', isAuthenticated, IncidentController.delete)
module.exports = router