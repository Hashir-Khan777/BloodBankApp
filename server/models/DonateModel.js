const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonateSchema = new Schema(
  {
    age: {
      type: String,
      required: ['Age is required', true],
    },
    country: {
      type: String,
      required: ['Country Number is required', true],
    },
    city: {
      type: String,
      required: ['City is required', true],
    },
    address: {
      type: String,
      required: ['Address is required', true],
    },
    postalcode: {
      type: String,
      required: ['Postal Code is required', true],
    },
    bloodtype: {
      type: String,
      required: ['Blood Type is required', true],
    },
  },
  {
    timestamps: true,
  },
);

const Donate = mongoose.model('Donations', DonateSchema);

module.exports = Donate;
