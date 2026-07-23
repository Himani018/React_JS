import React from "react";

const Sum =React.memo(({number})=>{
      function calculateSum(){
        let sum =0;
        for(let i=1;i<=number;i++){
            sum+=i;
        }
        return sum;
     }
     const total =calculateSum();
     return(
       <>
      <h1>This is our math library</h1>
      <h2>Sum :{total}</h2>
      </>
     )
})
export default Sum;
