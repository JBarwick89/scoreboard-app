import Game from './Game';
import './Scoreboard.scss';

export default function Scoreboard(props) {
  return (
    <div className="scoreboard">
      {props.games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}
