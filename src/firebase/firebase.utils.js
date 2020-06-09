import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: "AIzaSyCx-5cLkAuhM-KZSj9W80s18jg0Jr1dwpc",
	authDomain: "crwn-db-e3e41.firebaseapp.com",
	databaseURL: "https://crwn-db-e3e41.firebaseio.com",
	projectId: "crwn-db-e3e41",
	storageBucket: "crwn-db-e3e41.appspot.com",
	messagingSenderId: "50854554248",
	appId: "1:50854554248:web:4ac62357dbf933f408cd3d",
	measurementId: "G-HRXZ5EJ318"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;