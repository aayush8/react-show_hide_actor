import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Actor from './Actor.js';


function App() {

  const [seeActor, setseeActor] = useState(true);
  const [btnName, setbtnName] = useState("Hide Actors");

  const [actor, setActor] = useState([
    {name: "Allu Arjun", url: "https://i.pinimg.com/236x/70/b3/1a/70b31afe7b5fc7803bf650d74adf5a5e.jpg"},
    {name: "Prabhas", url: "https://gossipgist.com/uploads/27282/prabhas-englishtupaki.jpg"},
    {name: "Mahesh Babu", url: "https://cdn.telanganatoday.com/wp-content/uploads/2020/04/MAHESH.jpg"},
    {name: "Jr NTR", url: "https://cdn.pinkvilla.com/files/styles/contentpreview/public/jr-ntr-thalaivi.jpg?itok=jL7S6xwU"},
    {name: "Ram Charan", url: "https://m.media-amazon.com/images/M/MV5BZDhiZGNhMjUtZmE2ZC00M2ZkLTg3NjQtODYyNDkxOTg5MzRhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzAyNDE1Mzk@._V1_.jpg"},
    {name: "Nithin", url: "https://english.mathrubhumi.com/polopoly_fs/1.4533651.1581845984!/image/image.JPG_gen/derivatives/landscape_894_577/image.JPG"},
    {name: "Rashmika Mandana", url:"https://www.deccanherald.com/sites/dh/files/article_images/2020/04/05/Rashmika-1586069005.jpg"}
  ]);

  const toggleActor = () => {
    if(btnName==="Hide Actors") {
      setbtnName("Show Actors");
      setseeActor(false);
    }
    if(btnName==="Show Actors") {
      setbtnName("Hide Actors");
      setseeActor(true);
    }
  }

  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to the react app</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className="btn-primary btn-lg" onClick={toggleActor}>{btnName}</button>
      </div>
      <div className={seeActor? "row": "d-none"}>
        {actor.map(actor =>(
          <Actor actor={actor}/>
        ))}
      </div>
    </div>
  );
}

export default App;
