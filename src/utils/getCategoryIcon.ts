import entertainment from "../assets/icons/transactionIcons/entertainment.svg";
import food from "../assets/icons/transactionIcons/food.svg";
import salary from "../assets/icons/transactionIcons/salary.svg";
import transport from "../assets/icons/transactionIcons/transport.svg";
import health from "../assets/icons/transactionIcons/health.svg";
import bills from "../assets/icons/transactionIcons/bills.svg";
import other from "../assets/icons/transactionIcons/other.svg";
import unknown from "../assets/icons/transactionIcons/unknown.svg";

type Category = "food" | "entertainment" | "salary" | "transport" | "health" | "bills" | "other";
export const icons = { food, entertainment, salary, transport, health, bills, other, unknown };
export const getCategoryIcon = (category: string) => icons[category as Category] ?? icons.unknown;
