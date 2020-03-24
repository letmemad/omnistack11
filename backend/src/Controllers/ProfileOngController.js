const connectToDb = require('../database/connect')
module.exports = {
    async index(req,res) {
        const incidents = await connectToDb.table('incidents').select('*').where('ong_id', req.ong.id)
        return res.json({ incidents })
    }
}