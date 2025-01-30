import { useState, useEffect, useRef } from "react";

const Contact = () => {
  const inputElement = useRef("Hello User");
  const focusInput = () => {
    //inputElement.current.focus()
    alert(inputElement.current);
  };

    return( <><h1>hello good morning</h1>;
    <button onClick={focusInput}>focus</button>
    </>
    );
  };
  
  export default Contact;