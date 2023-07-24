import React, {Component} from 'react';
import Searchbox from '../class/searchbox/searchbox';
import Cardlist from '../class/cardlist/cardlist';
import './App.css'


class App extends Component  {
  constructor(){
    super();
    this.state = {
        data:[],
        input: ''
    }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => this.setState({data: result}))
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value})
  }
  render(){
    const data = this.state.data.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.input)
    }); 
    console.log(this.state.input);

      return (
        <div className="App">
          <h1>Monster Roledex</h1>
          <Searchbox onInputChange={this.onInputChange} />
          <Cardlist data={data}/>
        </div>
      )
    }
}

export default App;
