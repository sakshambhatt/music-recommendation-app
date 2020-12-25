import React, { useState } from "react";
import "./styles.css";

var rockSongs = [
  <iframe
    title="Paint it, Black by The Rolling Stones"
    src="https://open.spotify.com/embed/track/63T7DJ1AFDD6Bn8VzG6JE8"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>,
  <iframe
    title="Even Flow by Pearl Jam"
    src="https://open.spotify.com/embed/track/6QewNVIDKdSl8Y3ycuHIei"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>,
  <iframe
    title="Back in Black by AC/DC"
    src="https://open.spotify.com/embed/track/08mG3Y1vljYA6bvDt4Wqkj"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
];

var rapSongs = [
  <iframe
    title="Rap God by Eminem"
    src="https://open.spotify.com/embed/track/6or1bKJiZ06IlK0vFvY75k"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>,
  <iframe
    title="DNA. by Kendrick Lamar"
    src="https://open.spotify.com/embed/track/6HZILIRieu8S0iqY8kIKhj"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>,
  <iframe
    title="All eyez on me by 2pac"
    src="https://open.spotify.com/embed/album/1Mdy7hhoQRYdVrHzYnlUee"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
];

var choirSongs = [
  <iframe
    title="God of War by Bear McCreary"
    src="https://open.spotify.com/embed/track/6ZMwwuUOx8kefl32gWOjtY"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>,
  <iframe
    title="1812 Overture by Pyotr Ilyich Tchaikovsky"
    src="https://open.spotify.com/embed/track/6oWacAPUt8LMXqRkEk2MNg"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>,
  <iframe
    title="Bella Ciao by The Red Army Choir"
    src="https://open.spotify.com/embed/track/2ZE8jWYtT7nCi8WzSuYgXS"
    width="65%"
    height="1%"
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
];

export default function App() {
  var [song, setSong] = useState("");
  var [song1, setSong1] = useState("");
  var [song2, setSong2] = useState("");

  function showRockSongs() {
    setSong(rockSongs[0]);
    setSong1(rockSongs[1]);
    setSong2(rockSongs[2]);
  }
  function showRapSongs() {
    setSong(rapSongs[0]);
    setSong1(rapSongs[1]);
    setSong2(rapSongs[2]);
  }
  function showChoirSongs() {
    setSong(choirSongs[0]);
    setSong1(choirSongs[1]);
    setSong2(choirSongs[2]);
  }
  return (
    <div className="App">
      <h1>Best of genres:</h1>
      <div>
        <button onClick={showRockSongs}>Rock</button>
        <button onClick={showRapSongs}>Rap</button>
        <button onClick={showChoirSongs}>Choirs</button>
      </div>
      <ul>
        <li>{song}</li>
        <li>{song1}</li>
        <li>{song2}</li>
      </ul>
    </div>
  );
}
