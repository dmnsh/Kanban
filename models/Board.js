const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    title : {type : String, required : true},
    description : {type : String},
    panels : [{type : Types.ObjectId, ref : 'Panel'}]
})

module.exports = model('Board', schema)