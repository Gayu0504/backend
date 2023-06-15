const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    mobileno: {
        type: Number,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      pincode: {
        type: Number,
        required: true
      },
      city: {
        type: String,
        required: true
      },
  },
);

const Shipping = mongoose.model("shippings", schema);
module.exports = Shipping;
