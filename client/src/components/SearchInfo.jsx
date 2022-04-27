import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SearchInfo() {
    const params = useParams();
    //  const [musicList, setMusicList] = useState<any[]>([]);
    const [music, setMusic] = useState(null);
    const [artistId, setArtistId] = useState('');

    // const [searchStyle, setSearchStyle] = useState('');
    // const [searchMiscellaneous, setSearchMiscellaneous] = useState('');

    // const SearchInfoDb = () => {
    useEffect(() => {
        axios
            .get(
                `/api/music/${params.id}`
                // `/api/music?id=${params.id}&artist_name=${params.artist_name}`

                // `/api/music?id=${params.id}&artist_name=${params.artist_name}&style=${params.style}&miscellaneous=${params.miscellaneous}`
            )
            .then((response) => {
                setMusic(response.data);
            });
    }, [params.id]);
    console.log(params);

    return (
        <div>
            {music ? (
                <div>
                    <p>{music.id}</p>
                    <p>{music.artist_name}</p>
                    <p>{music.style}</p>
                    <p>{music.miscellaneous}</p>
                </div>
            ) : (
                <div>Something</div>
            )}
        </div>
    );
    // };
}

// axios
//     .get(
//         `/api/music?id=${music.id}&style=${searchStyle}&artist_name=${searchArtist}&miscellaneous=${searchMiscellaneous}`
//     )
//     .then((response) => response.data)
//     .then((data) => {
//         setMusicList(data);
//     });
