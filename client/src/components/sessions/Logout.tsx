import axios from 'axios';
import React from 'react';

export default function Logout() {
    axios.delete('/api/sessions').then(() => {
        // renderAppWithoutSession();
    });
}
