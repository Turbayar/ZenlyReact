import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlVxMT6Sgeb4W0OBoPo9xlOWlHQspjxtA",
    authDomain: "zenly-50a93.firebaseapp.com",
    projectId: "zenly-50a93",
    storageBucket: "zenly-50a93.appspot.com",
    messagingSenderId: "454732830473",
    appId: "1:454732830473:web:79c51a86a5a845d2bf65d8"
  };

 const app = firebase.initializeApp(firebaseConfig);

 const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-btn', {
    size: 'invisible',
});

let confirmationResult;
document.querySelector('#login-btn').onclick = (e) => {
    const phone = document.querySelector('input.phone').value;
    const appVerifier = recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(`+976${phone}`, appVerifier).then((result) => {
        confirmationResult = result;
        console.log(confirmationResult)
    }).catch((error) => {
        console.log(error);
    });
}

document.querySelector('#verify-btn').onclick = () => {
    const code = document.querySelector('input.verify-code').value;

    confirmationResult.confirm(code).then((result) => {
        console.log(result.user.phoneNumber, 'utasnii dugaartai hun amjilttai newterlee');

        location.replace('index.html');
    }).catch((error) => {
        console.log('Code aldaatai bna')
    });
}

 export const db = firebase.firestore();