import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
    },
    mobileNumber:{
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    profilePicture: {
      data:Buffer,
      contentType:String
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
