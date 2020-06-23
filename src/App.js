import React from 'react';
import Dinner from './dinner.js'

function App() {
  return( 
    // <Dinner></Dinner>
  <div>
    <hr/>
    <Dinner dishName="Chicken biryani" sweetDish="kheer"/>
    <hr/>
    <Dinner dishName="Chicken biryani" sweetDish="jagar ka halva"/>
    <hr/>
  </div>
  )
}

export default App;
