const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type : String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: { 
        type: String, 
        unique: true,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type:Date
    }
});

module.exports = mongoose.model('Admin', adminSchema);