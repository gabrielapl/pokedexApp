export interface PokemonProps {
  name: string;
  id: number;
  types: [
    {
      type: {
        name: string;
        url: string;
      }
    }
  ]
}