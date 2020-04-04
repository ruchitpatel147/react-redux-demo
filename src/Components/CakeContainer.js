import React, { Component , useState} from 'react'
import {connect} from 'react-redux';
import {buyCake, byIce} from './../redux'

function CakeContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h1>Number of cakes {props.numberOfCake}</h1>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy cakes</button>
      <h1>Number of ice cream {props.numberOfIce}</h1>
      <button onClick={props.byIce}>Buy iceCream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfCake: state.cake.numberOfCake,
    numberOfIce: state.ice.numberOfIce
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    byIce: () => dispatch(byIce())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
