import React, {useState} from 'react';
import axios from 'axios';


const Pokedex = () => {
    const [pokemon, setPokemon] = useState([])

    const gatherAxios = () => {
        // fetch("https://pokeapi.co/api/v2/pokemon")
        //     .then(response => {
        //         return response.json();
        // }).then(pokeResponse => {
        //     console.log(pokeResponse.results);
        //     // set state var here
        //     setPokemon(pokeResponse.results)
        // }).catch(err=>{
        //     console.log(err);
        // });
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response=>{
            // axios wraps out "data" in the .data key
            console.log(response.data.results);
            setPokemon(response.data.results);
        })
    .catch(err => console.log(err))
    }

    return(
        <div>
            
            <button onClick={gatherAxios}>Fetch Pokemon</button>
            
            <br/>
            {
                pokemon.map((pokemon, idx) => {
                    return(
                        <div key={idx}>
                            <li>{pokemon.name}</li>
                        </div>
                    )
                }) 
            }
        </div>
    )
}
export default Pokedex;