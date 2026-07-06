// const element=React.createElement('h1',{id:'title'},"Hello coder army");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// import React from "react";

// const element= <h1 id="title" className="first" >Hello coder army</h1>  //in jsx we writeclassName bcz class keyword is reserved in javascript
 const element2 = ( <div>
    <h1>hello</h1>
    <h2>hi</h2>
 </div> );
 //if u write jsx in multiple line its a good habit to use ( bracket at start and
 //                                                      ); at end

//  The below syntax is wrong we have to wrap element in a single element e.g div like above element2 
//  const element2 = ( 
//     <h1>hello</h1>
//     <h2>hi</h2>
//   );

// why??
// bcz element3 when jsx converted in react.createelement it will be lke below for above code

// React.createElement("h1",null,"hello");
// React.createElement("h2",null,"hi");

// now in element3 we can only assign one elemnt but by above syntax we have two different element thats why we have to wrap it into single element
// so we can only have one root not multiple

// if we have one element for ex div to wrap both h1 and h2 then both them comes under div and div work as root element or element3 like below

// React.createElement("div",null,
//    React.createElement("h1",null,"hello"),
//    React.createElement("h2",null,"hi")
// );




// REACT COMPONENT

// function App(){

//    return (
//       <h1>Helllo</h1>
//    )

// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element2);

// root.render(App()); //one way of calling
// root.render(<App/>); //another way of calling

// const a= App(); //another way
// root.render(a);

// const a= <App/>; //another way
// root.render(a);

//we can even pass argument to function 

// function App2(name){

//    return (
//       <h1>Helllo {name}</h1> //these curly braces ca help us to write any js expression inside jsx which can produce any single value
//    )

// }
// const b =App2("himani");
// root.render(b);

// const age =10;
// const isLoggedIn =true;
// const element =<h1>Hello Coder {isLoggedIn? <h2>Logged In</h2>:<h2>Kindly Sign In</h2>}</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// how array behaves---->
// const courses=["HTML","CSS","Js","React"];

// const element = (
//   <ul>
//    {courses.map(courses=><li>{courses}</li>)}
//  </ul>
// );

// const element =<h1 id="title" className="first">Hello Coder </h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// we can pass attribute ass well during function call
// function App(props){

//    return (
//       <h1>Helllo</h1> 
//    )

// }
// const element = <App name="himani" age={30}></App>
//in HTML for num we also use double quote but in jsx we use {} .only number can take it as js
// how function catch the attributes ?
// {
//    name="himani",
//    age=30
// }
// It pass the attributes as object.it wraps it into a object and give the single object access to you
// and this known as props

// passing style attribute  
const ab = {backgroundColor:"orange", color:"white"}
// const element = <App id="title" className="first" style={ {backgroundColor:"orange",color:"white"}} ></App> //we can directly send it too
// const element = <h1 id="title" className="first" style={ab}>hello</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


function Header({name}){
   return(
      <h1>{name} Welcome to Indian Election Commision</h1>
   )
}

function Main({user}){
   return(
      <>
       <h2>Hi {user.name}</h2>
       <h3>{user.age>18 ? "you are eligible for vote" :"Not eligible for vote"}</h3>
       <p>Your city is {user.city}</p>
      </>
   )
}

function Footer(){
    return(
      <h1> Thanks for visiting our website </h1>
    )
}

function App(){

   return(
       // these are called react fragment //empty fragment
      <>  
      <Header name="himani"></Header>
      <Main user={{name:"Himani",age:30,city:"Nainital"}}></Main>
      <Footer></Footer> 
      </>
   )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);