import { Entry } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";

export interface IEntry extends Entry {}

const EntrySchema = new Schema({
  description: { type: String, required: true },

  createdAt: { type: Number },

  status: {
    type: String,
    enum: {
      values: ["pending", "in-progress", "finished"],
      message: "{VALUE} no es un estado válido",
    },

    default: "pending",
  },
});

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", EntrySchema);

export default EntryModel;
