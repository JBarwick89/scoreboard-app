import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [Games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const { data } = await axios.get('/games', {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // }, 
        // withCredentials: false,
        params: {
          // limit: 1,
          date: '2022-05-12',
          priority_order: true,
        },
      });

      console.log(data); //TODO: REMOVE
      return data;
    }
  
    setGames(getGames());
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
