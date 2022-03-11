import mongoose, { Model, Schema } from "mongoose";
import { Entry, EntryStatusType } from "../interfaces";

export type IEntry = Entry & {};

const entrySchema = new Schema({
  description: String,
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: [
        EntryStatusType.pending,
        EntryStatusType.inProgress,
        EntryStatusType.finished,
      ],
      message: "{VALUE} no es un estado permitido",
    },
    default: EntryStatusType.pending,
  },
});

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
