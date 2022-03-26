import { UserModelDocumentInterface } from "./User.model";
import { model, Schema } from "mongoose";

export interface MemeModelInterface {
  _id?: string;
  title: string;
  img: string;
  author: UserModelDocumentInterface;
  likes: UserModelDocumentInterface[];
  tags: string[];
  template: TemplateModelDocumentInterface;
}

export type MemeModelDocumentInterface = MemeModelInterface & Document;

const memeSchema = new Schema<MemeModelInterface>(
  {
    title: {
      required: true,
      type: String,
      maxlength: 280,
    },
    img: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [{ required: true, type: Schema.Types.ObjectId, ref: "User" }],
    tags: [{ type: String }],
    templateId: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "Template",
    },
  },
  { timestamps: true }
);

const Meme = model<MemeModelDocumentInterface>("Meme", memeSchema);

module.exports = Meme;
