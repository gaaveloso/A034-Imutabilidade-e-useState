import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'

const PokemonCard = (props) => {
    const evoluirPokemon = () => {
      if(props.pokemon.name === 'Pichu'){
      props.setPokemon({
        ...props.pokemon,
        name: 'Pikachu',
        evolved: true,
        weight: 6,
        image:'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
        })
      } else if(props.pokemon.name === 'Pikachu'){
        props.setPokemon({
          ...props.pokemon,
          name: 'Raichu',
          evolved: false,
          weight: 30,
          type: 'Eletric, Psychic',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png'
        })
      } else if(props.pokemon.name === 'Raichu'){
        props.setPokemon({
          ...props.pokemon,
          name: "Pichu",
          type: "Electric",
          evolved: false,
          weight: 2,
          color: 'yellow',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
          id: 0
        })
      }else if(props.pokemon.name === 'Bulbasaur'){
        props.setPokemon2({
          ...props.pokemon,
          name: 'Ivysaur',
          evolved: true,
          weight: 13,
          type: 'Grass, Poison',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png'
        })
      } else if(props.pokemon.name === 'Ivysaur'){
        props.setPokemon2({
          ...props.pokemon,
          name: 'Venusaur',
          evolved: false,
          weight: 100,
          image: 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png'
        })
      } else if(props.pokemon.name === 'Venusaur'){
        props.setPokemon2({
          ...props.pokemon,
          name: "Bulbasaur",
          type: "Grass",
          evolved: false,
          weight: 6.9,
          color: 'SpringGreen',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
          id: 1
        })
      }else if(props.pokemon.name === 'Squirtle'){
        props.setPokemon3({
          ...props.pokemon,
          name: 'Wartortle',
          evolved: false,
          weight: 22.5,
          image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png'
        })
      } else if(props.pokemon.name === 'Wartortle'){
        props.setPokemon3({
          ...props.pokemon,
          name: 'Blastoise',
          evolved: true,
          weight: 85.5,
          image: 'https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png'
        })
      } else if(props.pokemon.name === 'Blastoise'){
        props.setPokemon3({
          ...props.pokemon,
          name: "Squirtle",
          type: "Water",
          evolved: false,
          weight: 9,
          color: 'SkyBlue',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png',
          id: 7
        })
      }
      else if(props.pokemon.name === 'Charmander'){
        props.setPokemon4({
          ...props.pokemon,
          name: 'Charmeleon',
          evolved: false,
          weight: 19,
          image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png'
        })
      } else if(props.pokemon.name === 'Charmeleon'){
        props.setPokemon4({
          ...props.pokemon,
          name: 'Charizard',
          evolved: true,
          weight: 90.5,
          image: 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png'
        })
      } else if(props.pokemon.name === 'Charizard'){
        props.setPokemon4({
          ...props.pokemon,
          name: 'Charmander',
          type: 'Fire',
          evolved: false,
          weight: 8.5,
          color: 'Salmon',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
          id: 4
        })
      }
    }
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>
      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
  }
export default PokemonCard