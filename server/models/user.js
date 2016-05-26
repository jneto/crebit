var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.model('User', new Schema({
    email: { type: String, required: 'Email is required.', unique: true },
    name: { type: String, required: 'Name is required.' },
    amount: { type: Number, required: 'Number is required.' }
}));

module.exports = UserSchema;
