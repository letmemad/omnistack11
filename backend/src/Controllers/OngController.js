const connectToDb = require('../database/connect')
const crypto = require('crypto')

module.exports = {
    async index(req, res) {
        const ongs = await connectToDb.table('ongs').select('*')
        return res.json({ ongs })
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id = crypto.randomBytes(5).toString('HEX')

        await connectToDb.table('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id })
    },
}