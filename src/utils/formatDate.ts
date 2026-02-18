const formatter = new Intl.DateTimeFormat("pl-PL", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "numeric",
});

export const formatDate = (seconds: number) => {
  const date = new Date(seconds * 1000);
  return formatter.format(date) ?? "-";
};
