import { useState } from "react";

function App(){
  const[count,setCount]=useState([10,20,30]);
   function handleChange(){
      setCount([...count,40]);//here we give completelt new array .we open the prev count array and append
      // 40 in it and this whole send as a array of new reference
   }
 
  return(
    <>
      <p>This is the counter for React app</p>
      <h1>Counter:{count}</h1>
      <button onClick={handleChange}>Increment</button>
      {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    </>
  )

}

export default App;