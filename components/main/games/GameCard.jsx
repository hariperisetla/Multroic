import Image from "next/image";
import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="w-full rounded-xl justify-between shadow-lg flex flex-col border border-slate-700">
      <img
        className="w-full rounded-t-xl"
        src="https://via.placeholder.com/640x360"
        alt={game.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{game.title}</div>
        <p className="text-slate-700 text-base">{game.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-custom-gradient rounded-full px-3 py-1 text-sm font-semibold text-slate-700 mr-2">
          {game.category}
        </span>
      </div>

      <div className="w-full justify-between flex p-3">
        <button className="custom-button text-transparent bg-clip-text border border-secondary hover:custom-button w-full m-2">
          Know More
        </button>
        <button className="custom-button w-full m-2">Play Game</button>
      </div>
    </div>
  );
};

export default GameCard;
