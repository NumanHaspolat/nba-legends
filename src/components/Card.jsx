import { useState } from "react";
import "./card.css";

const Card = ({ name, img, statistics }) => {
  const [isBackward, setIsBackward] = useState(false);

  return (
    <div
      className={` ${isBackward ? "flipped" : "card"} `}
      onClick={() => setIsBackward(!isBackward)}
    >
      <img src={img} alt={name} className={` ${isBackward ? "d-none" : ""} `} />
      <div className={` ${isBackward ? "flip-p" : "d-none"} `}>
        <p>{statistics[0]} ⚽</p>
        <p>{statistics[1]} 🪃</p>
        <p>{statistics[2]} 🥏</p>
        <p>{statistics[3]} ⭐</p>
      </div>
      <p className="player-name">{name}</p>
    </div>
  );
};

export default Card;
