import Game from './Game';

export default function Scoreboard(props) {
  return (
    <div>
      {props.games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}
