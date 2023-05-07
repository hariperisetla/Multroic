import Image from "next/image";
import React from "react";

const GameCard = ({ game }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="https://via.placeholder.com/640x360"
        alt={game.title}
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{game.title}</div>
        <p class="text-gray-700 text-base">{game.description}</p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {game.category}
        </span>
      </div>
    </div>
  );
};

export default GameCard;
