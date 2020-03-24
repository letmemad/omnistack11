const connectToDb = require('../database/connect')
module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader) return res.json({ error: "Não autorizado." })
    
    const ong = await connectToDb.table('ongs').select('*').where('id', authHeader).first()
    if(!ong) return res.json({ error: "Ong não existente" })

    req.ong = ong
    next()
}