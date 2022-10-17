import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })
  const [pokemon2, setPokemon2] = useState({
    name: "Bulbasaur",
    type: "Grass",
    evolved: false,
    weight: 6.9,
    color: 'SpringGreen',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
    id: 1
  })
  const [pokemon3, setPokemon3] = useState({
    name: "Squirtle",
    type: "Water",
    evolved: false,
    weight: 9,
    color: 'SkyBlue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png',
    id: 7
  })
  const [pokemon4, setPokemon4] = useState({
    name: 'Charmander',
    type: 'Fire',
    evolved: false,
    weight: 8.5,
    color: 'Salmon',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
    id: 4
  })
  return ( <>
  <GlobalStyles/>
    <FlexContainer>
    <PokemonCard 
      pokemon={pokemon}
      setPokemon={setPokemon}
    />
    <PokemonCard 
      pokemon={pokemon2}
      setPokemon2={setPokemon2}
    />
    <PokemonCard 
      pokemon={pokemon3}
      setPokemon3={setPokemon3}
    />
    <PokemonCard 
      pokemon={pokemon4}
      setPokemon4={setPokemon4}
    />
  </FlexContainer>
  </>
  );
}
export default App;