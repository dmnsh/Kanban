const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    title : {type : String, required : true},
    tasks : [{type : Types.ObjectId, ref : 'Task'}]
})

module.exports = model('Panel', schema)