import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
  removeToast: () => {},
});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration: number = 4200) => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const newToast: ToastItem = { id, message, type };
    setToasts((prev) => [...prev.slice(-3), newToast]); // Keep up to 4 most recent toasts stacked

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      {toasts.length > 0 && (
        <div className="toast toast-top toast-end z-50 p-4 flex flex-col gap-2.5 max-w-sm sm:max-w-md w-full pointer-events-none">
          {toasts.map((toast) => {
            const isSuccess = toast.type === 'success';
            const isError = toast.type === 'error';
            const isWarning = toast.type === 'warning';
            const isInfo = toast.type === 'info';

            const alertClass = isSuccess
              ? 'alert-success text-success-content'
              : isError
              ? 'alert-error text-error-content'
              : isWarning
              ? 'alert-warning text-warning-content'
              : 'alert-info text-info-content';

            return (
              <div
                key={toast.id}
                role="alert"
                className={`alert ${alertClass} shadow-2xl border border-base-content/10 flex items-center justify-between gap-3 py-3 px-4 rounded-2xl pointer-events-auto transition-all duration-200`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {isSuccess && <CheckCircle2 size={20} className="flex-shrink-0" />}
                  {isError && <AlertCircle size={20} className="flex-shrink-0" />}
                  {isWarning && <AlertTriangle size={20} className="flex-shrink-0" />}
                  {isInfo && <Info size={20} className="flex-shrink-0" />}
                  <span className="text-xs md:text-sm font-bold leading-snug break-words">
                    {toast.message}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeToast(toast.id)}
                  className="btn btn-ghost btn-xs btn-circle opacity-75 hover:opacity-100 flex-shrink-0"
                  aria-label="Dismiss toast"
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
