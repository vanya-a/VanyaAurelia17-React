import React, { ButtonHTMLAttributes } from 'react';
import Segment from './components/Segment';
import './App.css';

interface IState {
  Nama: string; 
  Kelas: string;
  Pagi: string;
  isAvailable: boolean;
  counter: number;
}
class App extends React.Component <any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      Nama: 'Vanya',
      Kelas: 'XI IPB',
      Pagi: 'True',
      isAvailable:true,
      counter: 1,
    };
  }

  handleClick = () => {
    console.log("button clicked ...")
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render()
    {if(this.state.counter % 3) {
      return (
      <div style={{textAlign: 'center'}}>
          <Segment Nama="Vanya" Kelas="XI IPB" Pagi="True"/>
        
          <h1>
            {this.state.counter}
          </h1>
          
          <button type="button" onClick={this.handleClick}>
            Click Here
          </button>

        </div>
      )
  } else {

    return (
        <div style={{ textAlign: 'center'}}>
          <Segment Nama="Vanya" Kelas="XI IPB" Pagi="True"/>

          <h1>
            {this.state.counter}
          </h1>

          <button type="button" onClick={this.handleClick}>
            Click Here
          </button>

          <div>
          <img src="https://i.pinimg.com/564x/6d/0e/72/6d0e72dae9684deb30e489b14847d0c2.jpg"></img>
          </div>

        </div>  
      )
    }
  }
}

export default App;