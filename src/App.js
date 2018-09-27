import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  /*constructor(props){
  super(props)

  this.state = {
    age: 22
  }

  this.onAgeUp = this.onAgeUp.bind(this)
  this.onAgeDown = this.onAgeDown.bind(this)
}

  onAgeUp = () => {
    this.setState(prevState => ({
      age: prevState.age + 1
    }));
  }

  onAgeDown = () => {
    this.setState(prevState => ({
      age: prevState.age - 1
    }));
  }
  */
  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span>
        </div>   
        <button onClick={this.props.onAgeUp}>Age Up</button>       
        <button onClick={this.props.onAgeDown}>Age Down</button>       

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onAgeUp: () => dispatch({type:'AGE_UP'}),
  onAgeDown: () => dispatch({type:'AGE_DOWN'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
