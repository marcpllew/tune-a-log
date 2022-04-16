import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";

const Search = () => {
    const [musicList, setMusicList] = useState([]);
    useEffect(() => {
        axios
            .get("/api/music")
            .then((response: any) => response.data)
            .then((data: any) => {
                setMusicList(data);
            });
    }, []);

    return (
        <div className="Home">
            <header className="App-header">
                {/* <p> test 1,2,3: </p> */}
                <p>music: {musicList.map((music: any) => (
                    <p>{music.artist_name}</p>
                ))} </p>
                {/* <p> {serverDate}</p>  */}
                <div className='content'>

            </div>
            </header>
            </div>
    )
}

export default Search;