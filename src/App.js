import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from "./components/Character"

const databaseurl = `https://swapi.dev/api/people/`

const App = () => {
  
  const [data, setdata] = useState(null)

  useEffect(()=>{
    axios.get(databaseurl).then(res=>{
      setdata(res.data)
    
           }).catch(err => console.log(err))
          }
,[])


  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
        const characterElements = data.map(x=>{
          console.log(x)
          return <Character data={x} />
        })  

        


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterElements}
    </div>
  );
}


export default App;
