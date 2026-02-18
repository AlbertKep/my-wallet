import entertainment from "../assets/icons/transactionIcons/entertainment.svg";
import food from "../assets/icons/transactionIcons/food.svg";
import salary from "../assets/icons/transactionIcons/salary.svg";
import transport from "../assets/icons/transactionIcons/transport.svg";
import unknown from "../assets/icons/transactionIcons/unknown.svg";

type Category = "food" | "entertainment" | "salary" | "transport";
const icons = { food, entertainment, salary, transport, unknown };
export const getCategoryIcon = (category: string) => icons[category as Category] ?? icons.unknown;
