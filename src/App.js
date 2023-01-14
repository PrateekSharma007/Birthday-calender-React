
import { useState } from 'react';
import './App.css';
import List from './List';
import Data from './Data';


function App() {
  const [people,setPeople] = useState(Data) 


  let deleteItem = () => {
    setPeople([])
  }

  return (
    <main className = "container">
      <div>
        
        <div className="heading"><h3>{people.length} birthdays today</h3></div>
        
        {people.map((peeps) => {
          return (<List peeps = {peeps}/>)
        })}
        
        <div className="btn"><button onClick={deleteItem}>Clear All</button></div>
        
      </div>
    </main>

  );
}

export default App;
