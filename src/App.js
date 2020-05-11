import React ,{Component} from 'react';

import './App.css';
import Person from './Person/Person' ;
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 19},
      {name: 'Manu', age: 20}
    ],
    showPersons : false
    
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex , 1) ;
    this.setState({persons: persons}) ;
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Ayush', age: 19},
        {name: event.target.value, age: 20}
      ]
    })
  }

  tooglePersonHandler =() => {
    const doesShow = this.state.showPersons ;
    this.setState({ showPersons: !doesShow}) ;
  }
 
  render(){

    let persons =null ;
    if (this.state.showPersons ) {
      persons =(
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click ={() => this.deletePersonHandler(index)}
              name ={person.name}
              age = {person.age} />
          })}
          
        </div> 
      )
    }

    return(
      <div className="App">
        <h1>Hi, i am a react app</h1>
        <button onClick={this.tooglePersonHandler}>Switch Name</button>  
        {persons}    
      </div>
    ) ;
    //return React.createElement('div',{className:'App'},React.createElement('h1', null , 'is this working now'))
  }
}


export default App;
