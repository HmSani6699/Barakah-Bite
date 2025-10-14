// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyCFPjED9VMO1JSuVpMLluj2Iry6mHDZ3Vo",
//   authDomain: "pfood-notification.firebaseapp.com",
//   projectId: "pfood-notification",
//   storageBucket: "pfood-notification.firebasestorage.app",
//   messagingSenderId: "319589584619",
//   appId: "1:319589584619:web:a385393d87e24e677638ae",
//   measurementId: "G-VVKRM425WJ",
// };

// const vapidKey =
//   "BFIeIUheHz2c3HI3XCfT-0pfPo99GaO9tC3qa8htLen9Q7O_SgEjxyNxc5o8qkV-jI-ioX7bGqQA7dtDbVOElwI";

// export const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

// export const requestFCMToken = async () => {
//   const permission = await Notification.requestPermission();
//   if (permission === "granted") {
//     const token = await getToken(messaging, { vapidKey: vapidKey });
//     return token;
//   } else {
//     throw new Error("Notification permission denied");
//   }
// };

// export const onReceiveMessage = (callback) => onMessage(messaging, callback);
