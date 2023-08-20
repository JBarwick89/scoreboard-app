import './App.scss';
import Scoreboard from './Scoreboard';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [Games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString("en-CA"));

  const fetchGamesData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/games', {
        params: {
          date,
          priority_order: true,
        },
      });

      setGames(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching games data:', error);
    }
  }, []);

  useEffect(() => {
    fetchGamesData();
  }, [fetchGamesData, date]);

  const onChangeDate = (newDate) => {
    setDate(newDate.target.value);
  };

  return (
    <div className="App">
      <div className="dateSelector">
        <input 
          type="date" 
          value={date} 
          onChange={(e)=>onChangeDate(e)}
        />
      </div>
      {
        loading 
        ? <b>Loading.......</b>
        : <>
            {
              Games.length > 0
              ? <Scoreboard games={Games} />
              : <b>No Games for that day!</b>
            }
          </>
      }
    </div>
  );
}

export default App;
