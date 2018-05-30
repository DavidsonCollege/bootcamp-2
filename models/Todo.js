var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      maxLength: 100,
      required: [true, "can't be blank"]
    },
    completedOn: {
      type: Date,
      required : [true, "can't be blank"]
    },

    createdOn: {
      type: Date,
      required : [true, "can't be blank"]
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "can't be blank"]
    }
  },
);

mongoose.model("Todo", UserSchema);
