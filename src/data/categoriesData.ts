import { icons } from "../utils/getCategoryIcon";

export type Category = {
  id: string;
  label: string;
  icon: string;
};
export const categories: Category[] = [
  { id: "food", label: "Food", icon: icons.food },
  { id: "entertainment", label: "Entertainment", icon: icons.entertainment },
  { id: "salary", label: "Salary", icon: icons.salary },
  { id: "transport", label: "Transport", icon: icons.transport },
];
