import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBH0C2aHqmWBkZBAO8dRu2nbvRKIf9bLhs",
    authDomain: "test1-ef9ab",
    databaseURL: "ADD-YOUR-DETAILS-HERE"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();