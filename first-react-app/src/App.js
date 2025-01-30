import logo from './logo.svg';
import './App.css';
import React from 'react';
/* 
function App() {
  return (
  <>
    <div classname="App">
  <main>
    <div className="login-container">
      <h1>Login</h1>
      <form action="#" method="POST">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required=""
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required=""
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  </main>
</div>

  </>
  );
  
}
*/
/*
class App extends React.Component{
  constructor() {
    super() ;
    this.state = {color: "React"}
  }
  render() {
    return <h1>this is for the practice {this.state.color}</h1>;
  }
}*/

/*class App extends React.Component{
  constructor(props){
    super(props);
  }
render() {
  return <h3>tis  is props {this.props.what} </h3>
}
}*/

/*function Car(props){
  
  
  return <h3>This is {props.brand}!</h3>;
}
function Garage(){
  const shoot = () => {
    alert("great shot!")
  }
  return(
    <>  <button onClick={shoot}>take the shot!</button>  
    <h2>My garage holds</h2>
    <Car brand="mustang" />
    </>
 )
}*/

/*function Car(props){
  
  
  return <h3>This is {props.brand}!</h3>;
}
function Garage(){
  const shoot = (a) => {
    alert(a)
  }
  return(
    <>  <button onClick={()=>shoot("Goal")}>take the shot!</button>  
    <h2>My garage holds</h2>
    <Car brand="mustang" />
    </>
 )
}*/

/*function Car(props){
  
  
  return <h3>This is {props.brand}!</h3>;
}
function Garage(){
  const shoot = (a,b) => {
    alert(b.type)
  }
  return(
    <>  <button onClick={(event)=>shoot("Goal", event)}>take the shot!</button>  
    <h2>My garage holds</h2>
    <Car brand="mustang" />
    </>
 )
}*/

/*function Carb(){
  return <h3>mustang</h3>;
}
function Cara(){
  return <h3>Farari</h3>;
}

function Garage(props){
  const Car = props.myCar
  if(Car) {
    return <Carb/>

  }
  return<Cara/>
}*/

/*function Garage(props){
  const Cars = props.myCar;
  return (<>
  <h1>Garage</h1>
  {Cars.length > 0 &&
  <h2>there are {Cars.length} in my garage</h2>
   }
    </>
  );
}
*/

/*function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}*/

/*function Car(props) {
  return <li>I have a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Cat'},
    {id: 2, brand: 'Dog '},
    {id: 3, brand: 'Rat'}
  ];
  return (
    <>
      <h1>what I have</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}*/


export {Garage} ;
