import bills from "../assets/icons/transactionIcons/bills.svg";
import entertainment from "../assets/icons/transactionIcons/entertainment.svg";
import food from "../assets/icons/transactionIcons/food.svg";
import health from "../assets/icons/transactionIcons/health.svg";
import other from "../assets/icons/transactionIcons/other.svg";
import salary from "../assets/icons/transactionIcons/salary.svg";
import transport from "../assets/icons/transactionIcons/transport.svg";
import unknown from "../assets/icons/transactionIcons/unknown.svg";

type Category = "food" | "entertainment" | "salary" | "transport" | "health" | "bills" | "other";
export const icons = { food, entertainment, salary, transport, health, bills, other, unknown };
export const getCategoryIcon = (category: string) => icons[category as Category] ?? icons.unknown;

const categoryColor = {
  food: "#FF9F43",
  entertainment: "#9B59B6",
  salary: "#2ECC71",
  transport: "#3498DB",
  health: "#E74C3C",
  bills: "#95A5A6",
  other: "#D4A373",
  unknown: "#7F8C8D",
};
export const getCategoryColor = (category: string) =>
  categoryColor[category as Category] ?? categoryColor.unknown;
