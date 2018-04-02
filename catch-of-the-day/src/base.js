import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDFicV4FziyY7Qj4YHS3aZd0Gif47rXmn0",
    authDomain: "wes-bos-react-michelle.firebaseapp.com",
    databaseURL: "https://wes-bos-react-michelle.firebaseio.com", 
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;