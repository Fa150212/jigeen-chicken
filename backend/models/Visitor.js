const mongoose = require("mongoose");

const visitorSchema =
  new mongoose.Schema(
    {
      ip: String,
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Visitor",
    visitorSchema
  );