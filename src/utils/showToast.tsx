import toast from "react-hot-toast";
import Toast from "../components/toast/Toast.tsx";
import type { Toast as ToastType } from "react-hot-toast";

export const showToast = (message: string, icon: string) => {
  toast.custom((t: ToastType) => <Toast t={t} message={message} icon={icon} />, { duration: 2000 });
};
