import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [id, setId] = useState(1)
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // recebe a resposta da primisse e e trasnforma em json
      .then(response => response.json())
      // pega o objeto e seta o valor no estado pokemon
      .then(data => {
        setPokemon(data)
      })
   
  }, [id])
  // se o estado for null renderiza "caregando"
if(pokemon == null)return "Carregando"
  return (
    <>
      <h1>PokeApi</h1>
      {/* acessa o atrubuto front_default(imagem do pokemon) do objeto qye esta dentro do estado pokemon */}
      <img src={pokemon.sprites.front_default}/>
      <h2>{pokemon.name}</h2>
      {/* avaliação preguiçosa: se for true renderiza o componente se for false não faz nada */}
    {  id>1 &&  <button onClick={() => setId(id - 1)}>Anterior</button>}
      <button onClick={() => setId(id + 1)}>proximo</button>
    </>
  )
}

export default App
