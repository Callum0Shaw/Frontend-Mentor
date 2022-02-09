import {useEffect, useState } from 'react';
import './global.css';
import Card from "./components/Card";
import Profile from "./components/Profile";


function App() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState('weekly');
  
  const handleTimeChange = (input) => {
    setTime(input)
  }

  function getData() {
    return fetch('/data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }
  useEffect(() => {
    getData()
    console.log('refresh');
  }, [time]);
  

  return (
    <div className='container'>
      <Profile handleTimeChange={handleTimeChange}/>
      <div className='cardsContainer'>
        {data.map((card, index) => {
          return <Card key={index} data={{title: card.title, timeframes: card.timeframes[time]}}/>
        })}
      </div>
    </div>
  )
}

export default App
