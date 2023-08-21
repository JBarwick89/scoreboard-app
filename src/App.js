import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns'
import './App.scss';
import { Scoreboard } from './Scoreboard';

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

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
      setLoading(false);
    }
  }, [date]);

  useEffect(() => {
    fetchGamesData();
  }, [fetchGamesData]);

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
              games.length > 0
              ? <Scoreboard games={games} />
              : <b>No Games for that day!</b>
            }
          </>
      }
    </div>
  );
}

export default App;
