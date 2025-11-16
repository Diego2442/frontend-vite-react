import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Search } from "lucide-react";
import { useState } from "react";
import { PokemonDetail } from "../components/PokemonDetail";
import { PokemonHeader } from "../components/PokemonHeader";
import { PokemonCard } from "../components/PorkemonCard";
import type { Pokemon } from "../interfaces/pokemon.interface";
import { getPokemonList } from "../actions/get-pokemon-list";


const PokemonPage = () => {
    
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const { data: pokemonList, isLoading } = useQuery({
    queryKey: ["pokemon-list"],
    queryFn: getPokemonList
  });

  const filteredPokemon = pokemonList?.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <PokemonHeader/>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar Pokémon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg border-2 focus-visible:ring-primary"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-16 h-16 animate-spin text-primary mb-4" />
            <p className="text-xl text-muted-foreground">Cargando Pokémon...</p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <p className="text-muted-foreground">
                Mostrando {filteredPokemon?.length || 0} Pokémon
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredPokemon?.map((pokemon: Pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={() => setSelectedPokemon(pokemon)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <PokemonDetail
        pokemon={selectedPokemon}
        isOpen={!!selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />
    </div>
  );
};

export default PokemonPage;
