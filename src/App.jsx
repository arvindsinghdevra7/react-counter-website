import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);
  const [text, settext] = useState('')
  
  function increaseNum(){
  setNum(num+1);
   settext('');
  }

  function decreaseNum(){
  setNum(num-1);
   settext('');
  }

  function jump5(){
    setNum(num+5);
     settext('');
  }
  function arvind(){
    settext('Arvind');
  }

  return (
    <div>
      <h1>{text ? text : num}</h1>

      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5}>Jump by 5</button>
      <button onClick={arvind}>Print Arvind</button>
    </div>
  )
}

export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {

 
//  const [a, setA] = useState(20)
// function chngeA(){
//   setA(30);
  
// }
//   return (
    
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={chngeA}>Click</button>
//     </div>
//   )
// }

// export default App