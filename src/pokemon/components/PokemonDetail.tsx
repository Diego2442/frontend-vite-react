import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Pokemon } from "../interfaces/pokemon.interface";


interface PokemonDetailProps {
  pokemon: Pokemon | null;
  isOpen: boolean;
  onClose: () => void;
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

export const PokemonDetail = ({ pokemon, isOpen, onClose }: PokemonDetailProps) => {
  if (!pokemon) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl capitalize flex items-center gap-3">
            {pokemon.name}
            <span className="text-muted-foreground text-xl">
              #{pokemon.id.toString().padStart(3, "0")}
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-muted to-background rounded-lg p-6 flex justify-center">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="w-64 h-64 object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Altura</p>
              <p className="text-2xl font-bold">{(pokemon.height / 10).toFixed(1)} m</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Peso</p>
              <p className="text-2xl font-bold">{(pokemon.weight / 10).toFixed(1)} kg</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Tipos</h3>
            <div className="flex gap-2">
              {pokemon.types.map((type) => (
                <Badge
                  key={type.type.name}
                  className={`${typeColors[type.type.name] || "bg-gray-400"} text-white capitalize text-base px-4 py-1`}
                >
                  {type.type.name}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Habilidades</h3>
            <div className="flex gap-2 flex-wrap">
              {pokemon.abilities.map((ability) => (
                <Badge
                  key={ability.ability.name}
                  variant="outline"
                  className="capitalize"
                >
                  {ability.ability.name.replace("-", " ")}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Estadísticas</h3>
            <div className="space-y-3">
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm capitalize text-muted-foreground">
                      {stat.stat.name.replace("-", " ")}
                    </span>
                    <span className="font-bold">{stat.base_stat}</span>
                  </div>
                  <Progress value={(stat.base_stat / 255) * 100} className="h-2" activeColor="bg-amber-500"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};