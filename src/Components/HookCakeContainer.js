import React ,{useState} from 'react';
import {buyCake, byIce} from './../redux'
import {useSelector, useDispatch} from 'react-redux'

function HookCakeContainer () {
  const [number, addNumber] = useState(1)
  const cakes = useSelector(state => state.cake.numberOfCake)
  const ice = useSelector(state => state.ice.numberOfIce)
  const dispatch = useDispatch();
  return(
    <div>
      <h1>Number of cakes {cakes}</h1>
      <input type='text' value={number} onChange={e => addNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy cake</button>
      <h1>Number of cakes {ice}</h1>
      <button onClick={() => dispatch(byIce())}>Buy cake</button>
    </div>
  )
}

export default HookCakeContainer