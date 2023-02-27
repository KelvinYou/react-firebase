# React Firebase

This is a simple React app that demonstrates how to connect to Firebase and perform CRUD (Create, Read, Update, Delete) operations. It includes login and registration with Google account, and the ability to create, edit, delete, and view todo items.

## Purpose

The purpose of this app is to show how to use React and Firebase to build a CRUD app with user authentication. By creating this app, we can learn how to:

- Connect a React app to Firebase
- Use Firebase Authentication to allow users to log in and register with Google
- Use Firebase Realtime Database to perform CRUD operations on data
- Build a simple UI with React that allows users to interact with the data

## Technologies Used

This app was built using the following technologies:

- React
- TypeScript
- Firebase

## Usage

To use this app, you will need to create a Firebase project and set up authentication and a Realtime Database. Once you have done this, you can clone the repository and create a `.env` file with your Firebase project configuration:

```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY_HERE
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN_HERE
REACT_APP_FIREBASE_DATABASE_URL=YOUR_DATABASE_URL_HERE
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID_HERE
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET_HERE
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID_HERE
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID_HERE
```


Once you have set up your Firebase project and created your `.env` file, you can run the following commands in your terminal:

```
npm install
npm start
```


This will install the required dependencies and start the app on `http://localhost:3000`.

## Contributing

If you would like to contribute to this project, feel free to submit a pull request or open an issue.

## Credits

This app was created by [Your Name]. Special thanks to the creators of React and Firebase for making this project possible.
