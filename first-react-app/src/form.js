import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <>
  <label htmlFor="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <br />
  <br />
</>
<lable>
  email
  <input type="email" placeholder="email" />
</lable>
<>
  <h3>this is checkbox</h3>
  <lable>
    check box 1
    <input type="checkbox" name="C1" />
  </lable>
  <lable>
    check box 2
    <input type="checkbox" name="C1" />
  </lable>
</>


      <input type="submit" />
    </form>
  )
}
export default MyForm;