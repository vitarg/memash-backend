import { Schema, model } from "mongoose";
import { UserModelDocumentInterface } from "./User.model";

export interface TemplateModelInterface {
  _id?: string;
  title: string;
  img: string;
  likes: UserModelDocumentInterface[];
  tags: [{ type: String }];
}

export type TemplateModelDocumentInterface = TemplateModelInterface & Document;

const templateSchema = new Schema<TemplateModelInterface>(
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

const Template = model<TemplateModelDocumentInterface>(
  "Template",
  templateSchema
);

module.exports = Template;
