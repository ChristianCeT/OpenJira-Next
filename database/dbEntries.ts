import { isValidObjectId } from "mongoose";
import { db } from ".";
import { Entry, IEntry } from "@/models";

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  /* Es utilizado cuando se trabaja con menos de información : lean() */
  const entry = await Entry.findById(id).lean();
  await db.disconnect();

  /* Serializar la entry */
  return JSON.parse(JSON.stringify(entry));
};
