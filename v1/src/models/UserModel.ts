import { Schema, model } from "mongoose";
import UserEntity from "../entities/UserEntity";

const UserScheme = new Schema<UserEntity>(
  {
    name: String,
    email: String,
    password: String,
    gsm: {
      type: String,
      unique: true,
    },
    user_type: {
      type: String,
      enum: ["SUPER_USER", "TENANT", "MEMBER"],
      default: "MEMBER",
    },
  },
  { versionKey: false, timestamps: true }
);

export default model<UserEntity>("users", UserScheme);
