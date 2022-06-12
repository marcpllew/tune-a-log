import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export default function Logout() {
    axios.delete('/api/sessions').then(() => {
        // renderAppWithoutSession();
        <Link
            style={{
                color: 'grey',
            }}
            to='/login'></Link>;
    });
}
