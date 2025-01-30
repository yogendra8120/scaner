import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import MyForm from './form';
/*import {Garage} from './App';*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/layout"
import Blogs from "./pages/blogs"
import Home from "./pages/home"
import Contact from "./pages/contact"
import NoPage from "./pages/NoPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const Car=["a"]
root.render(
  <React.StrictMode>
    {/* <Garage mycar={Car}/> */}
    {/* <MyForm /> */}
    <App />
    {/* <Component1 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
