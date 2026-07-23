import { useCallback, useMemo, useState } from "react";
import Sum from "./sum";
import Post from "./post";
function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100000);
  
 const handleClick =useCallback(()=>{

  console.log("Handle Click",count);
 
 },[count]) //if we dont write count above line will always use initial value of count because here this 
            //function will work as closure which remember value of member in its outer scope
            // as we have write count their in dependency array count not show 0 after every click bcz
            //if we ever increase counter the count value will change and the handleClick also get rendered
            //bcz of dependency array

  const prime = useMemo(() => {

    function calculatePrime() {
      let total = 0;
      if (number > 1)
        total++;
      for (let i = 3; i <= number; i++) {
        total++;
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            total--;
            break;
          }
        }
      }
      return total;
    }

  }, [number])

  const obj = useMemo(()=>{
    return {name:"himani",age:20}
  },[])
  
  console.log("app render");
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Your current number: {number}</h2>
      <button onClick={() => setNumber(number + 100000)}>Increment number</button>
      <h3>Total Prime Number : {prime}</h3>
      <button onClick={handleClick}>click</button>
      <Sum number={number}></Sum>
      <Post value={obj}></Post>
    </>
  )
}
export default App;
