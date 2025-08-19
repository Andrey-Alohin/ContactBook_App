import toast from "react-hot-toast";

export type Tnotify = {
  loading: (message?: string) => void;
  success: (message: string) => void;
  error: (message: string) => void;
};

export function notify(id: string): Tnotify {
  return {
    loading: (message: string = "Please wait...") =>
      toast.loading(message, { id }),
    success: (message: string) => toast.success(message, { id }),
    error: (message: string) => toast.error(message, { id }),
  };
}
