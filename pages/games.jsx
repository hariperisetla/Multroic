import GameCard from "@/components/main/games/GameCard";
import Image from "next/image";
import React from "react";
import gameContent from "../data/main/games.json";

const Games = () => {
  return (
    <div className="space-y-8 container mx-auto pb-10">
      <h1 class="text-5xl font-extrabold bg-custom-gradient text-transparent bg-clip-text text-center">
        Games
      </h1>

      <div className="grid grid-cols-1 px-10 md:grid-cols-4 gap-10">
        {gameContent.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

Games.layout = "MainL";

export default Games;
