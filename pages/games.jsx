import GameCard from "@/components/games/GameCard";
import Image from "next/image";
import React from "react";
import gameContent from "../data/main/games.json";

const Games = () => {
  return (
    <div className="p-5 container mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-center">Games</h1>

      <div className="grid grid-cols-4 gap-5">
        {gameContent.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

Games.layout = "MainL";

export default Games;
