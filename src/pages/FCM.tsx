import React from 'react';
import { getMessaging, getToken } from "firebase/messaging";
import { Button } from '@mui/material';

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
    <div>
      FCM
      <Button
        onClick={ requestPermission }
      >
        Request Permission
      </Button>
    </div>
  )
}

export default FCM;