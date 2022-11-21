// Note model handler 
const mongoose = require('mongoose')

// to implement de sequence id for each note
const AutoIncrement = require('mongoose-sequence')(mongoose)

const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        fef: 'User'
    },
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true
}
)

// create an ticket field into noteSchema. each note will hava a tiket number
notesSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 5000
})

module.exports = mongoose.model("Note", notesSchema)