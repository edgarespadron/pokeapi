import { useState,} from 'react';
import ShowPokemon from './components/displaypokemon';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ pokemon, setPokemon ] = useState([]);


  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => res.json())
      .then(res => setPokemon(res.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="my-5 mx-auto">

      <div className="d-flex justify-content-center">
        <button 
          className="btn btn-danger"
          onClick={ getPokemon }
          >Fetch Pokemon
        </button>
      </div>

      {
        pokemon.map((p,i) => {
          return <ShowPokemon
                    pokemon={p}
                    key={i}
                />
        })
      }

    </div>
  );
}

export default App;