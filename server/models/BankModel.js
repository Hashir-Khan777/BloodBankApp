const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankSchema = new Schema(
  {
    CompanyName: {
      type: String,
      required: ['Name is required', true],
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
    number: {
      type: Number,
      required: ['Mobile Number is required', true],
    },
  },
  {
    timestamps: true,
  },
);

const Bank = mongoose.model('Banks', BankSchema);

module.exports = Bank;
