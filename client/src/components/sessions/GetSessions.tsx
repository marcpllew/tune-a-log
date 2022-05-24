import axios from 'axios';
import React from 'react';

export default function GetSessions() {
    return axios
        .get('/api/sessions')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log('Not logged in');
            return error;
        });
}
