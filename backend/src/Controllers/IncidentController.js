const connectToDb = require('../database/connect')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const incidents = await connectToDb.table('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ])

        const [count] = await connectToDb.table('incidents').count()
        res.header('X-Total-Count', count['count(*)'])
        return res.json({ incidents })
    },

    async show(req, res) {
        const { id } = req.params
        const incident = await connectToDb.table('incidents').select('*').where('id', id).first()
        return res.json({ incident })
    },

    async create(req, res) {
        const { title, description, value } = req.body;
        const [id] = await connectToDb.table('incidents').insert({
            ong_id: req.ong.id,
            title,
            description,
            value
        })

        return res.json({ id })
    },

    async delete(req, res) {
        const { id } = req.params;
        const incident = await connectToDb.table('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

        if(incident.ong_id != req.ong.id) return res.status(401).json({ error: "This incident isn't yours." })
        await connectToDb.table('incidents').where('id', id).delete()

        return res.json({ message: "Incident has been deleted!" })
    },
}