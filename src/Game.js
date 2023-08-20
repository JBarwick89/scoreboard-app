import './Game.scss';

export default function Game(props) {
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

  const sportGender =  (() => {
    switch (props.game.gender_id) {
      case 1:
        return 'Boys';
      case 2:
        return 'Girls';
      case 3:
        return 'Coed';
      default:
        return '';
    }
  })();
  
  const sportName = sportIdMapping[props.game.sport_id];

  // console.log(props.game);
  const { team: teamOne, score: teamOneScore } = props.game.game_teams[0];
  const { mascot: teamOneMascot, name: teamOneName } = teamOne;

  const { team: teamTwo, score: teamTwoScore } = props.game.game_teams[1];
  const { mascot: teamTwoMascot, name: teamTwoName } = teamTwo;

  return (
    <div className="gameBox">
      <span className="sportName">{`${sportGender} ${sportName}`}</span>
      <div className="teamRow">
        <div className="teamName">
          {`${teamOneName} ${teamOneMascot}`}
        </div>
        <div className="teamScore">
          {teamOneScore}
        </div>        
      </div>

      <div className="teamRow">
        <div className="teamName">
          {`${teamTwoName} ${teamTwoMascot}`}
        </div>
        <div className="teamScore">
          {teamTwoScore}
        </div>            
      </div>
      {/* {props.game.location} */}
    </div>
  );
}