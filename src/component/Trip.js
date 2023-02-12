import React, { useState, useEffect } from "react";
import { Head } from "../styles/TripStyling";
import item from "../Data.json";

function Trip() {
  const [randomName, setRandomName] = useState(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * item.data.length);
    setRandomName(item.data[randomIndex].name);
  };
  return (
    <Head>
      <h1>Random Destination</h1>

      <section>
        <img src="/img/beach.jpg" alt="" />
        <img src="/img/city.jpg" alt="" />
        <img src="/img/mountain.jpg" alt="" />
      </section>

      {/* source: https://codepen.io/ShadowShahriar/pen/XWaLPOv */}
      <div>
        <button onClick={handleClick}>LET'S GO</button>
      </div>
      <div>{randomName && <p>Destination: {randomName}</p>}</div>
    </Head>
  );
}

export default Trip;
