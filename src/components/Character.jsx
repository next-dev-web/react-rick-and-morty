export default function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid rounded-pill"
      />
      <p>Location: {character.origin.name}</p>
			<p>Status: {character.status}</p>
			<p>Specie: {character.species}</p>
			<p>Gender: {character.gender}</p>
    </div>
  );
}
