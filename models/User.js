const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
);

const User = mongoose.model("users", schema);
module.exports = User;
