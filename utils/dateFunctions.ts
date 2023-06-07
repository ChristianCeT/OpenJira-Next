import { formatDistanceToNow } from "date-fns";

export const getFormantDistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date, { addSuffix: true });
  return fromNow;
};
