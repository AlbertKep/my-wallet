import { Timestamp } from "firebase/firestore";

const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("pl-PL", {
  hour: "2-digit",
  minute: "numeric",
});
export const formatDate = (seconds: number) => {
  const date = new Date(seconds * 1000);
  return dateFormatter.format(date) ?? "-";
};

export const timestampToInputDate = (timestamp: Timestamp) => {
  if (!timestamp || !timestamp.seconds) return "";
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
};

export const timestampToHour = (seconds: number) => {
  const date = new Date(seconds * 1000);
  return timeFormatter.format(date) ?? "-";
};

export const inputDateToTimestamp = (dateString: string) => {
  const date = new Date(dateString);
  return Timestamp.fromDate(date);
};

export const getStartDate = (range: number = 7) => {
  const date = new Date();
  date.setDate(date.getDate() - range);
  return Math.floor(date.getTime() / 1000);
};
