import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type musicType = {
    id: number;
    artist_name: string;
    style: string;
    miscellaneous: string;
};
export default function SearchInfo() {
    const params = useParams();
    const [music, setMusic] = useState<musicType | null>(null);
    const [artistId, setArtistId] = useState('');

    useEffect(() => {
        axios.get(`/api/music/${params.id}`).then((response) => {
            setMusic(response.data);
        });
    }, [params.id]);
    console.log(params);

    return (
        <div>
            {music ? (
                <div>
                    <React.Fragment>
                        <CardContent>
                            <Typography
                                sx={{ mb: 1.5 }}
                                variant='h5'
                                component='div'>
                                Artist: {music.artist_name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                                Style: {music.style}
                            </Typography>
                            <Typography variant='body2'>
                                Extra info: {music.miscellaneous}
                                <br />
                            </Typography>
                        </CardContent>
                    </React.Fragment>
                </div>
            ) : (
                <div>Something</div>
            )}
        </div>
    );
}
{
    /* <p>{music.id}</p>
                    <p>{music.artist_name}</p>
                    <p>{music.style}</p>
                    <p>{music.miscellaneous}</p> */
}
