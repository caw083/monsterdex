import {useState, useEffect} from 'react';
import Cardlist from '../hook/cardlist/cardlist';
import Searchbox from '../hook/searchbox/searchbox';
import './App.css'


const AppHook = ()=>{
    const [searchField, setSearchField] = useState('');
    const [monster, setMonster] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => setMonster(result))
    }, [])

    const onInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchField(value);
      }

    const filteredMonster = monster.filter((monster)=>{
        return monster.name.toLowerCase().includes(searchField)
      }); 

    return (
        <div className="App">
          <h1 id='title'>Monster Roledex</h1>
          <Searchbox onInputChange={onInputChange} />
          <Cardlist data={filteredMonster}/>
        </div>        
    )

}

export default AppHook;