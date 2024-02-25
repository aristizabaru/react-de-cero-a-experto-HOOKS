import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Información del Pokemón</h1>
            <hr />
            {
                isLoading
                    ? <LoadingMessage />
                    : (
                        <PokemonCard
                            id={counter}
                            name={data.name}
                            sprites={[
                                data.sprites.front_default,
                                data.sprites.front_shiny,
                                data.sprites.back_default,
                                data.sprites.back_shiny,
                            ]}
                        />
                    )
            }
            <h2>{data?.name}</h2>

            <button
                className="mt-3"
                onClick={() => counter > 1 ? decrement() : null}
            >
                Anterior
            </button>
            <button
                className="mt-3"
                onClick={() => increment()}
            >
                Siguiente
            </button>
        </>

    );
};
