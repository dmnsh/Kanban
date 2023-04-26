const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    title : {type : String, required : true},
    description : {type : String},
    boards : [{type : Types.ObjectId, ref : 'Board'}]
})

module.exports = model('Workspace', schema)