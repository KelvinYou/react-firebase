import React from 'react';
import { getMessaging, getToken } from "firebase/messaging";

const FCM = () => {
  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    })
  };

  return (
    <div>FCM</div>
  )
}

export default FCM;