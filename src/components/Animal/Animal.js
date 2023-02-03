import './Animal.css';

export default function Animal({ animal }) {
  console.log('animal', animal);
  return (
    <div className="animal">
      <h3>{animal.name}</h3>
      <p>{animal.says}</p>
      <p>Hi! I am a {`${animal.type}`}</p>
    </div>
  );
}
