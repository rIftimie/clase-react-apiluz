// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD4m4_VAuq7TkKppKfsoR3mg66MdkQ3JUE',
	authDomain: 'precioluz-b0318.firebaseapp.com',
	projectId: 'precioluz-b0318',
	storageBucket: 'precioluz-b0318.appspot.com',
	messagingSenderId: '974768240060',
	appId: '1:974768240060:web:1bdcf9169159a69e4ce7b9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
