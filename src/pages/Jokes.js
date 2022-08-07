import { useState, useRef, Fragment } from "react";
import useRandomJoke from "../hooks/useRandom";
const Jokes = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const joke = useRandomJoke(firstName, lastName);
  const storedJoke = JSON.parse(localStorage.getItem("joke"));
  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Fragment>
      <h1>The joke generators</h1>
      <h2>{joke ? joke : storedJoke}</h2>
      <form>
        <input placeholder="first name" ref={firstNameRef} />
        <input placeholder="last name" ref={lastNameRef} />
        <button onClick={generateJoke}>Click to generate</button>
      </form>
      <button onClick={refreshPage}>Click for new Joke</button>
    </Fragment>
  );
};

export default Jokes;
