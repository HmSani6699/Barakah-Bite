import { createContext, useContext, useState, useEffect } from "react";
import { onMessage } from "firebase/messaging";
import { messaging } from "../Utils/firebaseUtils";
import { Bounce, toast } from "react-toastify";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      const { title, body } = payload.notification;

      // toast message দেখাও
      toast.success("✅ New order Loaded", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      // count বাড়াও
      setNotificationCount((prev) => prev + 1);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notificationCount, setNotificationCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
