import { useEffect, useState } from "react";

//const Home = () => {
    
// const [mambers, setmambers] = useState("Yogendra")

// return(
//   <>
//   <h1>The name is {name}!</h1>
// <button
// type="button" onClick={() => setName("Bhupenda")}>Brother</button>
// </>

// )

function Home() {
  const [count,setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
  
  return(
    <>
    <p>count: {count} </p>
    <button onClick={() => setCount((c) => c+1)}>+
    </button>
    <p>Calculation: {calculation}</p>
    </>
  )
  
  }

 // };


  
  export default Home;