import PropTypes from 'prop-types';

export const PokemonCard = ({ id, name, sprites = [] }) => {
    return (
        <section
            style={{ height: 200 }}
        >
            <h2 className="text-capitalize"># {id} - {name}</h2>
            <div>
                {sprites.map(sprite => (
                    <img key={sprite} src={sprite} alt={name} />
                ))}
            </div>
        </section>
    );
};

PokemonCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    sprites: PropTypes.array,
};
