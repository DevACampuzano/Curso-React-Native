import {useState, useEffect} from 'react';
import {PokemonFull} from '../interface/pokemonInterfaces';
import {pokemonApi} from '../api/pokemonApi';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemon = async () => {
    const resp = await pokemonApi
      .get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({data}) => data);
    setPokemon(resp);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
