import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDZPBo8WR0jgkZECmBdg5FSIBeMn_Pm_7I",
    authDomain: "netflix-clone-27942.firebaseapp.com",
    projectId: "netflix-clone-27942",
    storageBucket: "netflix-clone-27942.appspot.com",
    messagingSenderId: "570613061969",
    appId: "1:570613061969:web:4aed3714fbac3c091c9b70"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;