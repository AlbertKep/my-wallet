import { useState, useEffect } from "react";
import { Wrapper } from "./Toast.styled.ts";
import type { Toast as ToastType } from "react-hot-toast";

type ToastProps = {
  t: ToastType;
  message: string;
  icon?: string;
  variant?: "success" | "error" | "info";
};

const Toast: React.FC<ToastProps> = ({ t, message, icon }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Wrapper $mounted={mounted} $visible={t.visible}>
      <span>{message}</span>
      <img src={icon} alt='icon' width={50} height={50} />
    </Wrapper>
  );
};

export default Toast;
