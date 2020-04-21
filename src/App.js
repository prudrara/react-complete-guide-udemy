import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Man' , age: 28},
      {id: 2, name: 'Max' , age: 38},
      {id: 3, name: 'Malaiva' , age: 48},
    ],
    otherState: 'Some other Value',
    userOutputs: [
     {name: 'Praneet', age: 24},
     {name: 'Regan', age: 23},
     {name: 'Kaltaf', age:34},
    ],
    showPersons: false,
    userInput: '',
    
  }

  switchNameHandler = (newName) => {
    console.log("The button is clicked");
    this.setState({
      persons: [
        {name: newName , age: 28},
        {name: 'Manu' , age: 38},
        {name: 'Malaiva' , age: 39},
      ]
    })
  }

  switchUserOutputHandler = (outputUser) => {
    this.setState({
      userOutputs: [
        {name: outputUser , age: 28},
        {name: 'Manu' , age: 38},
        {name: 'Kaltaf' , age: 39}, 
      ]
    })
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  
  inputChangedHandler = ( event) => {
    this.setState({userInput: event.target.value});
  }
 
  userOutputChangedHandler = (event) => {
    this.setState({
      userOutputs: [
        {name:  event.target.value, age: 28},
        {name: event.target.value , age: 38},
        {name: 'Kaltaf' , age: 39}, 
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updData = text.join('');
    this.setState({userInput: updData});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    }

   let persons = null;
   if ( this.state.showPersons ) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>
    );

     style.backgroundColor= 'red';

     style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }

  //let classes = ['red', 'bold'].join('');
  let classes = [];
  if(this.state.persons.length <= 2){
    classes.push('red');
  }

  if(this.state.persons.length <= 1){
    classes.push('bold');
  }

  const charList = this.state.userInput.split('').map((ch, index) => {
    return <Char 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)} 
      />;
  });
    return (
      <StyleRoot>
      <div className="App">
        <h1> THis is Praneeth</h1>
        <p className={classes.join(' ')}> Hello , this is React </p>
        <button 
        style = {style}
        onClick={this.togglePersonHandler}> Toggle Persons </button>
        {persons}  

        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
      </StyleRoot>
    );
    // React.createElement('div', {className:'App'}, React.createElement('h1',null,'hello'));
  }
}

export default Radium(App);
