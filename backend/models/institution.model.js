const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const institutionSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  courses: { type: [String], required: true },
  ranking: { type: Number, required: true },
  image: { type: String },
  description: { type: String },

});

const Institution = mongoose.model('Institution', institutionSchema);

module.exports = Institution;
