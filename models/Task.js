const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    title : {type : String, required : true},
    description : {type : String, required: true},
    dateEnd : {type: Date, required: true}
})

module.exports = model('Task', schema)