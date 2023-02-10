const knex = require('../models/knex')
exports.getUser = (req, res, next) => {
    res.send({
        nama: 'Ikliliya',
        Alamat: 'Demak',
        Pekerjaan: 'Developer',
        Umur: 23
    })
}

exports.createUser = async (req, res, next) => {
    try{
        const payload = req.body

        if (!!payload === false){
            return res.status(400).send({
                message: `body is equired, cannot be empty`
            })
        }

        const insertData = await knex('users').insert({
            name: payload.name,
            email: payload.email
        })

        return res.status(201).send({
             message: 'success data created'
            }
        )
    } catch (error) {
        return res.status(500).send(error)
    }
}