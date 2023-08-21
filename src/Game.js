import './Game.scss';

export function Game(props) {
  const sportIdMapping = {
    1: 'Basketball',
    2: 'Football',
    3: 'Baseball',
    4: 'Softball',
    5: 'Lacrosse',
    6: 'Soccer',
    7: 'Volleyball',
    8: 'Field Hockey',
    9: 'Ice Hockey',
    10: 'Water Polo',
    11: 'Cross Country',
    12: 'Golf',
    13: 'Tennis',
  };

  function renderSportGender(genderId) {
    switch(genderId) {
      case 1:
        return 'Boys';
      case 2:
        return 'Girls';
      case 3:
        return 'Coed';
      default:
        return '';
    }
  }

  const sportName = sportIdMapping[props.game.sport_id];
  const [teamOne, teamTwo] = props.game.game_teams;

  return (
    <div className="gameBox">
      <span className="sportName">{`${renderSportGender(props.game.gender_id)} ${sportName}`}</span>
      <div className="teamRow">
        <div className="teamName">
          {`${teamOne.team.name} ${teamOne.team.mascot}`}
        </div>
        <div className="teamScore">
          {teamOne.score}
        </div>        
      </div>

      <div className="teamRow">
        <div className="teamName">
          {`${teamTwo.team.name} ${teamTwo.team.mascot}`}
        </div>
        <div className="teamScore">
          {teamTwo.score}
        </div>            
      </div>
    </div>
  );
}