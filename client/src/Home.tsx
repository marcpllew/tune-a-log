import { useEffect, useState } from 'react';
import axios from "axios";
import { isMissingDeclaration } from 'typescript';
// import db from '../database/db';
// import Music from '../controllers/music';



function Home() {
  return (
    <div>Home</div>
  )
}
export default Home;


// const Home = () => {
//     const [musicList, setMusicList] = useState([]);
//     useEffect(() => {
//         axios
//             .get("/api/music")
//             .then((response: any) => response.data)
//             .then((data: any) => {
//                 setMusicList(data);
//             });
//     }, []);

//     return (
//         <div className="Home">
//             <header className="App-header">
//                 {/* <p> test 1,2,3: </p> */}
//                 <p>music: {musicList.map((music: any) => (
//                     <p>{music.artist_name}</p>
//                 ))} </p>
//                 {/* <p> {serverDate}</p>  */}
//                 <div className='content'>

//             </div>
//             </header>
//             </div>
//     )
// }



// export default Home;
