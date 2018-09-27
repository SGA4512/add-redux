import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
 
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
  onAgeUp: () => dispatch({type:'AGE_UP', val:3}),
  onAgeDown: () => dispatch({type:'AGE_DOWN', val:3})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
