// how food props look
// const props ={
// foods:["Apple","Orange","Banana"],
// a=:10,
// }
function Food({foods}){   //if we want all the keys we do function food (props).but here we have done destructuring by only taking one key value pair of food 
   return(
    <>
        <uL>
             {foods.map(food => <li>key={food}</li>)}
        </uL>
    </>
   )
}
export default Food;