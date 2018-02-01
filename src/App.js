import React, { Component } from 'react';
import InputValidation from './ValidationComponent/InputValidation';
import CharComponent from './CharComponent/CharComponent'
import './App.css';

class App extends Component {
 state = {
   inputLength : ''

 }


 changeInputHandler = (event)=>{
 this.setState({
   inputLength :event.target.value
 })
 }

 deleteBoxHandler= (index)=>{
   const inputText = this.state.inputLength.split('');
   inputText.splice(index,1)
   const updatedText = inputText.join('')
   this.setState({
     inputLength:updatedText
   })
 }


  render() {
    const charBox =
          this.state.inputLength.split("").map((ch,index) =>{
            return <CharComponent
            char = {ch}
            key ={index}
            clicked = {()=>this.deleteBoxHandler(index)}
            />
          });

    return (
      <div className="App">
       <input
       style = {{marginTop:20, width: 300}}
       type='text'
       onChange = {this.changeInputHandler} />

      <p> Length of entered character : {this.state.inputLength.length}</p>
      
      <InputValidation textLength = {this.state.inputLength.length}/>

      {charBox}
      </div>
    );
  }
}

export default App;
