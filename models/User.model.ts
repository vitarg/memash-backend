import { Schema, model } from "mongoose";

export interface UserModelInterface {
  _id?: string;
  email: string;
  password: string;
}

export type UserModelDocumentInterface = UserModelInterface & Document;

const userSchema = new Schema<UserModelInterface>(
  {
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: String,
  },
  { timestamps: true }
);

const User = model<UserModelDocumentInterface>("User", userSchema);

module.exports = User;
