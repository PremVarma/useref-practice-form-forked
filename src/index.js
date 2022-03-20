import axios from "axios";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    part1:
    You're given the UI for a basic form. Your task is to 
    hook it all up using refs. 

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to 
    empty strings.

    part2: 
    Develop a search tag with debounce functionality.
    Debouncing means that a function will not be called again until
    a certain amount of time has passed. So here the setsearch method
    is called repeatedly for every key stroke, instead it should
    be delayed by the time peroid mentioned in the debounce method (add some 
    console log to validate this no need to use any api mock). 
    It should avoid memory leaks and the solution provided should be scalable.
    
    For api integration create an account in https://developers.giphy.com/dashboard/
    Once you have got your API token refer the search api docs page

    eg: api endpoint
    https://api.giphy.com/v1/gifs/search?api_key=< your api token >&q=<search value>

    Display the result images below in a 4x4 grid box, you can choose any size of your preference

    NOTE: 
    do not use any external library like lodash

*/

function ReactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  function handleFocus(focusInputRef) {
    focusInputRef.current.focus();
  }

  const handleSubmit = (e) => {
    const name = nameInput?.current?.value;
    const password = passwordInput?.current?.value;
    const email = emailInput?.current?.value;
    console.log(name, email, password);
  };

  const handleReset = () => {
    emailInput.current.value = "";
    passwordInput.current.value = "";
    nameInput.current.value = "";
  };

  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim().length === 0) {
      return;
    }
    setError("");
    setLoading(true);
    try {
      const result = await axios(
        `https://api.giphy.com/v1/gifs/search?api_key=qFgoPTufAMopvdoGwr0l0KIhN9IlXI0a&q=${searchTerm}`
      );
      setData(result?.data?.data);
      setError("");
      setLoading(false);
    } catch (err) {
      setError(err?.response?.data?.meta?.msg || "Something went wrong!");
      setLoading(false);
    }
  };

  const debounce = (callback, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => callback.apply(context, args), delay);
    };
  };

  const renderGifs = () => {
    if (loading) {
      return <h3>Please wait while loading...</h3>;
    }
    return data.map((singleItem) => {
      return (
        <div key={singleItem.id} className="gridItem">
          <img src={singleItem.images.fixed_height.url} alt="" />
        </div>
      );
    });
  };

  // do not modify this line
  const debouncedSearch = debounce(handleSearch, 1000);
  return (
    <React.Fragment>
      <div>
        <p>part 1</p>
        <label>
          Name:
          <input ref={nameInput} placeholder="name" type="text" />
        </label>
        <label>
          Email:
          <input ref={emailInput} placeholder="email" type="text" />
        </label>
        <label>
          Password:
          <input ref={passwordInput} placeholder="password" type="text" />
        </label>
        <hr />
        <button onClick={() => handleFocus(nameInput)}>Focus Name Input</button>
        <button onClick={() => handleFocus(emailInput)}>
          Focus Email Input
        </button>
        <button onClick={() => handleFocus(passwordInput)}>
          Focus Password Input
        </button>
        <hr />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <hr />
        <p>part 2</p>
        <label>
          Search:
          <input
            placeholder="search with debounce"
            type="text"
            // do not modify this line
            onChange={(e) => debouncedSearch(e.target.value)}
          />
        </label>
      </div>
      {error && <h5 className="error">{error}</h5>}
      {data.length > 0 && <h3>Search results </h3>}
      <div className="gridContainer">{renderGifs()}</div>
    </React.Fragment>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ReactForm />, rootElement);
