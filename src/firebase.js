// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFPx5vVs_TMeqND2oCwFgxLsRfZffXefk",
  authDomain: "jun-funakawa-portfolio.firebaseapp.com",
  projectId: "jun-funakawa-portfolio",
  storageBucket: "jun-funakawa-portfolio.appspot.com",
  messagingSenderId: "495366852402",
  appId: "1:495366852402:web:372215c627dfa4d3bb512b",
  measurementId: "G-JCDNJ7CK3D",


    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Get a list of cities from your database
    async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
    }
