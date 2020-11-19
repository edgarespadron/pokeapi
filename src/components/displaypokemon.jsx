  
const ShowPokemon = props => {

    const { pokemon } = props;

    return (
        <div className="text-center">
            <h3>{ pokemon.name }</h3>
        </div>
    )
}

export default ShowPokemon;