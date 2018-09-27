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
        <hr/>
      <div>History</div>
        <div>
          <ul>
            {
              this.props.history.map((age) => {
                return <li onClick={() => this.props.onDelete(age.id)} key={age.id}>{age.age}</li>
              })
            }
          </ul> 
        </div>
      

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onAgeUp: () => dispatch({type:'AGE_UP', val:3}),
  onAgeDown: () => dispatch({type:'AGE_DOWN', val:3}),
  onDelete: (id) => dispatch({type:'AGE_DELETE', key: id})
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
