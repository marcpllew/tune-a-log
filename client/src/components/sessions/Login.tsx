import axios from 'axios';
import React from 'react';

export default function login() {
    return <div>login</div>;
}

// export default function Login() {
//     const form = document.getElementById('login');
//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         clearErrors();

//         const usernameField = document.querySelector('input[name=username]');
//         const passwordField = document.querySelector('input[name=password]');
//         const body = {
//             username: usernameField.value,
//             password: passwordField.value,
//         };

//         let error = null;
//         if (body.username === '') {
//             error = 'Username is required';
//         } else if (body.password === '') {
//             error = 'Password is required';
//         }

//         if (!error) {
//             axios
//                 .post('/api/sessions', body)
//                 .then((response) => {
//                     renderAppWithSession();
//                 })
//                 .catch((error) => {
//                     console.log(`There was an error ${error.response}`);
//                     displayError(error.response.data.message);
//                 });
//         } else {
//             displayError(error);
//         }
//     });
// }
