// Importing the 'React' and 'GameCard' components from their respective modules.
import React from "react";
import GameCard from "@/components/main/games/GameCard";

// Importing the 'gameContent' data from a local JSON file.
import gameContent from "../data/main/games.json";

// Defining the 'Games' component as an arrow function.
const Games = () => {
  // Defining a helper function to map over the 'gameContent' data and render a 'GameCard' component for each item.
  const renderGameCards = () => {
    return gameContent.map((game) => {
      return <GameCard key={game.id} game={game} />;
    });
  };

  // The 'Games' component returns a container element with a heading and a grid of 'GameCard' components.
  return (
    <div className="container mx-auto pb-10 space-y-8">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-custom-gradient">
        Games
      </h1>

      <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-4">
        {renderGameCards()}
      </div>
    </div>
  );
};

// Assigning the 'MainL' layout to the 'Games' component.
Games.layout = "MainL";

// Exporting the 'Games' component as the default export of this module.
export default Games;
