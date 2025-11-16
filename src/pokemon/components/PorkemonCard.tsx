import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Pokemon } from "../interfaces/pokemon.interface";


interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

const typeColors: Record<string, string> = {
  fire: "bg-orange-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  psychic: "bg-pink-500",
  ice: "bg-cyan-400",
  dragon: "bg-purple-600",
  dark: "bg-gray-700",
  fairy: "bg-pink-300",
  normal: "bg-gray-400",
  fighting: "bg-red-600",
  flying: "bg-indigo-400",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  rock: "bg-yellow-700",
  bug: "bg-lime-500",
  ghost: "bg-purple-700",
  steel: "bg-gray-500",
};

export const PokemonCard = ({ pokemon, onClick }: PokemonCardProps) => {
  return (
    <Card
      className="cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg bg-card border-2 border-border group"
      onClick={onClick}
    >
      <div className="relative bg-gradient-to-br from-muted to-background p-6">
        <div className="absolute top-2 right-2 text-4xl font-bold text-muted-foreground/20">
          #{pokemon.id.toString().padStart(3, "0")}
        </div>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold capitalize text-foreground">
          {pokemon.name}
        </h3>
        <div className="flex gap-2 flex-wrap">
          {pokemon.types.map((type) => (
            <Badge
              key={type.type.name}
              className={`${typeColors[type.type.name] || "bg-gray-400"} text-white capitalize`}
            >
              {type.type.name}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};