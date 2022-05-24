import axios from 'axios';
import React from 'react';

export default function logout() {
    axios.delete('/api/sessions').then(() => {
        // renderAppWithoutSession();
    });
}
