"use client";
import addNotification from "react-push-notification";
const page = () => {
  const Notification = () => {
    addNotification({
      title: "Code With Yd",
      message: "visit my channel",
      native: true,
    });
  };
  return (
    <div>
      <button onClick={Notification}>notify</button>
    </div>
  );
};
export default page;
