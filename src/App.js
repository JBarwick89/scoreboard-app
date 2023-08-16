import './App.css';
import Scoreboard from './Scoreboard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [Games, setGames] = useState([]);
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
    
  useEffect(() => {
    fetchGamesData();
    // console.log(Games);
  }, []);

  const fetchGamesData = async () => {
    try {
      const { data } = await axios.get('/games', {
        params: {
          date: '2022-05-12', // TODO: make user controllable
          priority_order: true,
        },
      });

      setGames(data.data);
    } catch (error) {
      console.error('Error fetching games data:', error);
    }
  }

  return (
    <div className="App">
      {Games.length > 0 ? <Scoreboard games={Games} /> : null}
    </div>
  );
}

export default App;
